import { useEffect } from 'react';
// import {MyHeader} from '../components/Header'
import { Button } from "@nextui-org/react";


function Home() {

  return (

    <div className="relative">
      {/* Background Photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/your-background-photo.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between px-4 py-8 sm:py-12">
        {/* Left Section */}
        <div className="text-white">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Website</h1>
            <p className="text-lg md:text-xl mb-6">This is a description of what my website is about.</p>
          </div>
          {/* Buttons */}
          <div>
            <Button color="primary" variant="gradient" className="mr-4">Get Started</Button>
            <Button color="primary" variant="flat">Learn More</Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:block ml-8">
          <img src="/your-other-photo.jpg" alt="Your Other Photo" className="w-32 h-32 rounded-full" />
        </div>
      </div>
    </div>
    );
  }
  
  export default Home;