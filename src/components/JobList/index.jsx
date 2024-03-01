import { Link } from "react-router-dom";

export default function JobList(props) {
  return (
    <>
    
<Link to={`/job/${props.id}`} className="flex w-full mb-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
  <div className="w-9/12 flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Company: {props.company}</p>
      <p>Location: {props.location}</p>
      <p>Employment type: {props.type}</p>
      <p>Date posted: {props.date}</p>
      <p>Salary range: {props.salary}</p>
  </div>

</Link> 
 
    </>

  );
}