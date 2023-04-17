import React, { useState, useEffect } from 'react';
import './RegistrationCount.css';
import { API_URL } from "../constants";
import CountUp from "react-countup";


function RegistrationCount() {
  const [teamCount, setTeamCount] = useState(10);

  useEffect(() => {
    fetch(`${API_URL}/teams/teamcount`)
      .then((response) => response.json())
      .then((data) => {
       console.log(data);
        setTeamCount(data.data.noofteams);
       
       // setTeamCount(parseInt(data.count));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="registration-count">
      <div className="count-card">
        <div className="count-label"><i class="fa fa-users" aria-hidden="true"></i> <br/>Teams Registered</div>
        {/* <div className="count-number">{teamCount !== null ? teamCount : 'Loading...'}</div> */}
        <CountUp style={{color: '#005bff'}} duration={5} end={Math.floor(teamCount/10)*10} className="count-number" suffix=' +'/>
      </div>
      <div className="count-card">
        <div className="count-label"><i class="fa fa-university" aria-hidden="true"></i>
 <br/>Universities Registered</div>
        {/* <div className="count-number">14</div> */}
        <CountUp style={{color: '#d557e8'}} duration={7} end={Math.floor(14/10)*10} className="count-number" suffix=' +'/>
      </div>
    </div>
  );
}

export default RegistrationCount;