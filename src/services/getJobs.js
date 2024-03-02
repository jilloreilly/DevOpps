import axios from 'axios';

/**
 * getJobs from Jobs API (via Rapid API).
 * 
 * 
 * @param params An object of parameters {query, location, distance, language, remoteOnly, datePosted, employmentTypes, index}
 * @returns An array of job objects
 * 
 * See: https://rapidapi.com/Pat92/api/jobs-api14
 * 
 **/
const getJobs = async (params) => {

  if (!params.query) {
    throw new Error('The query parameter is required.');
  }

  if (!params.location) {
    throw new Error('The location parameter is required.');
  }

  const resource = {
    method: 'GET',
    url: 'https://jobs-api14.p.rapidapi.com/list',
    params: {...params},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_JOBS_API_KEY,
      'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(resource);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }

};

export default getJobs;