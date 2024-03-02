import { Button } from "@nextui-org/react";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


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
            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="mb-2 p-2 my-2 sm:mb-0 sm:mr-2 text-black">
              <option value="">Select a job type</option>
              <option value="Developer">Developer</option>
              <option value="Front End Developer">Front End Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
            </select>
            <p className="input-container">
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" className="mb-2 my-2 p-1 sm:mb-0 sm:mr-2 text-black" />
              <label className="input-label" for="text">Location</label>
            </p>
            <Button type="submit" className="bg-gray-300 hover:bg-gray-400 shadow-md text-gray-800 font-bold py-1 rounded-full" >Search</Button>
          </form>
          {errorMessage && <p className="text-white">{errorMessage}</p>}
        </div>
      </div>
      <div className='container px-8 mx-auto'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5 py-5 ">
          <Link to='employer/search'><div className="bg-white p-4 shadow-md rounded-lg h-96">
            <p className="text-gray-700">EMPLOYER</p>
          </div></Link>
          <Link to='candidate'><div className="bg-white p-4 shadow-md rounded-lg h-96">
            <p className="text-gray-700">EMPLOYEE</p>
          </div></Link>
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
