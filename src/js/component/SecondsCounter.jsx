import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const SecondsCounter = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedSeconds(prevSeconds => {
        if (prevSeconds < 9) {
          return prevSeconds + 1;
        } else { 
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
        <div>
          {elapsedSeconds}
        </div>
    </div>
  );
};

export default SecondsCounter;
