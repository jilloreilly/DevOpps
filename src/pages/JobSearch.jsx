import { useState, useEffect } from 'react';
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

  // Track if a search is in progress to disable buttons and prevent accidental multi-searching 
  const [isSearching, setIsSearching] = useState(false);

  // Index for pagination
  const [page, setPage] = useState(0);

  // Listen for the page to change and rerun the search when it does
  useEffect(() => {
    if (!isSearching) {
      handleJobSearch();
    }
  }, [page]);

  // Handle Next Page button
  const handleNextPage = () => {
    setPage(page + 1);
  };

  // Handle Previous Page button
  const handlePrevPage = () => {
    setPage(page - 1);
  };

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
    setFormData({ query: '', location: '' });
  };

  // Handle form submission
  const handleJobSearch = async (event) => {

    setIsSearching(true);

    // Prevent form submitting and set page to 0
    if (event) {
      event.preventDefault();
      setPage(0);
    }

    let query = formData.query;
    query = query.trim();
    let location = formData.location;
    location = location.trim();

    // Get jobs from API
    const response = await getJobs({
      query: query,
      location: location,
      index: page
    });

    // Update jobs array
    setJobs(response.data.jobs);
    console.log(response);

    setIsSearching(false);
  };

  const JobSearchFilter = () => {
    return (
      <>
        <form className="bg-white rounded-lg p-2 mr-2" onSubmit={handleJobSearch}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-6">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="col-span-full">
                  <label htmlFor="query" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Job Title
                  </label>
                  <div className="mt-2">
                    <input
                      value={formData.query}
                      onChange={handleInputChange}
                      type="text"
                      name="query"
                      placeholder="eg Frontend Developer"
                      className="
                    block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required />
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

          <div className="mt-6 flex justify-start gap-x-6">
            <button type="button"
              onClick={handleJobSearchClear}
              className="rounded-md px-3 py-2 text-sm font-semibold bg-gray-200 text-gray-600 hover:bg-gray-300 focus:ring-gray-400">
              Clear
            </button>
            <button
              type="submit"
              onClick={handleJobSearch}
              //disabled={isSearching}
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

      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-row">
        <aside className="w-4/12 sm:w-full md:w-4/12">
          <JobSearchFilter />
        </aside>

        <section className="w-8/12 sm:w-full">
          <h1 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl mb-6">Job Search</h1>
          <div id="next-page-nav" className={`your-normal-class ${jobs.length < 10 ? "hidden" : "block"}`}>
            <button
              id="prev-button"
              onClick={handlePrevPage}
              disabled={page < 1 || isSearching}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Previous
            </button>
            <div className="inline-block mb-6">Page {page + 1}</div>
            <button
              id="next-button"
              onClick={handleNextPage}
              disabled={jobs.length < 10 || isSearching}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Next
            </button>
          </div>

          <JobSearchResults jobs={jobs} />
        </section>
      </div>
    </div>
  );
}

export default JobSearch;
