import React from 'react';
import { Link } from "react-router-dom";

const MyFooter = () => {
    return (
        <footer className="bg-blue-900 text-black p-16 relative bottom-0 left-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="w-1/2 flex flex-col items-start">
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                </div>
                <div className="w-1/2 flex justify-end">
                    <Link to="#" className="text-black mr-4">Link 1</Link>
                    <Link to="#" className="text-black mr-4">Link 1</Link>
                    <Link to="#" className="text-black mr-4">Link 1</Link>
                </div>
            </div>
            <div className="text-black text-center mt-4">
                <p>&copy; 2024 Add Project details. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default MyFooter;
