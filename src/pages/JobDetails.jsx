// job details
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';



function JobDetails() {

  const location = useLocation();
  const { jobData } = location.state;
  
  return (
  <>
    <div className="container w-full">
      <h1>Job Details</h1>

      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#">
            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a> */}

        <p>Name: {jobData.name}</p>
        <p>Name: {jobData.age}</p>
        
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Job Title{jobData.title}</h5>
          <p>Company: {jobData.company}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nobis! Architecto officiis doloremque aliquid! Ipsam, odit ex? Molestias voluptate consequuntur voluptatibus, dolores fugiat laudantium obcaecati cum magni inventore distinctio at.{jobData.description}</p>
          <p>Location: {jobData.location}</p>
          <p>Employment Type: {jobData.type}</p>
          <p>Date posted: {jobData.date}</p>
          <p>Salary: {jobData.salary}</p>
          <ul>
            <li><a href={jobData.url}>{jobData.jobProvider}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </>
    );
  }
  
  export default JobDetails;