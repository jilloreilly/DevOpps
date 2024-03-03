import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyHeader from './components/Header';
import MyFooter from './components/Footer';
import { CreateProfile, Custom404, Home, JobSearch, JobResults, EmployerSearch, JobDetails, Candidate } from './pages';
import './App.css'
import React from 'react';
import userData from '../candidates.json'


function App() {

  return (
    <Router >
      <MyHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/candidate/create-profile' element={<CreateProfile />} />
        <Route path="/candidate/profile/:id" element={<Candidate userData={userData} />} />
        <Route path='/job-results' element={<JobResults />} />
        <Route path='/employer/search' element={<EmployerSearch />} />
        <Route path="/job/search" element={<JobSearch />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path='*' element={<Custom404 />} />
      </Routes>
      <MyFooter />
    </Router>
  )
}

export default App