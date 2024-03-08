import { useState, useEffect, Fragment } from 'react';

function JobDetails(props) {

  let data = props.selectedJob;

  // Add to favourites 

  const [favourites, setFavourites] = useState([])
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    if (storedFavourites.length > 0) {
      setFavourites(storedFavourites);
      if (storedFavourites.find(favourite => favourite.id == data.id)) {
        setIsChecked(true)
      }
    }
    document.title = `devOpps - Job Search`;
  }, []);

  // Function to handle adding a job to favourites
  const addToFavourites = (id) => {
    if (favourites.find(favourite => favourite.id == data.id) === undefined) {
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
    const updatedFavourites = favourites.filter((job) => job.id !== jobID);
    setFavourites(updatedFavourites);
  };

  // Save favourites to localStorage whenever favourites change
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Format description text
  function formatDescription(text) {

    if (typeof text === 'string') {

      // Define the bullet character regex
      const bulletRegex = /•/;

      // Split the text based on the bullet character
      const points = text.split(bulletRegex);

      // Format bullet points and paragraphs
      const processBullets = points.map((point, index) => {
        // No bullet at the beginning
        if (index === 0) {
          return point.trim();
        } else {
          return (<Fragment key={index}><br /><i className="fas fa-circle text-[8px] mr-2"></i>{point.trim()}</Fragment>);
        }
      });

      // Format paragraphs looking for double lines 
      const processParagraphs = processBullets.map((point) => {
        if (typeof point === 'string') {
          // Split double new lines into array
          const paragraphs = point.split("\n\n");
          // Format each array item into a paragraph
          return paragraphs.map((paragraph, i) => (<p key={i} className="pb-4">{paragraph}</p>));
        } else {
          return point;
        }
      });

      return processParagraphs;
    } else {
      return text;
    }
  }


  //window.scrollTo({ top: 0 });

  return (
    <>
      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div className='flex flex-row'>
          <div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h2>
            <p><i className="fa-regular fa-building text-indigo-500"></i> <strong>Company:</strong> {data.company}</p>
            <div className="my-4 font-normal text-gray-700 dark:text-gray-400">{formatDescription(data.description)}</div>
          </div>
          <div className="favourite" onClick={addToFavourites}><i className={isChecked ? "fa-solid fa-heart text-indigo-500 text-2xl" : "fa-regular fa-heart text-indigo-500 text-2xl"}></i></div>
        </div>
        <div className='flex flex-row sm:flex-col md:flex-row lg:flex-row justify-evenly flex-wrap gap-4 py-3 border-t-1 border-b-1'>
          <p><i className="fa-regular fa-compass text-indigo-500"></i> <strong>Location:</strong> {data.location}</p>
          <p><i className="fa-regular fa-clock text-indigo-500"></i> <strong>Employment Type:</strong> {data.employmentType}</p>
          <p><i className="fa-regular fa-calendar text-indigo-500"></i> <strong>Date posted:</strong> {data.datePosted}</p>
          <p><i className="fa-regular fa-money-bill-1 text-indigo-500"></i> <strong>Salary range:</strong> {data.salaryRange == "" ? "Competitive" : data.salaryRange}</p>
        </div>
        <div className='flex flex-row sm:flex-col md:flex-row lg:flex-row justify-evenly flex-wrap gap-4 py-3 border-b-1'>
          <h3 className="font-semibold">Apply here</h3>
          {data.jobProviders.map(provider => (
            <p key={provider.jobProvider}><a href={provider.url} target='_blank' className='text-sm hover:text-indigo-400'>{provider.jobProvider} <i className="fa-regular fa-share-from-square text-indigo-500"></i></a></p>
          ))}
        </div>
      </div>
    </>
  );
}

export default JobDetails;