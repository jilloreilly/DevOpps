import { useState } from 'react';
import getJobs from "../services/getJobs.js";
import JobSearchResults from "../components/JobSearch/Results.jsx";

function JobSearch() {

  // Job search results
  const [jobs, setJobs] = useState([]);

  // Form data
  const [formData, setFormData] = useState({
    query: '',
    location: '',
    });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
    }));
  };

  // Handle Clear button
  const handleJobSearchClear = () => {
    setFormData({query: '', location: ''});
  };

  // Handle form submission
  const handleJobSearch = async (event) => {
    event.preventDefault();

    let query = formData.query;
    query = query.trim();
    let location = formData.location;
    location = location.trim();

    // Get jobs from API
    const response = await getJobs({
      query: query, 
      location: location,
    });

    // Update jobs array
    setJobs(response.data.jobs);
  };

  const JobSearchFilter = () => {
    return (
      <>
        <form className="bg-white rounded-lg p-2 mr-2" onSubmit={handleJobSearch}>

          <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div className="col-span-full">
                <label htmlFor="query" className="block text-sm font-medium leading-6 text-gray-900">
                  Job Title
                </label>
                <div className="mt-2">
                  <input
                    value={formData.query}
                    onChange={handleInputChange}
                    type="text"
                    name="query"
                    placeholder="eg Frontend Developer"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required/>
                </div>
              </div>
              
              <div className="sm:col-span-4">
                <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                  Location
                </label>
                <div className="mt-2">
                  <input
                    value={formData.location}
                    onChange={handleInputChange}
                    name="location"
                    type="text"
                    placeholder="City, Country"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required/>
                </div>
              </div>

              {/* <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div> */}

              {/* <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
                      
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" 
          onClick={handleJobSearchClear} 
          className="text-sm font-semibold leading-6 text-gray-900">
            Clear
          </button>
          <button
            type="submit" 
            onClick={handleJobSearch}           
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Find Jobs
          </button>
        </div>
      </form>
      
      </>
    )
  };

  return (
    <div className="container mx-auto">
      <h1>Job Results</h1>
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-row">
        <aside className="w-4/12 sm:w-full md:w-4/12">
          <h2>Find your next role:</h2>
          <JobSearchFilter />
        </aside>

        <section className="w-8/12 sm:w-full">
          <JobSearchResults jobs={jobs} />
        </section>
      </div>
    </div>
  );
}

export default JobSearch;
