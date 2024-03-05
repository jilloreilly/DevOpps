import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyHeader from './components/Header';
import MyFooter from './components/Footer';
import CandidateProfileForm from './components/CandidateProfileForm';
import { Custom404, Home, JobSearch, EmployerSearch, JobDetails, Candidate } from './pages';
import './App.css'
import React from 'react';
import {useState, useEffect} from 'react'


function App() {

  const [candidateArray, setCandidateArray] = useState([]);

  useEffect(() => {
    // Function to load data from JSON file
    const loadDataFromJSON = async () => {
      fetch('../../candidates.json')
        .then(response => response.json())
        .then(data => {
          setCandidateArray(data);
          saveArrayToLocal(data);
        })
        .catch(error => console.error('Error loading data:', error));
    } 

    loadDataFromJSON();

    // Load initial data from local storage
    const localStorageData = localStorage.getItem('candidateData');
    if (localStorageData) {
      setCandidateArray(JSON.parse(localStorageData));
    } else {
      localStorage.setItem('candidateData', JSON.stringify([]));
    }

    // Event listener to update state when local storage changes
    const handleLocalStorageChange = (event) => {
      if (event.key === 'candidateData') {
        setCandidateArray(JSON.parse(event.newValue));
      }
    };

    window.addEventListener('storage', handleLocalStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleLocalStorageChange);
    };
  }, []);

  const saveArrayToLocal = (arrayData) => {
    localStorage.setItem('candidateData', JSON.stringify(arrayData));
  };

  return (
    <Router>
      <MyHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/candidate/create-profile' element={<CandidateProfileForm />} />
        <Route path="/candidate/profile/:gitHubUsername" element={<Candidate userData={candidateArray} />} />
        <Route path='/job-results' element={<JobSearch />} />
        <Route path='/employer/search' element={<EmployerSearch />} />
        <Route path='*' element={<Custom404 />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App
