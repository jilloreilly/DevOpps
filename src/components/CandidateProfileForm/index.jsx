import { useRef, useState } from "react";

function CandidateProfile() {

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
    <form id="candidate-profile-form">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="text-3xl text-base font-semibold leading-7 text-gray-900">Candidate - Create Profile</h1>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-3xl my-5 text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-4 text-sm leading-6 text-gray-600">This is a subheading</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                Location
              </label>
              <div className="mt-2">
                <input
                  id="location"
                  name="location"
                  autoComplete="city-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                </input>
              </div>
              </div>

              <div className="sm:col-span-3">
              <label htmlFor="job-title" className="block text-sm font-medium leading-6 text-gray-900">
                Job Title
              </label>
              <div className="mt-2">
                <input
                  id="job-title"
                  name="job-title"
                  autoComplete="job-title"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                </input>
              </div>
              </div>

              <div className="sm:col-span-3">
              <label htmlFor="salary-range" className="block text-sm font-medium leading-6 text-gray-900">
                Salary Range
              </label>
              <div className="mt-2">
                <input
                  id="salary-range"
                  name="salary-range"
                  autoComplete="salary"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                </input>
              </div>
              </div>

              <div className="sm:col-span-3">
              <label htmlFor="office-remote-hybrid" className="block text-sm font-medium leading-6 text-gray-900">
                Office/Remote/Hybrid
              </label>
              <div className="mt-2">
                <input
                  id="office-remote-hybrid"
                  name="office-remote-hybrid"
                  autoComplete="office-remote-hybrid"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                </input>
              </div>
              </div>
              

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button id ="submitProfile"
          type="submit"
          className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    
    <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Add Skills</h2>
          
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Link your GitHub Account</h2>
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
                className="flex-none rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Link GitHub
              </button>
            </div>
        
        </div>
    
    </>


    );
  }

  export default CandidateProfile;