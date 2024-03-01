import { useEffect } from 'react';
import { Button } from "@nextui-org/react";


function Home() {

  return (
    <>
      <div className="relative">
        {/* Background Photo */}
        {/* <div
          className="absolute inset-0 bg-cover bg-center"
          // style={{ backgroundImage: "url('/your-background-photo.jpg')" }}
        ></div> */}

        {/* Content */}
        <div className="flex flex-row">
          {/* Left Section */}
          <div className="grid grid-cols-6">
            {/* Text */}
            <div>
              <h1 className="">Welcome</h1>
              <p className="">Tag Line.</p>
            </div>
            {/* Buttons */}
            <div>
              <Button color="primary" variant="flat">Get Started</Button>
              <Button color="primary" variant="flat">Learn More</Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-6">
            blah blah
            {/* <img src="/your-other-photo.jpg" alt="Your Other Photo" className="w-32 h-32 rounded-full" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;