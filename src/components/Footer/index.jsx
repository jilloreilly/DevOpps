import React from 'react';

const MyFooter = () => {
    return (
        <footer className="bg-blue-900 text-black p-16 fixed bottom-0 left-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="w-1/2 flex flex-col items-start">
                    {/* Adjusted alignment */}
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                </div>
                <div className="w-1/2 flex justify-end">
                    {/* Adjusted alignment */}
                    <a href="#" className="text-black mr-4">Link 1</a>
                    <a href="#" className="text-black mr-4">Link 2</a>
                    <a href="#" className="text-black">Link 3</a>
                </div>
            </div>
            <div className="text-black text-center mt-4">
                <p>&copy; 2024 Add Project details. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default MyFooter;
