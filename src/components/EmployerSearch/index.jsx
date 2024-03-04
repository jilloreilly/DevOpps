import React, { useState, useEffect } from 'react';
import candidatesData from '../../../candidates.json';
import './index.css';

function EmployerSearch() {
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
    setPeople(candidatesData);
    const technologies = candidatesData.reduce((acc, person) => {
      person.technology.forEach(tech => {
        if (!acc.includes(tech)) {
          acc.push(tech);
        }
      });
      return acc;
    }, []);
    setAvailableTechnologies(technologies);
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
      (filteredTechnologies.length === 0 || filteredTechnologies.includes(person.technology[0])) &&
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
      <div className="text-center">
        <h1 className="text-3xl font-bold">Find the ideal candidate in just a few clicks</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-auto flex flex-col items-center mx-4 my-4">
          <img className="w-24 h-24 mb-4 align-middle" src="../../public/images/geolocation.svg" alt="Geolocation image" />
          <h3 className="text-lg font-bold mb-2">Geolocation</h3>
          <p className="text-center">Utilize the geolocation filter to identify<br /> candidates closer to your company.</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto flex flex-col items-center mx-4 my-4">
          <img className="w-24 h-24 mb-4 align-middle" src="../../public/images/filters.svg" alt="Accuracy image" />
          <h3 className="text-lg font-bold mb-2">Accuracy</h3>
          <p className="text-center">Enhance your search by combining<br /> multiple filters: Desired technology,<br /> Location, Experience, Area of activity</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto flex flex-col items-center mx-4 my-4">
          <img className="w-24 h-24 mb-4 align-middle" src="../../public/images/candidates.svg" alt="Artificial intelligence image" />
          <h3 className="text-lg font-bold mb-2">Artificial intelligence</h3>
          <p className="text-center">With the help of artificial intelligence,<br /> we pinpoint and present the most suitable <br />candidates for your vacancy,<br /> streamlining your selection process</p>
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-center p-5 emp-search">Employee Search</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/5">
            <div className="bg-gray-500">
              <div className="bg-gray-500">
                <h1 className='italic font-bold text-lg md:text-2xl'>Filter By: </h1>
                <div className='bg-gray-300 grid grid-cols-1 md:grid-cols-2'>
                  <div>
                    <h2 className='italic font-bold text-sm md:text-base'>Technology:</h2>
                    {availableTechnologies.slice(0, showAllTechnologies ? availableTechnologies.length : 10).map((technology, index) => (
                      <div key={index} className=''>
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
                      <button onClick={() => setShowAllTechnologies(!showAllTechnologies)} className="text-blue-500 underline"> {showAllTechnologies ? 'Show Less' : 'Show More'}</button>
                    }
                  </div>
                  <div>
                    <h2 className='italic font-bold text-sm md:text-base'>City:</h2>
                    {Array.from(new Set(people.map((person) => person.city))).map((city, index) => (
                      <div key={index} className="">
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
                    <h2 className='italic font-bold text-sm md:text-base'>Experience:</h2>
                    <div>
                      {Array.from(new Set(people.map((person) => person.experience))).map((experience, index) => (
                        <div key={index} className="">
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
                  <div>
                    <h2 className='italic font-bold text-sm md:text-base'>Role:</h2>
                    <div>
                      {Array.from(new Set(people.map((person) => person.role))).map((role, index) => (
                        <div key={index} className="">
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
            <div className=" mt-4">
              <button onClick={handleSearch} className="px-4 py-1 bg-blue-500 text-white rounded mr-2">Search</button>
              <button onClick={handleClear} className="px-4 py-1 bg-red-500 text-white rounded">Clear</button>
            </div>
            {errorMessage && (
              <div className="text-red-500 mt-2">{errorMessage}</div>
            )}
          </div>
          <div className="w-full md:w-4/5 lg:w-3/5 mx-auto">
            <div>
              {showResults && results.length > 0 ? (
                <div>
                  <h1 className="text-3xl font-bold mb-2">Results</h1>
                  <div className="">
                    {results.map((person) => (
                      <div key={person.id} className="border border-gray-300 mb-4 p-2">
                        <strong>Name:</strong> {person.name}<br />
                        <strong>Email:</strong> {person.email}<br />
                        <strong>Age:</strong> {person.age}<br />
                        <strong>City:</strong> {person.city}<br />
                        <strong>Experience:</strong> {person.experience}<br />
                        <strong>Technology:</strong> {person.technology.join(', ')}<br />
                        <strong>Role:</strong> {person.role}
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
          <img src="../../public/images/search.png" alt="Search Image" />
        </div>
      )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerSearch;
