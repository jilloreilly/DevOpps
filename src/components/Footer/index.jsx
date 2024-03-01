import React from 'react';

const MyFooter = () => {
    return (
        <footer className="bg-navy text-white py-16 fixed bottom-0 left-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="w-1/2 items-center">
                    <p>Text</p>
                </div>
                <div className="w-1/2 items-center">
                    <a href="#" className="text-white mr-4">Link 1</a>
                    <a href="#" className="text-white mr-4">Link 2</a>
                    <a href="#" className="text-white">Link 3</a>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>&copy; 2024 Add Project details. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default MyFooter;
