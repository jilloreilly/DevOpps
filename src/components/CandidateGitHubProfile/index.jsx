import { useEffect, useState } from "react";
import axios from 'axios';

function CandidateGitHubProfile({ onGitHubInputChange, onGitHubDetailsChange }) {
  
  const [gitHubProfile, setGitHubProfile] = useState('')
  
  const handleChange = (e) => {
    setGitHubProfile(e.target.value)
    const { name, value } = e.target;
    onGitHubInputChange(name, value);
  };


  const handleGitHubClick = (e) => {
    e.preventDefault()
    console.log('Input Value: ', gitHubProfile)
    fetchGitHub(gitHubProfile)
  }
  
  const [gitHubDetails, setGitHubDetails] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    if (Object.keys(gitHubDetails).length > 0) {
      console.log(gitHubDetails.login);
      console.log(gitHubDetails.avatar_url);
      console.log(gitHubDetails.id);
      console.log(gitHubDetails.followers);
      console.log(gitHubDetails.following);
      console.log( gitHubDetails.repos_url );
    }
  }, [gitHubDetails]);

  const fetchGitHub = async (username) => {
    
    const resource = {
      method: 'GET',
      url: `https://api.github.com/users/${username}`,
    };
    try {
      const response = await axios.request(resource);
      onGitHubDetailsChange(response.data);
      setGitHubDetails(response.data)
      setErrorMessage('Github Account found!')
      setIsError(false)
    } catch (error) {
      console.error(error);
      setErrorMessage("No Github account found");
      setIsError(true)
        return;
      
    }
    
}

  const propsNotPassed = !gitHubDetails || !gitHubDetails.avatar_url || !gitHubDetails.repos_url || !gitHubDetails.followers;

  return (
    <>
  
          <div className="flex flex-col items-center">
        
        <h2 className="text-2xl mt-5 font-bold sm:text-3xl">Link your GitHub Account</h2>
            <p className="my-5 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
        <div className="mt-3 flex max-w-md">
              
          <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">Github.com/</span>
          
          
          <input
                id="git-hub-link"
                name="gitHubProfile"
                type="text"
            value={gitHubProfile}
            onChange={handleChange}
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
      

      {errorMessage && (<p className={`font-bold mt-5 w-4/12 mx-auto bg-${isError ? 'red' : 'teal'}-100 border-t-4 border-${isError ? 'red' : 'teal'}-500 rounded-b text-${isError ? 'red' : 'teal'}-900 px-4 py-3 shadow-md`}>
        {errorMessage}
      </p>)}

    </>


    );
  }

  export default CandidateGitHubProfile;