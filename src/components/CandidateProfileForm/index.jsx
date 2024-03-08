import {useEffect, useState } from "react";
import CandidateSkills from "../CandidateSkills";
import CandidateGitHubProfile from "../CandidateGitHubProfile";
import { useNavigate } from 'react-router-dom';

function CandidateProfileForm() {

  const navigate = useNavigate();

  const candidateArray = JSON.parse(localStorage.getItem('candidateData')) || []

  // setting initital state of all the fields that will be used in the candidate page

  const [profileFormData, setProfileFormData] = useState({
    name: '',
    email: '',
    city: '',
    role: '',
    experience: '',
    salaryRange: '',
    workplace: '',
    technology: [],
    gitHubUsername: '',
    gitHubAvatar: '',
    gitHubRepos: '',
    gitHubFollowers: '',
    gitHubFollowing: '',

  });

  const [parentGroupSelected, setParentGroupSelected] = useState([]);

  // function that checks the profileFormData and combines it with the skills returned from the candidate skills component

  useEffect(() => {
    setProfileFormData(prevData => ({
      ...prevData,
      technology: parentGroupSelected
    }));
  }, [parentGroupSelected]);

  // function to set the profile form data with the inputs are being updated

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileFormData({
      ...profileFormData,
      [name]: value,
    })
  }

  const [isSaving, setIsSaving] = useState(false);

  // function that pushes the new profile to the local storage, and then navigates to that profile page after 1.5 seconds

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true); 
    candidateArray.push(profileFormData)
    localStorage.setItem('candidateData', JSON.stringify(candidateArray));

    setTimeout(() => {
      navigate(`/candidate/profile/${profileFormData.gitHubUsername}`);
      setIsSaving(false); 
    }, 1500)
  }

  const handleSkillsChange = (name, value) => {
    console.log(parentGroupSelected)
    setProfileFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  // functions that retrieves the data from the git hub fetch component and sets it to the relevant values in the profile form data

  const handleGitHubInputChange = (name, value) => {
    setProfileFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleGitHubDetailsChange = (gitHubDetails) => {
    setProfileFormData(prevState => ({
      ...prevState,
      gitHubUsername: gitHubDetails.login,
      gitHubAvatar: gitHubDetails.avatar_url,
      gitHubRepos: gitHubDetails.repos_url,
      gitHubFollowers: gitHubDetails.followers,
      gitHubFollowing: gitHubDetails.following
    }));
  };

  // useEffect to update document title on page

  useEffect(() => {
    document.title = `devOpps - Candidate - Create Profile`;
  }, []);

  return (
    <>
      <div className=" candidate-banner  py-24 mx-auto ">
       <div className ="container mx-auto max-w-[1280px] px-6">
          <h1 className=" text-3xl font-semibold leading-7 text-white sm:text-4xl">Candidate - Create Profile</h1>
          <p className="mt-3 leading-6 text-white">
                This information will be displayed publicly so be careful what you share.
              </p>
       </div>
      
      </div>
   
        
      <div className="max-w-[1280px] container mt-5 mx-auto px-6">
      <form id="candidate-profile-form" onSubmit={handleProfileSubmit}>
        <div>
  
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-2xl mt-12 font-bold sm:text-3xl">Personal Information</h2>
  
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
              <div className="sm:col-span-4">
                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                   Name
                </label>
                <div className="mt-2">
                    <input
                      required
                    type="text"
                      name="name"
                      value={profileFormData.name}
                      onChange={handleProfileChange}
                    id="name"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              
  
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                    <input
                      required
                    id="email"
                      name="email"
                      value={profileFormData.email}
                      onChange={handleProfileChange}
                    type="email"
                    
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-4">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  City
                </label>
                <div className="mt-2">
                    <input
                      required
                    id="city"
                      name="city"
                      type="text"
                      value={profileFormData.city}
                      onChange={handleProfileChange}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                  </input>
                </div>
                </div>
  
                <div className="sm:col-span-6 md:col-span-3">
                <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                  Role
                </label>
                <div className="mt-2">
                    <select
                      required
                    id="role"
                      name="role"
                      type="text"
                      value={profileFormData.role}
                      onChange={handleProfileChange}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                       <option>Please select</option>
                      <option>Software Developer</option>
                      <option>Front End Developer</option>
                      <option>Back End Developer</option>
                      <option>Full Stack Developer</option>
                      <option>DevOps Engineer</option>
                      <option>Cloud Architect</option>
                  </select>
                </div>
                </div>

                <div className="sm:col-span-6 md:col-span-3">
                <label htmlFor="experience" className="block text-sm font-medium leading-6 text-gray-900">
                  Experience
                </label>
                <div className="mt-2">
                    <select
                      required
                    id="experience"
                      name="experience"
                      type="text"
                      value={profileFormData.experience}
                      onChange={handleProfileChange}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                       <option>Please select</option>
                      <option>Junior</option>
                      <option>Mid</option>
                      <option>Senior</option>
                      <option>Lead</option>
                  </select>
                </div>
                </div>
  
                <div className="sm:col-span-6 md:col-span-3">
                <label htmlFor="workplace" className="block text-sm font-medium leading-6 text-gray-900">
                  Workplace preference
                </label>
                <div className="mt-2">
                    <select
                      required
                    id="workplace"
                      name="workplace"
  
                      value={profileFormData.workplace}
                      onChange={handleProfileChange}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                       <option>Please select</option>
                      <option>Office</option>
                      <option>Remote</option>
                      <option>Hybrid</option>
                  </select>
                </div>
                </div>

                <div className="sm:col-span-6 md:col-span-3">
                <label htmlFor="salaryRange" className="block text-sm font-medium leading-6 text-gray-900">
                  Expected Salary
                </label>
                  <div className="relative mt-2">
                  <span className="absolute inset-y-0 start-0 top-0 flex items-center ps-2.5 pointer-events-none">£</span>
          
    
                    <input
                      required
                    id="salaryRange"
                      name="salaryRange"
                      type="number"
                      value={profileFormData.salaryRange}
                      onChange={handleProfileChange}
                    className="block w-full rounded-md border-0 py-1.5 px-2 ps-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                  </input>
                </div>
                </div>
                
  
            </div>
          </div>
          </div>
          
          <CandidateSkills groupSelected={parentGroupSelected} setGroupSelected={setParentGroupSelected} onChange={handleSkillsChange} />
         
          <CandidateGitHubProfile onGitHubInputChange={handleGitHubInputChange} onGitHubDetailsChange={handleGitHubDetailsChange}/>

  
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button id ="submitProfile"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>  
   </div>  
    
    </>


    );
  }

  export default CandidateProfileForm;