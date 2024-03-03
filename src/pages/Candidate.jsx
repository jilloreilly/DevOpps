import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Candidate({ userData } ) {

  const navigate = useNavigate();
  
  const { id } = useParams()
  const user = userData.find(user => user.id === parseInt(id));

  const findJobs = () => {
    navigate(`/job-results/?title=${user.role}&location=${user.city}`);
  }
  
  
    if (!user) {
      return <div>User not found</div>;
    }
  
    return (
      <div className="container my-5 mx-auto">
        <img className="rounded-full my-5" src={user.gitHubAvatar}></img>
        <h2 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl mb-4">{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>City: {user.city}</p>
        <p>Experience: {user.experience}</p>
        <p>Role: {user.role}</p>
        <p>Workplace Preference: {user.workplace}</p>
        <button className="mt-4 flex-none rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick={findJobs}>Find matching jobs</button>

        <h2 className="mt-3 text-2xl font-semibold">Skills:</h2>
        <ul className="mt-5 flex flex-wrap flex-row items-center justify-center gap-4">
        {user.technology.map(tech => (
          <div className="text-indigo-700 max-w-fit inline-flex items-center justify-start box-border whitespace-nowrap border-medium p-3 h-7 rounded-full border-indigo-100 bg-indigo-100 hover:bg-indigo-300 hover:border-indigo-300 relative select-none text-medium transition-colors-opacity before:transition-width motion-reduce:transition-none" key={tech}>{tech}</div>
        ))}
      </ul>
        <h2 className="mt-3 text-2xl font-semibold">GitHub Repos:</h2>
        <ul className="mt-5 flex flex-wrap flex-row items-center justify-start gap-3">
         {user.gitHubRepos.map(repo => (
          <a className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center" key={repo}>{repo} </a>
        ))}
      </ul>
      </div>
    );
  }

export default Candidate;