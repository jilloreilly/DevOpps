import React from 'react';
import { Link } from "react-router-dom";

const MyFooter = () => {
    return (
        <footer className="bg-blue-100 text-black pt-3 mt-20 relative bottom-0 left-0 w-full">
            {/* Top section for logo and links within website */}
            <div className="container mx-auto flex flex-wrap justify-around lg:flex-row md:flex-row items-center sm:flex-col p-10 md:p-5 sm:p-2">
                {/* Left section for logo +/- text */}
                <div className="w-1/3 flex flex-row items-center justify-center pb-2">
                    <p className='p-5 md:p-1 text-center text-large md:text-base'>devOpps simplifies the hiring process by enabling developers to find their ideal job matches while assisting employers in discovering top talent. </p>
                </div>
                <div className="w-1/3 flex flex-row items-center justify-center pb-2">
                <Link to='/'><img src='/images/logo.png'/></Link>
                </div>
                {/* Right section for quick links */}
                <div className='flex flex-col items-center w-1/3 pt-2'>
                    <h3 className='text-lg md:text-base p-3 sm:p-1'>Quick Links</h3>
                    <Link to="/employer/search" className="text-base md:text-sm text-black p-2 sm:p-1 hover:text-gray-300">Employers</Link>
                    <Link to="/candidate/create-profile" className="text-base md:text-sm text-black p-2 sm:p-1 hover:text-gray-300">Candidates</Link>
                    <Link to="/" className=" text-base md:text-sm text-black p-2 hover:text-gray-300">Job Search</Link>
                </div>
            </div>
            {/* Bottom copyright and links */}
            <div className="text-black text-center mt-4 md:mt-2 p-5 md:p-2 text-sm">
                <p className='pb-3'>devOpps is a collaberative project, designed and developed by: 
                    <Link to='https://www.github.com/segleston/' target='blank'> Sarah Egleston, </Link>
                    <Link to='https://www.github.com/jilloreilly'>Jill O'Reilly, </Link>
                    <Link to='https://www.github.com/willmowlam'>Will Mowlam, </Link>
                    <Link to='https://www.github.com/ramonsaguini'>Ramon Sanguini de Andrade </Link> and
                    <Link to='https://www.github.com/RichLlew182'> Richard Llewellyn. </Link></p>
                <p>&copy; 2024 devOpps. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default MyFooter;
