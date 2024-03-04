import { Button } from "@nextui-org/react";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import {Input} from "@nextui-org/react";


function Home() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null); 
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    if (!selectedOption || !location) {
      setErrorMessage("Please select a job type and enter a location.");
      return;
    }
    navigate(`/job-results/?title=${selectedOption}&location=${location}`);
  };

  const handleCityClick = (cityName) => {
    const option = 'Software Developer';
    const city = cityName;
    setErrorMessage(""); // Clear error message
    navigate(`/job-results/?title=${option}&location=${city}`);
  };

  return (
    <>
      <div className="h-screen flex items-center justify-start hero-background">
        <div className="w-1/2 px-20 py-20 flex flex-col"> 
          <h1 className="text-5xl font-medium text-white mb-8">Welcome to DevOpps</h1>
          <h3 className="text-2xl font-light text-white mb-14">From job seekers to recruiters, DevOpps offers a comprehensive platform for all your tech hiring needs, making job searches and candidate sourcing hassle-free.</h3>
          <div className=' bg-gray-200 rounded-lg p-5'>
  <h2 className='text-gray-800 pb-3 mx-2'>Search available positions:</h2>

          <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="flex flex-row items-center">
  <Dropdown>
    <DropdownTrigger>
      <Button variant="bordered" className="w-full bg-gray-200 text-gray-600 hover:text-gray-300 hover:bg-gray-400 h-12 mx-2 rounded-medium border border-gray-400">
        {selectedOption || 'Select a job type'}
      </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Static Actions">
      <DropdownItem key="Software Developer" onClick={() => setSelectedOption('Software Developer')}>
        Software Developer
      </DropdownItem>
      <DropdownItem key="Front End Developer" onClick={() => setSelectedOption('Front End Developer')}>
        Front End Developer
      </DropdownItem>
      <DropdownItem key="Back End Developer" onClick={() => setSelectedOption('Back End Developer')}>
        Back End Developer
      </DropdownItem>
      <DropdownItem key="Full Stack Developer" onClick={() => setSelectedOption('Full Stack Developer')}>
        Full Stack Developer
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
  <Input type="location" label="Enter your location" value={location} onChange={(e) => setLocation(e.target.value)} className="text-gray-600 hover:text-gray-300 rounded-medium h-12 mx-1 border border-gray-400 w-full" />
  <Button type="submit" className="hover:bg-gray-400 shadow-md text-gray-800 font-bold rounded-medium h-12 w-full border border-gray-400 mx-2">Search</Button>
</form>
</div>



          {errorMessage && <p className="text-white">{errorMessage}</p>}
        </div>
      </div>

      <div className='container px-8 mx-auto'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-32 py-5 ">
          <Link to='employer/search'><div className="employer bg-blue-600 p-4 shadow-md rounded-lg h-96 flex justify-center items-center mr-3">
            <div className="text-gray-700">I am an employer.</div>
          </div></Link>
          <Link to='/candidate/create-profile'><div className="employee bg-blue-600 p-4 shadow-md rounded-lg h-96 flex justify-center items-center ml-3">
            <div className="text-gray-700">I am a candidate.</div>
          </div></Link>
        </div>

        <div className='text-center flex items-center justify-center flex-col'>
          <h2 className='w-1/2 mb-3'>Popular cities</h2>
          <h3 className='w-1/2 '>Our popular cities section enables candidates to explore job openings in their preferred locations. Click on a city to initiate a targeted job search and uncover exciting career prospects near you.</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 m-24">
          <a className="relative london-box rounded-lg" onClick={() => handleCityClick('London')}><div>
            <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0"></div>
            <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-white">London</h2>
          </div></a>

          <div className="sm:col-span-1 grid grid-cols-1 gap-2">
            <a className="relative bristol-box rounded-lg" onClick={() => handleCityClick('Bristol')}><div>
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0 "></div>
              <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-white">Bristol</h2>
            </div></a>
            <a className="relative edinburgh-box rounded-lg" onClick={() => handleCityClick('Edinburgh')}><div>
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0"></div>
              <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-white">Edinburgh</h2>
            </div></a>
          </div>

          <div className="sm:col-span-1 grid grid-cols-1 gap-2">
            <a className="relative cardiff-box rounded-lg" onClick={() => handleCityClick('Cardiff')}><div>
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0"></div>
              <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-white">Cardiff</h2>
            </div></a>
            <a className="relative manchester-box rounded-lg" onClick={() => handleCityClick('Manchester')}><div>
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
