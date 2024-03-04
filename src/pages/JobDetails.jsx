//import { useLocation, useNavigate } from 'react-router-dom';

function JobDetails(props) {

  //const location = useLocation();
  //const { jobData } = location.state;
  let data = props.selectedJob;

  //console.log(props);

  // Back button

  // const backBtn = () => {
  //   const navigate = useNavigate();

  //   const handleClick = () => {
  //     navigate(-1);
  //   };
  // }

  window.scrollTo({ top: 0 });
  
  return (
  <>
    <div className="container my-5 mx-auto">

      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h2>
          <p><i className="fa-regular fa-building"></i> <strong>Company:</strong> {data.company}</p>
          <p className="my-4 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
          <div className='flex flex-row justify-evenly py-3 border-t-1 border-b-1'>
            <p><i className="fa-regular fa-compass"></i> <strong>Location:</strong> {data.location}</p>
            <p><i className="fa-regular fa-clock"></i> <strong>Employment Type:</strong> {data.employmentType}</p>
            <p><i className="fa-regular fa-calendar"></i> Date posted: {data.datePosted}</p>
            <p><i className="fa-regular fa-money-bill-1"></i> <strong>Salary range:</strong> {data.salaryRange == "" ?  "Competitive" : data.salaryRange}</p>
          </div>
          <div className='flex flex-row justify-evenly py-3 border-b-1'>
            <h3>Apply here</h3>
            {/* <ul> */}
            {data.jobProviders.map(provider => (
              <p key={provider.jobProvider}><a href={provider.url} target='_blank'>{provider.jobProvider} <i className="fa-regular fa-share-from-square"></i></a></p>
            ))}
          {/* </ul> */}
          </div>
          
        
      </div>
    </div>
  </>
    );
  }
  
  export default JobDetails;