import { useState, useEffect } from 'react';

function JobDetails(props) {

  let data = props.selectedJob;

  // Add to favourites 

  const [favourites, setFavourites] = useState ([])
  const [isChecked, setIsChecked] = useState(false)

  useEffect( () => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    if (storedFavourites.length > 0){ 
      setFavourites(storedFavourites);
      if (storedFavourites.find(favourite => favourite.id == data.id)) {
        setIsChecked(true)
      }
    }
  } , []);

  // Function to handle adding a job to favourites
  const addToFavourites = (id) =>{
    if (favourites.find(favourite => favourite.id == data.id ) === undefined) {
      setFavourites([...favourites, data])
      setIsChecked(true)
    } else {
      const updatedFavourites = favourites.filter(favourite => favourite.id !== data.id);
      setFavourites(updatedFavourites);
      setIsChecked(false)
    }  
  }

  // Function to remove a job from favourites
  const removeFromFavourites = (jobID) => {
    const updatedFavourites = favourites.filter((job)=> job.id !== jobID );
    setFavourites(updatedFavourites);
  };

  // Save favourites to localStorage whenever favourites change
  useEffect(()=> {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);


  window.scrollTo({ top: 0 });
  
  return (
  <>
    <div className="w-full p-6 mt-3 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="favourite" onClick={addToFavourites}><i className={isChecked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i></div>
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
        <h3 className="font-semibold">Apply here</h3>
        {data.jobProviders.map(provider => (
          <p key={provider.jobProvider}><a href={provider.url} target='_blank'>{provider.jobProvider} <i className="fa-regular fa-share-from-square"></i></a></p>
        ))}
      </div>
    </div>
  </>
    );
  }
  
  export default JobDetails;