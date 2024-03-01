import {useState } from "react";

function CandidateGitHubProfile() {

  const [gitHubProfile, setGitHubProfile] = useState('')

  const handleGitHubChange = (e) => {
    setGitHubProfile(e.target.value)
  }

  const handleGitHubClick = () => {
    console.log('Input Value: ', gitHubProfile)
    fetchGitHub(gitHubProfile)
  }

  const fetchGitHub = (username) => {

    const queryURL = `https://api.github.com/users/${username}`
    fetch(queryURL)
      .then(response => {
      return response.json()
      })
      .then(data => {
        console.log(data);

        const gitHubRepos = data.repos_url;
        console.log(gitHubRepos);

        const gitHubAvatar = data.avatar_url;
        console.log(gitHubAvatar);

        const gitHubFollowers = data.followers;
        console.log(gitHubFollowers)


    })

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
              <label htmlFor="git-hub-link" className="sr-only">
                Email address
              </label>
              <span className="px-3 py-2 border-2">https://github.com/</span><input
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
        
        
    
    </>


    );
  }

  export default CandidateGitHubProfile;