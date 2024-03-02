import JobList from "../JobList";

function JobSearchResults({jobs}){  
  return (
    <>
        {jobs.map((job) =>(
          <JobList
            title={job.title}
            id={job.id}
            key={job.id}
            company={job.company}
            location={job.location}
            type={job.employmentType}
            date={job.datePosted}
            salary={job.salaryRange} />
        ))
        }
    </>
  )
}

export default JobSearchResults;