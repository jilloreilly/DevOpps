import { useLocation } from 'react-router-dom';


function JobDetails() {

  const location = useLocation();
  const { jobData } = location.state;
  let data = jobData.jobs;

  console.log(data);
  
  return (
  <>
    <div className="container flex items-center justify-center w-full">
      <h1>Job Details</h1>

      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#">
            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a> */}
        
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
          <p>Company: {data.company}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
          <p>Location: {data.location}</p>
          <p>Employment Type: {data.employmentType}</p>
          <p>Date posted: {data.datePosted}</p>
          <p>Salary: {data.salaryRange == "" ?  "Competitive" : data.salaryRange}</p>
          {/* <ul>
            <li><a href={jobData.url}>{jobData.jobProvider}</a></li>
          </ul> */}
        </div>
      </div>
    </div>
  </>
    );
  }
  
  export default JobDetails;