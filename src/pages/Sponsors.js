import { useEffect } from 'react';

function Sponsors() {
  useEffect(() => {
    document.title = "NUWIT | Sponsors";
  }, []);

    return (
      <div>
        <h1>Welcome to the Sponsors Page</h1>
      </div>
    );
  }
  
  export default Sponsors;