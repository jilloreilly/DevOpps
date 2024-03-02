import { Button } from "@nextui-org/react";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    if (!selectedOption || !location) {
      setErrorMessage("Please select a job type and enter a location.");
      return;
    }
    navigate(`/job-results/?title=${selectedOption}&location=${location}`);
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center hero-background">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-medium text-white">Welcome to DevOpps</h1>
        </div>
        <div className="container mx-auto text-center flex flex-col sm:flex-row justify-center items-center">
          <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="flex flex-col sm:flex-row items-center sm:ml-4">
            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="mb-2 sm:mb-0 sm:mr-2 text-black">
              <option value="">Select a job type</option>
              <option value="Developer">Developer</option>
              <option value="Front End Developer">Front End Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
            </select>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" className="mb-2 sm:mb-0 sm:mr-2 text-black" />
            <Button type="submit" variant="contained" color="primary">Search</Button>
          </form>
          {errorMessage && <p className="text-white">{errorMessage}</p>}
        </div>
      </div>
    <div className='container px-8 mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-3 flex-row h-96'> 
      <div className='sm:col-span-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit perferendis delectus eius corporis amet fuga? 
        Ipsa rerum nostrum hic molestias ratione fuga. Asperiores maiores sapiente blanditiis, laboriosam quasi molestiae!
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro debitis reiciendis laborum sunt tenetur? Nihil, 
        velit neque facere perspiciatis itaque explicabo voluptate nemo, cumque adipisci exercitationem, eos culpa accusantium. 
        Exercitationem.
      </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 flex-row h-96'> 
      <div>
          BLAH
      </div>
      <div>
        BLAH2
      </div>

      </div>
    </div>
    </>
  );
}

export default Home;
