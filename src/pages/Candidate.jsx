import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import userData from '../../candidates.json'

function Candidate() {
  
  const { gitHubUsername } = useParams()
  const user = userData.find(user => user.gitHubUsername === gitHubUsername);

  const [repos, setRepos] = useState([]);

  const fetchGitHubRepos = async () => {
    
    const resource = {
      method: 'GET',
      url: `${user.gitHubRepos}`,
    };
    try {
      const response = await axios.request(resource);
      console.log(response.data)
      setRepos(response.data)
    } catch (error) {
      console.error(error);
      return;
      
    }
  }

  useEffect(() => {
    // Call the fetch function when the component mounts
    if (user) {
      fetchGitHubRepos();
    }
  }, [user]); 

  useEffect(() => {
    // You can use this effect to call fetchGitHubRepos() once on component mount
    fetchGitHubRepos();
  }, []); 
  
  
    if (!user) {
      return <div>User not found</div>;
    }
  
  return (
      <>
    <div className="candidate-banner py-24 mx-auto ">
    <div className ="container mx-auto max-w-[1280px] px-6">
       <h1 className=" text-3xl font-semibold leading-7 text-white sm:text-4xl">{user.name} - {user.role}</h1>
       
    </div>
   
   </div>
      <div className="max-w-[1280px] container mt-12 mx-auto px-6 flex flex-col md:flex-row lg:flex-row gap-12 ">

       <div className="w-full md:w-5/12"> <img className="rounded-full mb-6 w-full object-cover" src={user.gitHubAvatar}></img></div>


       <div className='w-full md:w-7/12 leading-7'>
       <h2 className="my-6 text-2xl font-semibold">Details:</h2>
          <p><i className="fa-solid fa-envelope mr-1 w-6 text-indigo-500" aria-hidden="true"></i>Email: <a href={"mailto:" + user.email}>{user.email}</a></p>
          <p><i className="fa-solid fa-location-dot mr-1 w-6 text-indigo-500" aria-hidden="true"></i>City: {user.city}</p>
          <p><i className="fa-solid fa-graduation-cap mr-1 w-6 text-indigo-500" aria-hidden="true"></i>Experience: {user.experience}</p>
          <p><i className="fa-regular fa-building mr-1 w-6 text-indigo-500" aria-hidden="true"></i>Workplace Preference: {user.workplace}</p>
          <p><i className="fa-regular fa-money-bill-1 mr-1 w-6 text-indigo-500" aria-hidden="true"></i>Salary Exectations: £{user.salaryRange}</p>
          {/* <button className="mt-6 flex-none rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick={findJobs}>Find matching jobs</button> */}
  
          <h2 className="mt-6 text-2xl font-semibold">Skills:</h2>
          <ul className="mt-6 flex flex-wrap flex-row items-center justify-start gap-4">
          {user.technology.map(tech => (
            <div className="text-indigo-700 max-w-fit inline-flex items-center justify-center box-border whitespace-nowrap border-medium p-3 h-7 rounded-full border-indigo-100 bg-indigo-100 hover:bg-indigo-300 hover:border-indigo-300 relative select-none text-medium transition-colors-opacity before:transition-width motion-reduce:transition-none" key={tech}>{tech}</div>
          ))}
        </ul>
          <h3 className="mt-6 text-2xl font-semibold">GitHub Repos:</h3>
          <ul className="mt-6 flex flex-wrap flex-row items-center justify-start gap-3">
           {repos.map(repo => (
            <a href={repo.html_url} target="_blank" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center" key={repo.id}>{repo.name} </a>
          ))}
          </ul>
       </div>
        
      </div>
      </>
    );
  }

export default Candidate;