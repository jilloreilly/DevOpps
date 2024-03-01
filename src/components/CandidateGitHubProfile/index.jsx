import { useState } from "react";
import CompleteGitHubProfile from "./completeGitHubProfile";
import axios from 'axios';

function CandidateGitHubProfile() {

  const [gitHubProfile, setGitHubProfile] = useState('')
  
  const handleGitHubChange = (e) => {
    setGitHubProfile(e.target.value)
  }

  const handleGitHubClick = () => {
    console.log('Input Value: ', gitHubProfile)
    fetchGitHub(gitHubProfile)
  }

  const [gitHubDetails, setGitHubDetails] = useState([]);

  const fetchGitHub = async (username) => {
    
      const resource = {
        method: 'GET',
        url: `https://api.github.com/users/${username}`,
      };
      try {
        const response = await axios.request(resource);
        console.log(response.data)
        setGitHubDetails(response.data);
        console.log(gitHubDetails);
      } catch (error) {
        console.error(error);
      }

  }
  

  return (
    <>
  
          <div className="space-y-12">
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-3xl">Link your GitHub Account</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
        <div className="mt-6 flex max-w-md gap-x-4">
              
              <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">https://github.com/</span><input
                id="git-hub-link"
                name="git-hub-link"
                type="text"
            value={gitHubProfile}
            onChange={handleGitHubChange}
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="GitHub Username"
              />
              <button id ="fetch-git-hub" onClick={handleGitHubClick}
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Link GitHub
              </button>
      </div>
      
      <div>
          
            <CompleteGitHubProfile
              avatar={gitHubDetails.avatar_url}
              id={gitHubDetails.id}
              repos={gitHubDetails.repos_url}
              followers={gitHubDetails.followers}
        />
          
        </div>
        
     
    
    </>


    );
  }

  export default CandidateGitHubProfile;