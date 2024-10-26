import { useEffect } from 'react';

function Calendar() {
  useEffect(() => {
    document.title = "NUWIT | Calendar";
  }, []);

    return (
      <div>
        <h1>Welcome to the Calendar Page</h1>
      </div>
    );
  }
  
  export default Calendar;