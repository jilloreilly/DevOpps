import { useEffect } from 'react';



function Custom404() {
  useEffect(() => {
    document.title = `404`;
  }, []);

  return (
    <>
      
      <div className="404-banner bg-indigo-500 py-24 mx-auto ">
    <div className ="container mx-auto max-w-[1280px] px-6">
       <h1 className=" text-3xl font-semibold leading-7 text-white sm:text-4xl">404 - Page Not Found</h1>
       
    </div>
   
   </div>
    <div as="main" className="container my-20 mx-auto max-w-[1280px] px-6" id="page-404">
      <p>Oops! Looks like you've ventured into uncharted digital territory.</p>
      <p>No worries! Take a deep breath, and let's navigate back to familiar ground.
        Just hit the back button or return to the homepage to continue your journey.</p>
      </div>
      
      </>
    );
  }


  export default Custom404;