import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyHeader from './components/Header';
import MyFooter from './components/Footer';
import CandidateProfileForm from './components/CandidateProfileForm';
import { Custom404, Home, JobSearch, EmployerSearch, JobDetails, Candidate } from './pages';
import './App.css'
import React from 'react';

function App() {

  return (
    <Router>
      <MyHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/candidate/create-profile' element={<CandidateProfileForm />} />
        <Route path="/candidate/profile/:gitHubUsername" element={<Candidate />} />
        <Route path='/job-results' element={<JobSearch />} />
        <Route path='/employer/search' element={<EmployerSearch />} />
        <Route path='*' element={<Custom404 />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App
