import { useState, useEffect } from 'react';

function useWelcomePrompt() {
  const [name, setName] = useState(null);

  useEffect(() => {
    
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setName(storedName);
    } else {

      const userName = prompt("What's your name?");
      if (userName) {
        localStorage.setItem('userName', userName);
        setName(userName);
      }
    }
  }, []);

  return name;
}

export default useWelcomePrompt;
