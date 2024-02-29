import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import './index.css'
import EmployerSearch from './components/EmployerSearch/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <EmployerSearch />
      
      </NextUIProvider>  
  </React.StrictMode>,
)
