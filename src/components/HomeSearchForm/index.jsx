// import { useEffect, useState } from 'react';
// import axios from 'axios';



// function () {

//   const [jobs, setJobs] = useState([]);

//    const handleSearch = async () => {
//     const resource = {
//       method: 'GET',
//       url: 'https://jobs-api14.p.rapidapi.com/list',
//       params: {
//         query: 'Web Developer',
//         location: 'brighton, uk',
//         distance: '1.0',
//         language: 'en_GB',
//         remoteOnly: 'false',
//         datePosted: 'month',
//         employmentTypes: 'fulltime',
//         index: '0'
//       },
//       headers: {
//         'X-RapidAPI-Key': import.meta.env.VITE_JOBS_API_KEY,
//         'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
//       }
//     };
//     try {
//       const response = await axios.request(resource);
//       setJobs(response.data.jobs);
//       console.log(jobs);
//     } catch (error) {
//       console.error(error);
//     }
// };

//   return (
//     <div className="container mx-auto">
//       <h1>Job Results</h1>

//       <div className=""> {/*Need to add row/cols/grid? */}
//         <button onClick={handleSearch}>Click me!</button>
//         <div>
//           {jobs.map((job) =>(
//             <JobList
//               title={job.title}
//               id={job.id}
//               key={job.id}
//               company={job.company}
//               location={job.location}
//               type={job.employmentType}
//               date={job.datePosted}
//               salary={job.salaryRange} />
//           ))}
//         </div>
        
//       </div>

//     </div>
//     );
//   }

//   export default JobResults;