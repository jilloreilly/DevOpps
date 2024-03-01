import {useState } from "react";
import CandidateSkills from "../CandidateSkills";

function CandidateProfile() {

  const [profileFormData, setProfileFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    location: '',
    jobTitle: '',
    salaryRange: '',
    workPlace: '',

  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileFormData({
      ...profileFormData,
      [name]: value,
    })
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data: ', profileFormData)
  }

  const [gitHubProfile, setGitHubProfile] = useState('')

  const handleGitHubChange = (e) => {
    setGitHubProfile(e.target.value)
  }

  const handleGitHubClick = () => {
    console.log('Input Value: ', gitHubProfile)
    fetchGitHub(gitHubProfile)
  }

  return (
    <>
    <form id="candidate-profile-form" onSubmit={handleProfileSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="font-semibold leading-7 text-gray-900 sm:text-4xl">Candidate - Create Profile</h1>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-3xl my-5 text-base font-semibold leading-7 text-gray-900 sm:text-3xl">Personal Information</h2>
          <p className="mt-4 text-sm leading-6 text-gray-600">This is a subheading</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                    name="firstName"
                    value={profileFormData.firstName}
                    onChange={handleProfileChange}
                  id="firstName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                    id="lastName"
                    value={profileFormData.lastName}
                    onChange={handleProfileChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="emailAddress" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="emailAddress"
                    name="emailAddress"
                    value={profileFormData.emailAddress}
                    onChange={handleProfileChange}
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
                    value={profileFormData.location}
                    onChange={handleProfileChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                </input>
              </div>
              </div>

              <div className="sm:col-span-3">
              <label htmlFor="jobTitle" className="block text-sm font-medium leading-6 text-gray-900">
                Job Title
              </label>
              <div className="mt-2">
                <input
                  id="jobTitle"
                    name="jobTitle"
                    value={profileFormData.jobTitle}
                    onChange={handleProfileChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                </input>
              </div>
              </div>

              <div className="sm:col-span-3">
              <label htmlFor="salaryRange" className="block text-sm font-medium leading-6 text-gray-900">
                Salary Range
              </label>
              <div className="mt-2">
                <input
                  id="salaryRange"
                    name="salaryRange"
                    value={profileFormData.salaryRange}
                    onChange={handleProfileChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                </input>
              </div>
              </div>

              <div className="sm:col-span-3">
              <label htmlFor="workPlace" className="block text-sm font-medium leading-6 text-gray-900">
                Workplace
              </label>
              <div className="mt-2">
                <select
                  id="workPlace"
                    name="workPlace"
                    value={profileFormData.workPlace}
                    onChange={handleProfileChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                </select>
              </div>
              </div>
              

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button id ="submitProfile"
          type="submit"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>    
    
    </>


    );
  }

  export default CandidateProfile;