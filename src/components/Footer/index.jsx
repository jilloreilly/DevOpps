import React from 'react';
import { Link } from "react-router-dom";

const MyFooter = () => {
    return (
        <footer className="bg-blue-100 text-black pt-3 mt-32 relative bottom-0 left-0 w-full">
            {/* Top section for logo and links within website */}
            <div className="container mx-auto flex justify-around flex-col items-center sm:flex-row p-10">
                {/* Left section for logo +/- text */}
                <div className="w-2/3 flex flex-col items-center justify-center">
                    <p className='p-5 text-center text-large'>DevOpps simplifies the hiring process by enabling developers to find their ideal job matches while assisting employers in discovering top talent. </p>
                    <p>LOGO</p>
                </div>
                {/* Right section for quick links */}
                <div className='flex flex-col items-center w-1/3'>
                    <h3 className='text-lg p-3'>Quick Links</h3>
                    <Link to="/employer/search" className="text-black p-2">Employers</Link>
                    <Link to="/candidate/create-profile" className="text-black p-2">Candidates</Link>
                    <Link to="/" className="text-black p-2">Job Search</Link>
                </div>
            </div>
            {/* Bottom copyright and links */}
            <div className="text-black text-center mt-4 p-5 text-sm">
                <p className='pb-3'>DevOpps is a collaberative project, designed and developed by: 
                    <Link to='https://www.linkedin.com/in/sarah-egleston/' target='blank'> Sarah Egleston, </Link>
                    <Link to=''>Jill O'Reilly, </Link>
                    <Link to=''>Will Mowlam, </Link>
                    <Link to=''>Ramon Sanguini de Andrade </Link> and
                    <Link to=''> Richard Llewellyn. </Link></p>
                <p>&copy; 2024 DevOpps. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default MyFooter;
