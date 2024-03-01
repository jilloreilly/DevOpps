// job details
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';



function JobDetails(props) {

  // let {id} = useParams()
  
  // let jobInfo = projects.filter((job) => job.id == id )
  // console.log(jobInfo)

  // let {title, image, description, github, deployed} = jobInfo[0];

  return (
  <>
    <div className="container w-full">
      <h1>Job Details</h1>

      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Job Title{props.title}</h5>
          <p>Company: Company Name{props.company}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nobis! Architecto officiis doloremque aliquid! Ipsam, odit ex? Molestias voluptate consequuntur voluptatibus, dolores fugiat laudantium obcaecati cum magni inventore distinctio at.{props.description}</p>
          <p>Location: Location {props.location}</p>
          <p>Employment Type: {props.type}</p>
          <p>Date posted: date posted{props.date}</p>
          <p>Salary: {props.salary}</p>
          <ul>
            <li><a href={props.url}>{props.jobProvider}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </>
    );
  }
  
  export default JobDetails;