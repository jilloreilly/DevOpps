import { useState, useEffect } from 'react';
import getJobs from "../services/getJobs.js";
import JobSearchResults from "../components/JobSearch/Results.jsx";
import EmploymentTypes from '../components/JobSearch/EmploymentTypes.jsx';
import JobDetails from './JobDetails.jsx';

function JobSearch() {

  const [selectedJob, setSelectedJob] = useState(null);
  const handleJobSelection = (job) => {
    setSelectedJob(job);
  };

  // Job search results
  const [jobs, setJobs] = useState([]);

  // Test for initial render
  const [initialRender, setInitialRender] = useState(true);

  // Test for reset state (eg. when the user clears the form)
  const [isReset, setReset] = useState(true);

  // Form data
  const [formData, setFormData] = useState({
    query: '',
    location: '',
    distance: '',
    remoteOnly: false,
    datePosted: '',
    employmentTypes: '',
  });

  // Get querystring values and set form data on first render
  useEffect(() => {
    const queryString = new URLSearchParams(window.location.search);
    const qsTitle = queryString.get('title') || '';
    const qsLocation = queryString.get('location') || '';
    setFormData({
      query: qsTitle,
      location: qsLocation,
    });
  }, []);

  // Track if a search is in progress to disable buttons and prevent accidental multi-searching 
  const [isSearching, setIsSearching] = useState(false);

  // Index for pagination
  const [page, setPage] = useState(0);

  // Listen for the page to change and rerun the search when it does
  useEffect(() => {
    // But not if we are already searching
    if (!initialRender && !isSearching) {
      handleJobSearch();
    }
  }, [page, initialRender]);

  // Set initialRender to false after first render
  useEffect(() => {
    setInitialRender(false);
  }, []);


  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  // Handle Clear button
  const handleJobSearchClear = () => {
    setFormData({ query: '', location: '' });
    setReset(true);
  };

  // Handle form submission
  const handleJobSearch = async () => {

    setIsSearching(true);

    // Get query and location from URL if provided
    const queryString = new URLSearchParams(window.location.search);
    const qsTitle = queryString.get('title');
    const qsLocation = queryString.get('location');

    let query;
    let location;

    if (!formData.query) {
      query = qsTitle;
    } else {
      query = formData.query;
    }

    if (!formData.location) {
      location = qsLocation;
    } else {
      location = formData.location;
    }

    // So long as we have a query and location, we can search
    if (query && location) {
      
      //console.log(formData)
      
      // Get jobs from API
      const response = await getJobs({
        query: query,
        location: location,
        distance: formData.distance,
        remoteOnly: formData.remoteOnly ? 'true' : 'false',
        datePosted: formData.datePosted,
        employmentTypes: formData.employmentTypes,
        index: page
      });

      // Update jobs array
      setJobs(response.data.jobs);
      // console.log(response);

      // Track we have done a search
      setReset(false);
    }

    // Remove the query string from the URL
    const urlWithoutQueryString = window.location.pathname;
    window.history.replaceState({}, document.title, urlWithoutQueryString);

    setIsSearching(false);
  };

  // Handle form submission
  const handleSearchFormSubmit = async (event) => {
    event.preventDefault();
    setPage(0);
    await handleJobSearch();
  }

  // Handle page change (eg +1 or -1)
  const requestPageChange = (delta) => {
    setPage(page + delta)
  };

  return (
    <div className="container mx-auto">

      <h1 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl mb-6">Job Search</h1>

      {selectedJob ? (
        <>
          <button onClick={() => setSelectedJob(null)} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Back to Search</button>
          <JobDetails selectedJob={selectedJob} />
        </>
        ) : (
      <div className="flex flex-col md:flex-row lg:flex-row">
        <aside className="w-full md:w-3/12">

          <form onSubmit={handleSearchFormSubmit} className="bg-white rounded-lg p-2 mr-2">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-6">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                  <div className="col-span-full">
                    <label htmlFor="query" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                      Job Title
                    </label>
                    <div className="mt-2">
                      <select
                        value={formData.query}
                        onChange={handleInputChange}
                        name="query"
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      >
                        <option value="">Select a Role</option>
                        <option value="Software Developer">Software Developer</option>
                        <option value="Front End Developer">Front End Developer</option>
                        <option value="Back End Developer">Back End Developer</option>
                        <option value="Full Stack Developer">Full Stack Developer</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                      Location
                    </label>
                    <div className="mt-2">
                      <input
                        value={formData.location}
                        onChange={handleInputChange}
                        name="location"
                        type="text"
                        placeholder="City, Country"
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="Distance" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                      Distance (km)
                    </label>
                    <div className="mt-2">
                      <input
                        value={formData.distance || ''}
                        onChange={handleInputChange}
                        name="distance"
                        type="text"
                        placeholder="Distance from location (optional)"
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <div className="mt-2">
                      <label htmlFor="remoteOnly" className="text-sm font-medium leading-6 text-gray-900 text-left">
                        Remote Only
                      </label>
                      <input
                        checked={formData.remoteOnly || false}
                        onChange={handleCheckboxChange}
                        name="remoteOnly"
                        type="checkbox"
                        placeholder="Distance from location (optional)"
                        className="rounded-md border-0 py-1.5 ml-3 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="datePosted" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                      Posted
                    </label>
                    <div className="mt-2">
                      <select
                        value={formData.datePosted}
                        onChange={handleInputChange}
                        name="datePosted"
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option value="">Show jobs posted...</option>
                        <option value="today">Today</option>
                        <option value="3days">Last 3 days</option>
                        <option value="week">One week</option>
                        <option value="month">One month</option>
                      </select>
                    </div>
                  </div>

                  <EmploymentTypes value={formData.employmentTypes || ''} onChange={handleInputChange} />                  

                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-start gap-x-6">
              <button type="button"
                onClick={handleJobSearchClear}
                className="rounded-md px-3 py-2 text-sm font-semibold bg-gray-200 text-gray-600 hover:bg-gray-300 focus:ring-gray-400">
                Clear
              </button>
              <button
                type="submit"
                disabled={isSearching}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Find Jobs
              </button>
            </div>
          </form>

        </aside>

        <section className="w-full md:w-9/12">
          <div id="next-page-nav" className={`flex justify-end items-center mb-2 ${jobs.length < 10 ? "hidden" : "block"}`}>
            <button
              id="prev-button"
              onClick={() => requestPageChange(-1)}
              disabled={page < 1 || isSearching}
              className="rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Previous
            </button>
            <div className="inline-block mx-2">Page {page + 1}</div>
            <button
              id="next-button"
              onClick={() => requestPageChange(+1)}
              disabled={jobs.length < 10 || isSearching}
              className="rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Next
            </button>
          </div>

          <div className="text-left">
            {
              // Show appropriate messages or results
              isSearching ? "Searching..." : (jobs.length === 0 && !isSearching && !isReset) ? "No jobs found" : <JobSearchResults jobs={jobs} handleJobSelection={handleJobSelection} />
            }
          </div>
        </section>
      </div>
     )}
    </div>
  );
}

export default JobSearch;
