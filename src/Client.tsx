// src/components/ClientApplications.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const ClientApplications: React.FC = () => {
  const [showUnfinished, setShowUnfinished] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [unfinishedApplications, setUnfinishedApplications] = useState<string[]>([]);
  const [completedApplications, setCompletedApplications] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleUnfinishedClick = () => {
    setShowUnfinished(!showUnfinished);
    setShowCompleted(false);
    if (!showUnfinished) fetchUnfinishedApplications();
  };

  const handleCompletedClick = () => {
    setShowCompleted(!showCompleted);
    setShowUnfinished(false);
    if (!showCompleted) fetchCompletedApplications();
  };

  const fetchUnfinishedApplications = async () => {
    try {
      const response = await axios.get('/api/unfinished-applications');
      setUnfinishedApplications(response.data);
    } catch (error) {
      console.error('Error fetching unfinished applications:', error);
    }
  };

  const fetchCompletedApplications = async () => {
    try {
      const response = await axios.get('/api/completed-applications');
      setCompletedApplications(response.data);
    } catch (error) {
      console.error('Error fetching completed applications:', error);
    }
  };

  return (
      <div className="client-applications">
        <h2>Client</h2>
        <button onClick={() => navigate('/ClientApplicationForm')}>New application</button>
        <button onClick={handleUnfinishedClick}>Resume application</button>
        {showUnfinished && (
            <div className="dropdown">
              {unfinishedApplications.length > 0 ? (
                  unfinishedApplications.map((app, index) => (
                      <div key={index}>{app}</div>
                  ))
              ) : (
                  <div>No unfinished applications</div>
              )}
            </div>
        )}
        <button onClick={handleCompletedClick}>View applications</button>
        {showCompleted && (
            <div className="dropdown">
              {completedApplications.length > 0 ? (
                  completedApplications.map((app, index) => (
                      <div key={index}>{app}</div>
                  ))
              ) : (
                  <div>No completed applications</div>
              )}
            </div>
        )}
        <button disabled>Accepted client</button>
      </div>
  );
};

export default ClientApplications;
