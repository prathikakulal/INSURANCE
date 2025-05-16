import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import './AgeSelection.css';



const AgeSelection = () => {
  const [members, setMembers] = useState([
    { id: 1, relationship: 'Your age', age: 28 },
    { id: 2, relationship: 'Daughter\'s age', age: 5 }
  ]);

  const handleAgeChange = (id, value) => {
    setMembers(members.map(member => 
      member.id === id ? { ...member, age: parseInt(value) || 0 } : member
    ));
  };

  return (
    <div className="pb-age-selection-container">
      {/* Header with back button and progress bar */}
      <div className="pb-age-selection-header">
        <button className="pb-age-selection-back-button">
          <FiArrowLeft size={20} />
        </button>
        <div className="pb-age-selection-progress-container">
          <div className="pb-age-selection-progress-bar"></div>
          <span className="pb-age-selection-progress-text">25% complete</span>
        </div>
      </div>

      {/* Main content */}
      <div className="pb-age-selection-content">
        <div className="pb-age-selection-form-container">
          <h1 className="pb-age-selection-title">Select age of covered member(s)</h1>
          
          {members.map(member => (
            <div key={member.id} className="pb-age-selection-input-group">
              <label className="pb-age-selection-label">{member.relationship}</label>
              <select 
                value={member.age}
                onChange={(e) => handleAgeChange(member.id, e.target.value)}
                className="pb-age-selection-select"
              >
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i} value={i}>{i} yr</option>
                ))}
              </select>
            </div>
          ))}

          <button className="pb-age-selection-continue-button">Continue ▼</button>
        </div>

        {/* Side info panel */}
        <div className="pb-age-selection-side-panel">
          <div className="pb-age-selection-info-box">
            <h3 className="pb-age-selection-info-title">Get best pricing</h3>
            <p className="pb-age-selection-info-text">
              This will help us in calculating the premium & discounts for your family member(s)
            </p>
          </div>
        </div>
      </div>

      {/* Footer with statistics */}
      <div className="pb-age-selection-footer">
        <p className="pb-age-selection-footer-text">Policybazaar is one of India's leading digital insurance platform</p>
        
        <div className="pb-age-selection-stats-container">
          <div className="pb-age-selection-stat-item">
            <h3 className="pb-age-selection-stat-number">9.7 crore</h3>
            <p className="pb-age-selection-stat-label">Registered Consumers</p>
          </div>
          
          <div className="pb-age-selection-stat-item">
            <h3 className="pb-age-selection-stat-number">51</h3>
            <p className="pb-age-selection-stat-label">Insurance Partners</p>
          </div>
          
          <div className="pb-age-selection-stat-item">
            <h3 className="pb-age-selection-stat-number">4.9 crore</h3>
            <p className="pb-age-selection-stat-label">Policies Sold</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeSelection;