import { Link } from "react-router-dom";
import { useState } from 'react';

export default function JobList(props) {
  
  const jobs = props.data;
  
  return (
    <>
    
      <Link to={`/job-details/${jobs.id}`} state={{jobData: { jobs }}} className="w-full mb-1">
      <div key={jobs.id} className="flex flex-col w-full mb-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-3">
        {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
        <div className="flex flex-col">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{jobs.title}</h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><i class="fa-regular fa-building"></i> <strong>Company:</strong> {jobs.company}</p>
        </div>
        <div className="flex flex-row w-full justify-between leading-normal">
          <p><i class="fa-regular fa-compass"></i> <strong>Location:</strong> {jobs.location}</p>
          <p><i class="fa-regular fa-clock"></i><strong>Employment type:</strong> {jobs.employmentType}</p>
          <p><i class="fa-regular fa-calendar"></i> <strong>Date posted:</strong> {jobs.datePosted}</p>
          <p><i class="fa-regular fa-money-bill-1"></i> <strong>Salary range:</strong> {jobs.salaryRange == "" ?  "Competitive" : jobs.salaryRange}</p>
        </div>
      </div>
      </Link>
 
    </>

  );
}