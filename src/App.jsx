import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyHeader from './components/Header';
import MyFooter from './components/Footer';
import { Candidate, Custom404, Home, JobSearch, JobResults, EmployerSearch } from './pages';
import './App.css'
import React from 'react';


function App() {

  return (
    <Router >
      <MyHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='candidate' element={<Candidate />} />
        <Route path='/job-results' element={<JobResults />} />
        <Route path='employer/search' element={<EmployerSearch />} />
        <Route path='404' element={<Custom404 />} />
        <Route path="/job/search" element={<JobSearch />} />
      </Routes>
      <MyFooter />
    </Router>
  )
}

export default App