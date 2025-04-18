import React from 'react';
import './PBAdvantage.css';

import priceIcon from '../assets/price.png';
import adviceIcon from '../assets/consultancy.png';
import reliableIcon from '../assets/dependable.png';
import claimsIcon from '../assets/social-security.png';
import helpIcon from '../assets/raise-hand.png';

const PBAdvantage = () => {
  const features = [
    {
      icon: priceIcon,
      title: 'One of the best Prices',
      subtitle: 'Guaranteed'
    },
    {
      icon: adviceIcon,
      title: 'Unbiased Advice',
      subtitle: 'Keeping customers first'
    },
    {
      icon: reliableIcon,
      title: '100% Reliable',
      subtitle: 'Regulated by IRDAI'
    },
    {
      icon: claimsIcon,
      title: 'Claims Support',
      subtitle: 'Made stress-free'
    },
    {
      icon: helpIcon,
      title: 'Happy to Help',
      subtitle: 'Every day of the week'
    }
  ];

  return (
    <div className="pb-advantage">
      <h2 className="pb-title">PB Advantage</h2>
      <div className="pb-underline"></div>
      <p className="pb-description">
        When you buy insurance from us, you get more than just financial safety.
        You also get: our promise of simplifying complex insurance terms and conditions,
        quick stress-free claims, instant quotes from top insurers and being present for
        you in the toughest of times.
      </p>
      <a href="#" className="pb-link">Know more</a>

      <div className="pb-grid">
        {features.map((item, index) => (
          <div className="pb-card" key={index}>
            <img src={item.icon} alt={item.title} className="pb-icon" />
            <div className="pb-card-title">{item.title}</div>
            <div className="pb-card-subtitle">{item.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PBAdvantage;
