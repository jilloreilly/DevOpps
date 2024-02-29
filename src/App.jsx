import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer'
import { Candidate, Custom404, Employer, Home, JobDetails, JobResults } from './pages';
import './App.css'

function App() {

  return (
    <Router >
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='candidate' element={<Candidate />} />
        <Route path='/job-results' element={<JobResults />} />
        <Route path='employer' element={<Employer />} />
        <Route path='404' element={<Custom404 />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App