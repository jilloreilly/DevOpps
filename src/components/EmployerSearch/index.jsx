import React, { useState, useEffect } from 'react';
import candidatesData from '../../../candidates.json';
import "../EmployerSearch/index.css"

function EmployerSearch() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setPeople(candidatesData);
    setResults(candidatesData); 
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleTechnologyChange = (event) => {
    const technology = event.target.value;
    if (event.target.checked) {
      setFilteredTechnologies([...filteredTechnologies, technology]);
    } else {
      setFilteredTechnologies(filteredTechnologies.filter((item) => item !== technology));
    }
  };

  const handleCityChange = (event) => {
    const city = event.target.value;
    if (event.target.checked) {
      setFilteredCities([...filteredCities, city]);
    } else {
      setFilteredCities(filteredCities.filter((item) => item !== city));
    }
  };

  const handleExperienceChange = (event) => {
    const experience = event.target.value;
    if (event.target.checked) {
      setFilteredExperiences([...filteredExperiences, experience]);
    } else {
      setFilteredExperiences(filteredExperiences.filter((item) => item !== experience));
    }
  };

  useEffect(() => {
    const filteredResults = people.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase()) &&
      (filteredTechnologies.length === 0 || filteredTechnologies.includes(person.technology)) &&
      (filteredCities.length === 0 || filteredCities.includes(person.city)) &&
      (filteredExperiences.length === 0 || filteredExperiences.includes(person.experience))
    );
    setResults(filteredResults);
  }, [search, people, filteredTechnologies, filteredCities, filteredExperiences]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="">
          <h1 className="text-3xl font-bold mb-4">People Search</h1>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h2>Filter by Technology:</h2>
              {Array.from(new Set(people.map((person) => person.technology))).map((technology, index) => (
                <div key={index} className="mb-2">
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
            </div>
            <div>
              <h2>Filter by City:</h2>
              {Array.from(new Set(people.map((person) => person.city))).map((city, index) => (
                <div key={index} className="mb-2">
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
              <h2>Filter by Experience:</h2>
              <div className="flex flex-wrap">
                {Array.from(new Set(people.map((person) => person.experience))).map((experience, index) => (
                  <div key={index} className="mb-2 mr-4">
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
          </div>
        </div>
        {/* Results */}
        <div className="w-1/2 pl-4">
          <h1 className="text-3xl font-bold mb-4">Results</h1>
          <div className="grid grid-cols-2 gap-4">
            {results.map((person) => (
              <div key={person.id} className="border p-4 rounded">
                <strong>Name:</strong> {person.name}<br />
                <strong>Email:</strong> {person.email}<br />
                <strong>Age:</strong> {person.age}<br />
                <strong>City:</strong> {person.city}<br />
                <strong>Experience:</strong> {person.experience}<br />
                <strong>Technology:</strong> {person.technology}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default EmployerSearch;
