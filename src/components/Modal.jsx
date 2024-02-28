import React, { useState } from 'react';

function Modal() {
  const [showCandidateForm, setShowCandidateForm] = useState(true);
  const [showCompanyForm, setShowCompanyForm] = useState(false);

  const toggleForms = (showCandidate) => {
    setShowCandidateForm(showCandidate);
    setShowCompanyForm(!showCandidate);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center mb-4">
        <div className="w-1/4">
          <button className={`w-full py-2 ${showCandidateForm ? 'bg-blue-500 text-white' : 'bg-gray-300'} font-semibold`} onClick={() => toggleForms(true)}>Candidate</button>
        </div>
        <div className="w-1/4">
          <button className={`w-full py-2 ${showCompanyForm ? 'bg-blue-500 text-white' : 'bg-gray-300'} font-semibold`} onClick={() => toggleForms(false)}>Company</button>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="w-full md:w-3/4 lg:w-1/2 bg-white p-4 rounded-lg shadow-md" id="formContainer">
          {showCandidateForm && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Candidate Information:</h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Subscribe</button>
            </div>
          )}

          {showCompanyForm && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Company Details:</h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">Company Name</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="companyName" type="text" placeholder="Enter company name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="industry">Industry</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="industry" type="text" placeholder="Enter industry type" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">Website</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="website" type="text" placeholder="Enter company website" />
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Subscribe</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
