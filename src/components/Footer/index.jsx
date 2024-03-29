import React from 'react';
import { Link } from "react-router-dom";

const MyFooter = () => {
    // Scroll to top on logo click
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="bg-blue-100 text-black py-10 mt-20 relative bottom-0 left-0 w-full">
            {/* Top section for logo and links within website */}
            <div className="container max-w-[1280px] mx-auto flex flex-col justify-around lg:flex-row md:flex-row items-center sm:flex-col p-10 md:p-5 sm:p-2">
                {/* Left section for logo + text */}
                <div className="w-full lg:w-1/3 flex flex-row items-center justify-center pb-2">
                    <p className='p-5 md:p-1 text-center text-large md:text-base'>devOpps simplifies the hiring process by enabling developers to find their ideal job matches while assisting employers in discovering top talent.</p>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col items-center justify-center pb-2">
                    <Link to='/' onClick={scrollToTop}><img src='/images/logo.png'/></Link>
                </div>
                {/* Right section for quick links */}
                <div className='flex flex-col items-center w-full lg:w-1/3 pt-2'>
                    <h3 className='text-lg md:text-base p-3 sm:p-1'>Quick Links</h3>
                    <Link to="/employer/search" onClick={scrollToTop} className="text-base md:text-sm text-black p-2 sm:p-1 hover:text-indigo-400">Employers</Link>
                    <Link to="/candidate/create-profile" onClick={scrollToTop} className="text-base md:text-sm text-black p-2 sm:p-1 hover:text-indigo-400">Candidates</Link>
                    <Link to="/job-results" onClick={scrollToTop} className=" text-base md:text-sm text-black p-2 hover:text-indigo-400">Job Search</Link>
                </div>
            </div>
            {/* Bottom copyright and links */}
            <div className="text-black text-center mt-4 md:mt-2 p-5 md:p-2 text-sm">
                <p className='pb-3'>devOpps is a collaborative project, designed and developed by:&nbsp;
                    <Link to='https://www.github.com/segleston' target='blank' className='hover:text-indigo-400'>Sarah Egleston</Link>,&nbsp;
                    <Link to='https://www.github.com/jilloreilly' target='blank' className='hover:text-indigo-400'>Jill O'Reilly</Link>,&nbsp;
                    <Link to='https://www.github.com/willmowlam' target='blank' className='hover:text-indigo-400'>Will Mowlam</Link>,&nbsp;
                    <Link to='https://www.github.com/ramonsaguini' target='blank' className='hover:text-indigo-400'>Ramon Sanguini de Andrade</Link> and&nbsp;
                    <Link to='https://www.github.com/RichLlew182' target='blank' className='hover:text-indigo-400'>Richard Llewellyn</Link>.</p>
                <p>&copy; 2024 devOpps. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default MyFooter;
