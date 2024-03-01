import { useEffect } from 'react';
import CandidateProfileForm from '../components/CandidateProfileForm';
import CandidateSkills from '../components/CandidateSkills';
import CandidateGitHubProfile from '../components/CandidateGitHubProfile';



function Candidate() {

  return (
    <>
      <CandidateProfileForm />
      <CandidateSkills />
      <CandidateGitHubProfile />
      </>

    );
  }

  export default Candidate;