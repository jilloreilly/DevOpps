import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Modal from './components/Modal.jsx'
import JobOpt from './components/JobOpt.jsx'
import Footer from './components/Footer.jsx'
import TechNews from './components/TechNews.jsx'
import JobSearch from './components/JobSearch.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Navbar />
    <div className="flex">
    <TechNews />
    <Modal />
    <JobSearch />

    </div>
    <JobOpt />
    <Footer />

    <NextUIProvider>
      <App />
      </NextUIProvider>  

  </React.StrictMode>,
)
