import React, { useState, useEffect } from 'react';
import candidatesData from '../../../candidates.json';
import './index.css';

function EmployerSearch() {


  let localData = JSON.parse(localStorage.getItem('candidateData')) || [];
  // console.log({ localData })

  let combinedData = candidatesData;
  if (localData) {
    combinedData = [...candidatesData, ...localData]
  }

  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [filteredRoles, setFilteredRoles] = useState([]);
  const [results, setResults] = useState([]);
  const [availableTechnologies, setAvailableTechnologies] = useState([]);
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    setPeople(combinedData);
    const technologies = combinedData.reduce((acc, person) => {
      person.technology.forEach(tech => {
        if (!acc.includes(tech)) {
          acc.push(tech);
        }
      });
      return acc;
    }, []);
    setAvailableTechnologies(technologies);
    document.title = `devOpps - Employee Search`;
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleTechnologyChange = (event) => {
    const technology = event.target.value;
    if (event.target.checked) {
      setFilteredTechnologies([...filteredTechnologies, technology]);
    } else {
      setFilteredTechnologies(filteredTechnologies.filter(item => item !== technology));
    }
  };

  const handleCityChange = (event) => {
    const city = event.target.value;
    if (event.target.checked) {
      setFilteredCities([...filteredCities, city]);
    } else {
      setFilteredCities(filteredCities.filter(item => item !== city));
    }
  };

  const handleExperienceChange = (event) => {
    const experience = event.target.value;
    if (event.target.checked) {
      setFilteredExperiences([...filteredExperiences, experience]);
    } else {
      setFilteredExperiences(filteredExperiences.filter(item => item !== experience));
    }
  };

  const handleRoleChange = (event) => {
    const role = event.target.value;
    if (event.target.checked) {
      setFilteredRoles([...filteredRoles, role]);
    } else {
      setFilteredRoles(filteredRoles.filter(item => item !== role));
    }
  };

  const handleClear = () => {
    setSearch('');
    setFilteredTechnologies([]);
    setFilteredCities([]);
    setFilteredExperiences([]);
    setFilteredRoles([]);
    setResults([]);
    setShowResults(false);
    setErrorMessage('');
    setShowImage(true);

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  };

  const handleSearch = () => {
    if (
      search.trim() === '' &&
      filteredTechnologies.length === 0 &&
      filteredCities.length === 0 &&
      filteredExperiences.length === 0 &&
      filteredRoles.length === 0
    ) {
      setErrorMessage('Please select at least one filter or enter a search term.');
      return;
    }
  
    const filteredResults = people.filter((person) =>
      (search.trim() === '' || person.name.toLowerCase().includes(search.toLowerCase())) &&
      (filteredTechnologies.length === 0 || filteredTechnologies.some(tech => person.technology.includes(tech))) &&
      (filteredCities.length === 0 || filteredCities.includes(person.city)) &&
      (filteredExperiences.length === 0 || filteredExperiences.includes(person.experience)) &&
      (filteredRoles.length === 0 || filteredRoles.includes(person.role))
    );
    setResults(filteredResults);
    setShowResults(true);
    setShowImage(false);
    setErrorMessage('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className=" bg-indigo-500  py-24 mx-auto employer-header">
        <div className ="container mx-auto max-w-[1280px] px-6">
          <h1 className="text-3xl font-semibold leading-7 text-white sm:text-4xl">Employee Search</h1>
          <p className="mt-3 leading-6 text-white">Find the ideal candidate in just a few clicks!</p>
              
          {/* <div className="mt-3 icons text-center top-div">
    
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-auto flex flex-col items-center mx-4 my-4">
          <img className="w-24 h-24 mb-4 align-middle" src="../../public/images/geolocation.svg" alt="Geolocation image" />
          <h3 className="font-bold text-2xl text-left text-white mb-3">Geolocation</h3>
          <p className="text-center text-white">Utilize the geolocation filter to identify<br /> candidates closer to your company.</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto flex flex-col items-center mx-4 my-4">
          <img className="w-24 h-24 mb-4 align-middle" src="../../public/images/filters.svg" alt="Accuracy image" />
          <h3 className="font-bold text-2xl text-left text-white mb-3">Accuracy</h3>
          <p className="text-center text-white">Enhance your search by combining<br /> multiple filters: Desired technology,<br /> Location, Experience, Area of activity</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto flex flex-col items-center mx-4 my-4">
          <img className="w-24 h-24 mb-4 align-middle" src="../../public/images/candidates.svg" alt="Artificial intelligence image" />
          <h3 className="font-bold text-2xl text-left text-white mb-3">Artificial intelligence</h3>
          <p className="text-center text-white">With the help of artificial intelligence,<br /> we pinpoint and present the most suitable <br />candidates for your vacancy,<br /> streamlining your selection process</p>
        </div>
      </div>
</div> */}
        </div>

      </div>

      <div className="max-w-[1280px] container mt-12 mx-auto px-6 f">
        <div className="flex flex-col md:flex-row lg:flex-row gap-12">
          <div className="w-full md:w6/12 lg:w-4/12">
            <div>
              <div>
                <h3 className='font-bold text-3xl text-left'>Filter By: </h3>
                <div className='grid mt-6 grid-cols-2 sm:grid-cols-2'>
                  <div>
                    <h4 className='mb-3 font-medium text-sm md:text-base text-left'>Technology</h4>
                    {availableTechnologies.slice(0, showAllTechnologies ? availableTechnologies.length : 10).map((technology, index) => (
                      <div key={index} className='text-sm mb-1'>
                        <input
                          type="checkbox"
                          id={`technology-${index}`}
                          value={technology}
                          onChange={handleTechnologyChange}
                          className="mr-2"
                        />
                        <label htmlFor={`technology-${index}`}>{technology}</label>
                      </div>
                    ))}
                    {availableTechnologies.length > 10 &&
                      <button onClick={() => setShowAllTechnologies(!showAllTechnologies)} className="text-black hover:text-indigo-600 underline text-sm"> {showAllTechnologies ? 'Show Less' : 'Show More'}</button>
                    }
                  </div>
                  <div>
                    <h4 className='mb-3 font-medium text-sm md:text-base text-left'>City</h4>
                    {Array.from(new Set(people.map((person) => person.city))).map((city, index) => (
                      <div key={index} className='text-sm mb-1'>
                        <input
                          type="checkbox"
                          id={`city-${index}`}
                          value={city}
                          onChange={handleCityChange}
                          className="mr-2"
                        />
                        <label htmlFor={`city-${index}`}>{city}</label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className='my-3 font-medium text-sm md:text-base text-left'>Experience</h4>
                    <div>
                      {Array.from(new Set(people.map((person) => person.experience))).map((experience, index) => (
                        <div key={index} className='text-sm mb-1'>
                          <input
                            type="checkbox"
                            id={`experience-${index}`}
                            value={experience}
                            onChange={handleExperienceChange}
                            className="mr-2"
                          />
                          <label htmlFor={`experience-${index}`}>{experience}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="gap-2">
                    <h4 className='my-3 font-medium text-sm md:text-base text-left'>Role</h4>
                    <div className='text-sm'>
                      {Array.from(new Set(people.map((person) => person.role))).map((role, index) => (
                        <div key={index} className="mb-1">
                          <input
                            type="checkbox"
                            id={`role-${index}`}
                            value={role}
                            onChange={handleRoleChange}
                            className="mr-2"
                          />
                          <label htmlFor={`role-${index}`}>{role}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button onClick={handleSearch} className="flex-none rounded-md  bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mr-2">Search</button>
              <button onClick={handleClear} className="flex-none rounded-md  bg-gray-200 text-gray-600 hover:bg-gray-300 px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mr-2">Clear</button>
            </div>
            {errorMessage && (
              <div className="text-red-500 mt-2">{errorMessage}</div>
            )}
          </div>
          <div className="w-full md:w6/12 lg:w-8/12">
            <div>
              {showResults && results.length > 0 ? (
                <div>
                  <h2 className="text-3xl font-bold mb-2">Results</h2>
                  <div className="mt-6">
                    {results.map((person) => (
                      <div key={person.id} className="gap-10 flex flex-col sm:flex-row md:flex-col lg:flex-row w-full mb-3 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
                        <div className="flex flex-col justify-center"><a href={"/candidate/profile/" + person.gitHubUsername}><img className="profile-photo aspect-square rounded-full max-h-[220px]" src={person.gitHubAvatar} alt={person.name}></img></a></div>

                    <div className="flex flex-col">
                          <h4 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{person.name}</h4>
                          <h5 className="mb-4 text-1xl font-bold tracing-normal text-gray-500 dark:text-white">{person.role}</h5>
                          <div className="flex flex-col w-full justify-start gap-2.5 text-sm leading-normal">
                            <p><i className="fa-regular fa-compass text-indigo-500 font-bold" aria-hidden="true"></i> Location: {person.city}</p>
                            <p><i className="fa-solid fa-graduation-cap text-indigo-500 font-bold"></i> Experience: {person.experience}</p>
                            <p><i className="fa-solid fa-microchip text-indigo-500 font-bold"></i> Technology: {person.technology.join(', ')}</p>
                          </div>
                          <div className="mt-5">
                            <a href={"mailto:" + person.email} className="inline-block flex-none rounded-md  bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mr-2">Contact
                            </a>
                            <a href={"/candidate/profile/" + person.gitHubUsername} className="flex-none rounded-md  bg-indigo-200 text-indigo-600 hover:bg-indigo-100 px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">View Profile
                            </a>
                          </div>
                    </div>

                      </div>
                    ))}
                  </div>
                </div>
              ) : showResults && results.length === 0 ? (
                <div>
                  <h1 className="text-3xl font-bold mb-2">No Results</h1>
                  <p>No results found. Please try refining your search criteria.</p>
                </div>
              ) : null}
            </div>
            {showImage && (
              <div className="flex items-center justify-center">
                <img src="../../images/search.png" alt="Search Image" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerSearch;
