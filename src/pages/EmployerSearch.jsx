import React, { useState, useEffect } from 'react';
import candidatesData from '../../candidates.json';
import "../pages/Employer.css";

function EmployerSearch() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [filteredRoles, setFilteredRoles] = useState([]);
  const [results, setResults] = useState([]);
  const [availableTechnologies, setAvailableTechnologies] = useState([]);
  const [showAllTechnologies, setShowAllTechnologies] = useState(false); // State to control the display of all technologies
  const [showResults, setShowResults] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setPeople(candidatesData);

    // Get available technologies
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
      setFilteredCities([city]);
    } else {
      setFilteredCities([]);
    }
  };

  const handleExperienceChange = (event) => {
    const experience = event.target.value;
    if (event.target.checked) {
      setFilteredExperiences([experience]);
    } else {
      setFilteredExperiences([]);
    }
  };

  const handleRoleChange = (event) => {
    const role = event.target.value;
    if (event.target.checked) {
      setFilteredRoles([role]);
    } else {
      setFilteredRoles([]);
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

    // Uncheck all checkboxes
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
      person.name.toLowerCase().includes(search.toLowerCase()) &&
      (filteredTechnologies.length === 0 || filteredTechnologies.includes(person.technology[0])) &&
      (filteredCities.length === 0 || filteredCities.includes(person.city)) &&
      (filteredExperiences.length === 0 || filteredExperiences.includes(person.experience)) &&
      (filteredRoles.length === 0 || filteredRoles.includes(person.role))
    );
    setResults(filteredResults);
    setShowResults(true);
    setErrorMessage('');
    // scrow up when clicked 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
    <div>
      <h1 className="text-3xl md:text-5xl font-bold font-serif">Employee Search</h1>
    </div>
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/5">
        <div className="bg-gray-500">
          <div className="bg-gray-500">
            <h1 className='italic font-bold text-lg md:text-2xl'>Filter By: </h1>
            <div className='bg-gray-300 grid grid-cols-1 md:grid-cols-2'>
              <div>
                <h2 className='italic font-bold text-sm md:text-base'>Technology:</h2>
                {/* Show only 10 tech's  */}
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
                {/* "Show more" Link/btn*/}
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
              <div >
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
        {/* Search button */}
        <div className=" mt-4">
          <button onClick={handleSearch} className="px-4 py-1 bg-blue-500 text-white rounded mr-2">Search</button>
          <button onClick={handleClear} className="px-4 py-1 bg-red-500 text-white rounded">Clear</button>
        </div>
        {/* Error message */}
        {errorMessage && (
          <div className="text-red-500 mt-2">{errorMessage}</div>
        )}
      </div>
      {/* Results */}
      <div className="w-full md:w-4/5 lg:w-3/5 mx-auto">
        {showResults && (
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
        )}
      </div>
    </div>
  </div>
  
  


  );
}

export default EmployerSearch;
