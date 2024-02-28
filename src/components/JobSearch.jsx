import React, { useState } from 'react';

function JobSearch() {
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [jobCategories, setJobCategories] = useState([]);
  const [distance, setDistance] = useState('');

  // Function to handle the submission of the search form
  function handleSubmit(event) {
    event.preventDefault();
    // Here you can implement the logic to send the selection fields to the backend for processing
    console.log('Location:', location);
    console.log('Job Type:', jobType);
    console.log('Experience Level:', experienceLevel);
    console.log('Job Categories:', jobCategories);
    console.log('Distance:', distance);
  }

  // Function to handle checkbox changes
  function handleCheckboxChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setJobCategories([...jobCategories, value]);
    } else {
      setJobCategories(jobCategories.filter(category => category !== value));
    }
  }

  return (
    <aside className="bg-gray-100 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Job Search</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location:</label>
          <input
            type="text"
            id="location"
            className="border border-gray-300 rounded-md w-full py-2 px-3 text-sm mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="distance" className="block text-sm font-medium text-gray-700">Distance (miles):</label>
          <input
            type="number"
            id="distance"
            className="border border-gray-300 rounded-md w-full py-2 px-3 text-sm mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobType" className="block text-sm font-medium text-gray-700">Job Type:</label>
          <select
            id="jobType"
            className="border border-gray-300 rounded-md w-full py-2 px-3 text-sm mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700">Experience Level:</label>
          <select
            id="experienceLevel"
            className="border border-gray-300 rounded-md w-full py-2 px-3 text-sm mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="Senior">Junior</option>
            <option value="Entry-level">Entry-level</option>
            <option value="Mid-level">Mid-level</option>
            <option value="Mid-level">Pleno</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium text-gray-700 mb-1">Job Categories:</span>
          <label className="inline-flex items-center mt-1">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              value="Frontend"
              checked={jobCategories.includes('Frontend')}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2 text-sm text-gray-700">Frontend</span>
          </label>
          <label className="inline-flex items-center mt-1">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              value="Backend"
              checked={jobCategories.includes('Backend')}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2 text-sm text-gray-700">Backend</span>
          </label>
          <label className="inline-flex items-center mt-1">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              value="Full Stack"
              checked={jobCategories.includes('Full Stack')}
              onChange={handleCheckboxChange}
            />
            <span className="ml-5 text-sm text-gray-700">Full Stack</span>
          </label>
        </div>
        
        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 w-full">
          Search
        </button>
      </form>
    </aside>
  );
}

export default JobSearch;
