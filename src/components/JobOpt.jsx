import React from 'react';

function JobOptions() {
  return (
    <div className="container mx-auto">
      {/* Job Options */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold">Job Options:</h2>
      </div>

      {/* Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Box 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <i className="fas fa-briefcase text-3xl mb-2"></i>
          <span>First Job</span>
        </div>
        {/* Box 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <i className="fas fa-file-alt text-3xl mb-2"></i>
          <span>Administrative</span>
        </div>
        {/* Box 3 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <i className="fas fa-dollar-sign text-3xl mb-2"></i>
          <span>Sales</span>
        </div>
        {/* Box 4 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <i className="fas fa-balance-scale text-3xl mb-2"></i>
          <span>Legal</span>
        </div>
        {/* Box 5 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <i className="fas fa-money-bill-wave text-3xl mb-2"></i>
          <span>Financial</span>
        </div>
        {/* Box 6 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <i className="fas fa-industry text-3xl mb-2"></i>
          <span>Production</span>
        </div>
        {/* Box 7 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <i className="fas fa-users text-3xl mb-2"></i>
          <span>Human Resources</span>
        </div>
        {/* Box 8 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <i className="fas fa-heartbeat text-3xl mb-2"></i>
          <span>Health</span>
        </div>
        {/* Box 9 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <i className="fas fa-laptop-code text-3xl mb-2"></i>
          <span>Technology</span>
        </div>
        {/* Box 10 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <i className="fas fa-graduation-cap text-3xl mb-2"></i>
          <span>Education</span>
        </div>
      </div>
    </div>
  );
}

export default JobOptions;
