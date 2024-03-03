import { Button } from "@nextui-org/react";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // handle search section to death with form
  const handleSearch = () => {
    if (!selectedOption || !location) {
      setErrorMessage("Please select a job type and enter a location.");
      return;
    }
    navigate(`/job-results/?title=${selectedOption}&location=${location}`);
  };

  // Function to handle city click
const handleCityClick = (cityName) => {
  const option = 'Software Developer';
  const city = (cityName);
  setErrorMessage(""); // Clear error message
  navigate(`/job-results/?title=${option}&location=${city}`);
};



  return (
    <>
      {/* Hero section */}
      <div className="h-screen flex flex-col items-center justify-center hero-background">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-medium text-white">Welcome to DevOpps</h1>
        </div>
        <div className="container mx-auto text-center flex flex-col sm:flex-row justify-center items-center">
          <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="flex flex-col sm:flex-row items-center sm:ml-4">
            <select name="job-type" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="mb-2 p-2 my-2 sm:mb-0 sm:mr-2 text-black">
              <option value="">Select a job type</option>
              <option value="Developer">Software Developer</option>
              <option value="Front End Developer">Front End Developer</option>
              <option value="Front End Developer">Back End Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
            </select>
            <div className="input-container">
              <input name="job-location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" className="mb-2 my-2 p-1 sm:mb-0 sm:mr-2 text-black" />
              <label className="input-label" htmlFor="job-location">Location</label>
            </div>
            <Button type="submit" className="bg-gray-300 hover:bg-gray-400 shadow-md text-gray-800 font-bold py-1 rounded-full" >Search</Button>
          </form>
          {errorMessage && <p className="text-white">{errorMessage}</p>}
        </div>
      </div>

      {/* Container for everything under hero banner */}
      <div className='container px-8 mx-auto'>

        {/* Employee/Employer cards linked to pages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-32 py-5 ">
          <Link to='employer/search'><div className="employer bg-blue-600 p-4 shadow-md rounded-lg h-72 flex justify-center items-center mr-3">
            <div className="text-gray-700">I am an employer.</div>
          </div></Link>
          <Link to='candidate'><div className="employee bg-blue-600 p-4 shadow-md rounded-lg h-72 flex justify-center items-center ml-3">
            <div className="text-gray-700">I am a candidate.</div>
          </div></Link>
        </div>

        <div className='text-center'>
          <h2>Search popular cities:</h2>
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-32">
          {/* First Column */}
          <a className="relative london-box" onClick={() => handleCityClick('London')}><div>
            <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0"></div>
            <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-white">London</h2>
          </div></a>

          {/* Second Column */}
          <div className="sm:col-span-1 grid grid-cols-1 gap-2">
            {/* First Row in Second Column */}
            <a className="relative bristol-box" onClick={() => handleCityClick('Bristol')}><div>
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0"></div>
              <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-white">Bristol</h2>
            </div></a>
            {/* Second Row in Second Column */}
            <a className="relative edinburgh-box" onClick={() => handleCityClick('Edinburgh')}><div>
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0"></div>
              <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-white">Edinburgh</h2>
            </div></a>
          </div>

          {/* Third Column */}
          <div className="sm:col-span-1 grid grid-cols-1 gap-2">
            {/* First Row in Third Column */}
            <a className="relative cardiff-box" onClick={() => handleCityClick('Cardiff')}><div>
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0"></div>
              <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-white">Cardiff</h2>
            </div></a>
            {/* Second Row in Third Column */}
            <a className="relative manchester-box" onClick={() => handleCityClick('Manchester')}><div>
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0"></div>
              <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-white">Manchester</h2>
            </div></a>
          </div>
        </div>


      </div>

    </>
  );
}

export default Home;
