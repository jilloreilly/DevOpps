import { useEffect } from 'react';



function Custom404() {
  useEffect(() => {
    document.title = `404`;
  }, []);

  return (

    <div as="main" id="page-404">
      <h2>404 - Page Not Found</h2>
      <p>Oops! Looks like you've ventured into uncharted digital territory.</p>
      <p>No worries! Take a deep breath, and let's navigate back to familiar ground.
        Just hit the back button or return to the homepage to continue your journey.</p>
    </div>
    );
  }


  export default Custom404;