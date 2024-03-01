import { useEffect, useState } from "react";
import axios from 'axios';
import { CompleteGitHubProfile } from "./CompleteGitHubProfile";

function CandidateGitHubProfile() {

  const [gitHubProfile, setGitHubProfile] = useState('')
  
  const handleGitHubChange = (e) => {
    setGitHubProfile(e.target.value)
  }

  const handleGitHubClick = (e) => {
    e.preventDefault()
    console.log('Input Value: ', gitHubProfile)
    fetchGitHub(gitHubProfile)
  }
  
  const [gitHubDetails, setGitHubDetails] = useState({});
  const [gitHubRepoDetails, setGitHubRepoDetails] = useState({});
  
  useEffect(() => {
    if (Object.keys(gitHubDetails).length > 0) {
      console.log({ gitHubDetails });
      console.log(gitHubDetails.repos_url)
    }
  }, [gitHubDetails]);

  const fetchGitHub = async (username) => {
    
      const resource = {
        method: 'GET',
        url: `https://api.github.com/users/${username}`,
      };
      try {
        const response = await axios.request(resource);
        setGitHubDetails(response.data);
        fetchGitHubRepos(username)
      } catch (error) {
        console.error(error);
      }
      
  }

  const fetchGitHubRepos = async (username) => {
    
    const resource = {
      method: 'GET',
      url: `https://api.github.com/users/${username}/repos`,
    };
    try {
      const response = await axios.request(resource);
      console.log(response.data)
      setGitHubRepoDetails(response.data);
    } catch (error) {
      console.error(error);
    }
    
}


  const propsNotPassed = !gitHubDetails || !gitHubDetails.avatar_url || !gitHubDetails.repos_url || !gitHubDetails.followers;

  return (
    <>
  
          <div className="flex flex-col items-center">
        
        <h2 className="mt-5 font-bold sm:text-3xl">Link your GitHub Account</h2>
            <p className="my-5 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
        <div className="mt-3 flex max-w-md">
              
          <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">https://github.com/</span>
          
          
          <input
                id="git-hub-link"
                name="git-hub-link"
                type="text"
            value={gitHubProfile}
            onChange={handleGitHubChange}
                required
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="GitHub Username"
              />
              <button id ="fetch-git-hub" onClick={handleGitHubClick}
                type="submit"
                className="ms-4 flex-none rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Link GitHub
              </button>
        </div>
      </div>
      

      {propsNotPassed ? (
        console.log('No Props Passed')
      ) : (
          
          <CompleteGitHubProfile
            id={gitHubDetails.id}
            login={gitHubDetails.login}
            avatar={gitHubDetails.avatar_url}
            repos={gitHubDetails.repos_url}
            followers={gitHubDetails.followers}
            following={gitHubDetails.following}
          />
        
      )
      }

    </>


    );
  }

  export default CandidateGitHubProfile;