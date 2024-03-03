import React from 'react';
import { Link } from "react-router-dom";

const MyFooter = () => {
    return (
        <footer className="bg-blue-100 text-black pt-3 mt-32 relative bottom-0 left-0 w-full">
            <div className="container mx-auto flex justify-around flex-col items-center sm:flex-row p-5">
                <div className="w-1/2 flex flex-col items-center">
                    {/* <p className='p-5'>DevOpps simplifies the hiring process by enabling developers to find their ideal job matches while assisting employers in discovering top talent. </p> */}
                    <p className='p-3'>This is a collaberative project, designed and developed by:</p>
                    <div className='p-3 flex justify-center flex-col'><p className="text-black p-2">Sarah Egleston</p>
                        <div className='flex justify-center flex-row'>
                            <Link to='mailto:sarah.c.egleston@gmail.com'><i className="px-2 fa-solid fa-envelope"></i></Link>
                            <Link to='https://www.linkedin.com/in/sarah-egleston/' target='blank'><i className="px-2 fa-brands fa-linkedin"></i></Link>
                            <Link to='https://github.com/segleston/' target='blank'><i className="px-2 fa-brands fa-github"></i></Link>
                        </div>
                    </div>
                    <div><Link to="#" className="text-black p-3">Jill O'Reilly</Link></div>
                    <div><Link to="#" className="text-black p-3">Will Mowlam</Link></div>
                    <div><Link to="#" className="text-black p-3">Ramon Sanguini de Andrade</Link></div>
                    <div><Link to="#" className="text-black p-3">Richard Llewellyn</Link></div>
                </div>
                <div className='flex flex-col items-center w-1/2'>
                    <p>Quick Links</p>
                    <Link to="/employer/search" className="text-black p-3">Employers</Link>
                    <Link to="candidate" className="text-black p-3">Candidates</Link>
                    <Link to="#" className="text-black p-3">Job Search</Link>
                </div>
            </div>
            <div className="text-black text-center mt-4 p-5">
                <p>&copy; 2024 DevOpps. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default MyFooter;
