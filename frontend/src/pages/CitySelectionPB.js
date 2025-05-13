import React, { useState } from 'react';
import './CitySelectionPB.css';

const CitySelectionPB = () => {
  const [selectedCityPB, setSelectedCityPB] = useState(null);
  const [searchQueryPB, setSearchQueryPB] = useState('');

  const citiesPB = [
    'Delhi', 'Bengaluru', 'Pune', 'Hyderabad', 'Mumbai', 
    'Thane', 'Gurgaon', 'Chennai', 'Ghaziabad', 'Emakulam'
  ];

  const filteredCitiesPB = citiesPB.filter(city => 
    city.toLowerCase().includes(searchQueryPB.toLowerCase())
  );

  const handleCitySelectPB = (city) => {
    setSelectedCityPB(city);
  };

  return (
    <div className="city-selection-pb-container">
      {/* Progress Bar */}
      <div className="pb-progress-bar">
        <div className="pb-progress" style={{ width: '50%' }}></div>
        <span className="pb-progress-text">50% complete</span>
      </div>

      {/* Main Content */}
      <div className="pb-main-content">
        <h1 className="pb-main-heading">Select your city</h1>
        
        {/* Search Input */}
        <div className="pb-search-container">
          <input
            type="text"
            placeholder="Search your city"
            value={searchQueryPB}
            onChange={(e) => setSearchQueryPB(e.target.value)}
            className="pb-search-input"
          />
          {searchQueryPB && (
            <span className="pb-search-clear" onClick={() => setSearchQueryPB('')}>
              ×
            </span>
          )}
        </div>

        {/* Popular Cities Section */}
        <div className="pb-popular-cities">
          <h3 className="pb-popular-heading">Popular cities</h3>
          <div className="pb-city-tags">
            {filteredCitiesPB.map((city) => (
              <div
                key={city}
                className={`pb-city-tag ${selectedCityPB === city ? 'pb-selected' : ''}`}
                onClick={() => handleCitySelectPB(city)}
              >
                {city}
              </div>
            ))}
          </div>
        </div>

        {/* Tooltip */}
        <div className="pb-tooltip">
          <span className="pb-tooltip-icon">i</span>
          <p className="pb-tooltip-text">
            This will help us in finding the network of <strong>Cashless Hospitals</strong> in your city
          </p>
        </div>

        {/* Continue Button */}
        <button className="pb-continue-button" disabled={!selectedCityPB}>
          Continue ▼
        </button>
      </div>

      {/* Footer */}
      <div className="pb-footer">
        <p className="pb-footer-text">
          Policybazaar is one of India's leading digital insurance platform
        </p>
        
        <div className="pb-rating">
          <span className="pb-stars">★★★★☆</span>
          <span className="pb-rating-text">4.5</span>
        </div>
        
        <div className="pb-stats-container">
          <div className="pb-stat-item">
            <div className="pb-stat-number">9.7 crore</div>
            <div className="pb-stat-label">Registered Consumers</div>
          </div>
          
          <div className="pb-stat-item">
            <div className="pb-stat-number">51</div>
            <div className="pb-stat-label">Insurance Partners</div>
          </div>
          
          <div className="pb-stat-item">
            <div className="pb-stat-number">4.9 crore</div>
            <div className="pb-stat-label">Policies Sold</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitySelectionPB;