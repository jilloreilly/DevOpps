import JobList from "../JobList";

function JobSearchResults({jobs}){  
  return (
    <>
        {jobs.map((job) =>(
          <JobList
          key={job.id}
          data={{...job}}
          />
        ))
        }
    </>
  )
}

export default JobSearchResults;