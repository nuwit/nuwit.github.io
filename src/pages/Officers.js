import { useEffect } from 'react';

function Officers() {
    useEffect(() => {
        document.title = "NUWIT | Officers";
      }, []);

    return (
      <div>
        <h1>Welcome to the Officers Page</h1>
      </div>
    );
  }
  
  export default Officers;