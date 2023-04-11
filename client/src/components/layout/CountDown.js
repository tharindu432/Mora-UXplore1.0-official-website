import React, { useState, useEffect } from "react";
import "tachyons";

const CountDown = () => {
  const targetDate = new Date("April 12, 2023 10:00:00").getTime();
  const [remainingTime, setRemainingTime] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const newRemainingTime = targetDate - currentTime;
      if (newRemainingTime <= 0) {
        setRemainingTime(0);
        clearInterval(intervalId);
      } else {
        setRemainingTime(newRemainingTime);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div className="countdown">
      <h1><b>Registrations Open</b></h1>
      {/* <h1>Coming Soon</h1>
      <div className="countdown-time">
        <div className="card bg-gray">
          <h2>{days}</h2>
          <p>Days</p>
        </div>
        <div className="card bg-gray">
          <h2>{hours}</h2>
          <p>Hours</p>
        </div>
        <div className="card bg-gray">
          <h2>{minutes}</h2>
          <p>Minutes</p>
        </div>
        <div className="card bg-gray">
          <h2>{seconds}</h2>
          <p>Seconds</p>
        </div>
      </div> */}
    </div>
  );
};

export default CountDown;