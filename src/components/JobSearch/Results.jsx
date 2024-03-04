import { Link } from "react-router-dom";
import JobList from "../JobList";

function JobSearchResults({jobs, handleJobSelection}) {

  // Show job on details page
  const handleViewJobDetails = (job) => {
    handleJobSelection(job);
  };

  return (
    <>
      {jobs.map((job, i) => (
        <Link key={`${i}-${jobs.id}`} onClick={() => handleViewJobDetails(job)} className="w-full mb-1">
          <JobList
          key={job.id}
          data={{...job}}
          />
        </Link>
        ))
        }
    </>
  )
}

export default JobSearchResults;