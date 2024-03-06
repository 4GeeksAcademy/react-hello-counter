import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const SecondsCounter = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const minutes = Math.floor(elapsedSeconds / 60);
    const remainingSeconds = elapsedSeconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="container-fluid bg-dark text-light">
      <div className="row">
        <div className="col-md-2 text-center bordered-box">
          <FontAwesomeIcon icon={faClock} size="4x" />
        </div>
        <div className="col-md-1 text-center bordered-box">
          {formatTime()}
        </div>
      </div>
    </div>
  );
};

export default SecondsCounter;
