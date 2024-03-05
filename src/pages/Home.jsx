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
import { Input } from "@nextui-org/react";
import NewsSlider from '../components/NewsSlider'



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
      <div className="h-full flex items-center justify-center xl:justify-start lg:justify-center md:justify-center sm:justify-center hero-background relative">
        <div className="absolute  inset-0 bg-white opacity-20"></div>
        <div className="w-1/2 xl:p-20 lg:p-5 flex flex-col relative z-10">
          <h1 className="text-5xl font-medium text-white mb-8">Welcome to devOpps</h1>
          <h3 className="text-2xl font-light text-white mb-14">From job seekers to recruiters, devOpps offers a comprehensive platform for all your tech hiring needs, making job searches and candidate sourcing hassle-free.</h3>
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
                  <DropdownItem key="Full Stack Developer" onClick={() => setSelectedOption('DevOps Engineer')}>
                    DevOps Engineer
                  </DropdownItem>
                  <DropdownItem key="Full Stack Developer" onClick={() => setSelectedOption('Cloud Architect')}>
                    Cloud Architect
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

      <div className='container px-8 sm:px-2 mx-auto'>

        {/* candidate/employer section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-32 py-5 ">
          <Link to='/employer/search'>
            <div className="employer p-4 m-3 shadow-md rounded-lg h-96 relative flex justify-center items-center">
              <div className="absolute inset-0 bg-white opacity-20 hover:opacity-10"></div>
              <div className="absolute inset-x-0 bg-gray-700 opacity-70 py-2 text-gray-200 text-center ">
                I am an employer.
              </div>
            </div>
          </Link>

          <Link to='/candidate/create-profile'>
            <div className="employee p-4 m-3 shadow-md rounded-lg h-96 relative flex justify-center items-center">
              <div className="absolute inset-0 bg-white opacity-20 hover:opacity-10"></div>
              <div className="absolute inset-x-0 bg-gray-700 opacity-70 py-2 text-gray-200 text-center ">
                I am a candidate.
              </div>
            </div>
          </Link>
        </div>
</div>

<div className="container px-8 sm:px-2 mx-auto">
{/* Popular cities text */}
        <div className='text-center flex items-center justify-center flex-col'>
          <h2 className='w-1/2 mb-3 font-bold text-xl'>Popular cities</h2>
          <h3 className='w-1/2 mb-5'>Our popular cities section enables candidates to explore job openings in their preferred locations. Click on a city to initiate a targeted job search and uncover exciting career prospects near you.</h3>
        </div>
</div>


{/* Popular cities grid */}
<div className="container grid lg:grid-cols-3 md:grid-cols-3 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-6 gap-4 pb-20 m-24 sm:m-5">
          <a className="relative london-box rounded-lg" onClick={() => handleCityClick('London')}><div>
            <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0"></div>
            <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-white text-2xl">London</h2>
          </div></a>

          {/* <div className="sm:col-span-1 grid grid-cols-1 gap-2"> */}
            <a className="relative bristol-box rounded-lg" onClick={() => handleCityClick('Bristol')}><div>
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0 "></div>
              <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-white text-2xl">Bristol</h2>
            </div></a>
            <a className="relative edinburgh-box rounded-lg" onClick={() => handleCityClick('Edinburgh')}><div>
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0"></div>
              <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-2xl text-white">Edinburgh</h2>
            </div></a>
          {/* </div> */}

          {/* <div className="sm:col-span-1 grid grid-cols-1 gap-2"> */}
            <a className="relative cardiff-box rounded-lg" onClick={() => handleCityClick('Cardiff')}><div>
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0"></div>
              <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-white text-2xl">Cardiff</h2>
            </div></a>
            <a className="relative manchester-box rounded-lg" onClick={() => handleCityClick('Manchester')}><div>
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0"></div>
              <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-white text-2xl">Manchester</h2>
            </div></a>
            <a className="relative cambridge-box rounded-lg" onClick={() => handleCityClick('Cambridge')}><div>
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0"></div>
              <h2 className="absolute bottom-0 right-0 mr-2 mb-2 text-white text-2xl">Cambridge</h2>
            </div></a>
          </div>
        {/* </div> */}
      
      {/* tech header */}
      <div className='text-center flex items-center justify-center flex-col'>
          <h2 className='w-1/2 mb-3 pb-5 font-bold text-xl'>Latest Tech News:</h2>
        </div>

        <NewsSlider/>

    </>
  );
}

export default Home;
