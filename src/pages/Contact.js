import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    document.title = "NUWIT | Contact";
  }, []);

    return (
      <div>
        <h1>Welcome to the Contact Page</h1>
      </div>
    );
  }
  
  export default Contact;