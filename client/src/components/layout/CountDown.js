import React, { useState, useEffect } from "react";
import "tachyons";


const CountDown = () => {
  const targetDate = new Date("April 10, 2023 10:00:00").getTime();
  const [remainingTime, setRemainingTime] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    // <div className="pa4 tc ">
    //   <h1 className="f1 tc  ma1 pa0   bg-gradient" >Coming Soon...</h1>
    //   <div className="flex justify-center ">
    //     <div className="bg-light-gray tc br3 pa3 ma2 shadow-2 grow " style={{backgroundColor:'silver'}}>
    //       <div className="f1">{days}</div>
    //       <div className="f4">Days</div>
    //     </div>
    //     <div className="bg-light-gray tc br3 pa3 ma2 shadow-2 grow  " style={{backgroundColor:'silver'}}>
    //       <div className="f1">{hours}</div>
    //       <div className="f4">Hours</div>
    //     </div>
    //     <div className="bg-light-gray tc br3 pa3 ma2 shadow-2 grow"style={{backgroundColor:'silver'}}>
    //       <div className="f1">{minutes}</div>
    //       <div className="f4">Minutes</div>
    //     </div>
    //     <div className="bg-light-gray tc br3 pa3 ma2 shadow-2 grow"style={{backgroundColor:'silver'}}>
    //       <div className="f1">{seconds}</div>
    //       <div className="f4">Seconds</div>
    //     </div>
    //   </div>
    // </div>
    <div className="countdown">
        <h1>Coming Soon</h1>
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
        </div>
      </div>
  );
}

export default CountDown;
