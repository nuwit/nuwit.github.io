import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.title = "NUWIT | Home";
      }, []);

    return (
      <div>
        <h1>Welcome to the Home Page</h1>
      </div>
    );
  }
  
  export default Home;