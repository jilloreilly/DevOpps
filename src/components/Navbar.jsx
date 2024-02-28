import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-white font-semibold text-lg">Dev Opps</div>
        <div className="ml-auto">
          <a href="#" className="text-white mr-4" id="candidateTab">Candidate</a>
          <a href="#" className="text-white" id="companyTab">Company</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
