import { Button } from "@nextui-org/react";

function Home() {
  return (
    <>
    <div className="absolute inset-0 bg-cover bg-center flex items-center justify-center">
      {/* Background Photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto p-3">
        <div className="flex flex-row">
          {/* Left Section */}
          <div className="w-5/12 flex flex-col justify-center pr-10"> 
            {/* Text */}
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">Welcome</h1>
              <p className="text-lg">Tag Line.</p>
            </div>
            {/* Buttons */}
            <div className="mt-4 flex flex-row">
              <Button color="primary" variant="flat">Get Started</Button>
              <Button color="primary" variant="flat" className="ml-4">Learn More</Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-7/12 flex items-center justify-center text-white pl-10">
            <p>Blah blah blah... .</p>
            {/* <img src="/photo.jpg" alt="Animation" className="w-32 h-32 rounded-full" /> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
