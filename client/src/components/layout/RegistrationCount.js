import React, { useState, useEffect } from 'react';
import './RegistrationCount.css';
import { API_URL } from "../constants";

function RegistrationCount() {
  const [teamCount, setTeamCount] = useState(null);

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
        <div className="count-label">Teams Registered</div>
        <div className="count-number">{teamCount !== null ? teamCount : 'Loading...'}</div>
      </div>
      <div className="count-card">
        <div className="count-label">Universities Registered</div>
        <div className="count-number">14</div>
      </div>
    </div>
  );
}

export default RegistrationCount;