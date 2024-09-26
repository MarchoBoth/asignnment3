import React, { useState, useEffect } from 'react';

export const TugasKoding = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const timeString = date.toLocaleTimeString('en-US', {
        hour12: false,
        timeZone: 'Asia/Bangkok',
      });
      const timezoneOffset = -date.getTimezoneOffset() / 60;
      const timezone = `GMT${
        timezoneOffset >= 0 ? '+' : ''
      }${timezoneOffset}(Bangkok Standard Time)`;
      setCurrentTime(`The Current time is ${timeString} ${timezone}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  );
};
