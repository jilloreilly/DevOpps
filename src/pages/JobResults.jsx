import { useEffect, useState } from 'react';
import axios from 'axios';
import JobList from "../components/JobList";
import SearchFilter from "../components/SearchFilter";

function JobResults() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const title = queryParams.get('title');
    const location = queryParams.get('location');
    if (title && location) {
      fetchJobs(title, location);
    }
  }, []);

  const fetchJobs = async (jobTitle, location) => {
    const resource = {
      method: 'GET',
      url: 'https://jobs-api14.p.rapidapi.com/list',
      params: {
        query: jobTitle,
        location: location,
        distance: '1.0',
        language: 'en_GB',
        remoteOnly: 'false',
        datePosted: 'month',
        employmentTypes: 'fulltime',
        index: '0'
      },
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_JOBS_API_KEY,
        'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(resource);
      setJobs(response.data.jobs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1>Job Results</h1>
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-row">
        <aside className="w-4/12 sm:w-full md:w-4/12">
          <h2>Filter your results:</h2>
          <SearchFilter />
        </aside>
        <section className="w-8/12 sm:w-full">
          <div>
            {jobs.map((job) =>(
              // <JobList
              //   title={job.title}
              //   id={job.id}
              //   key={job.id}
              //   company={job.company}
              //   location={job.location}
              //   description={job.description}
              //   type={job.employmentType}
              //   date={job.datePosted}
              //   salary={job.salaryRange} />
              <JobList
                key={job.id}
                data={{...job}}
                 />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default JobResults;
