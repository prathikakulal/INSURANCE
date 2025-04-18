// import React, { useState } from 'react';
// import './InsuranceForm.css';

// const TermLifeInsuranceForm = () => {
//   const [gender, setGender] = useState('Male');
//   const [name, setName] = useState('');
//   const [dob, setDob] = useState('');
//   const [country, setCountry] = useState('India');
//   const [phone, setPhone] = useState('');
//   const [whatsappUpdates, setWhatsappUpdates] = useState(true);

//   const calculateAge = (birthDate) => {
//     if (!birthDate) return '';
    
//     const parts = birthDate.split('/');
//     if (parts.length !== 3) return '';
    
//     const birthYear = parseInt(parts[2]);
//     const currentYear = new Date().getFullYear();
//     return `${currentYear - birthYear} years`;
//   };

//   return (
//     <div className="main-container">
//       <div className="header">
//         <div className="logo-container">
//           <img 
//             src="/policybazaar-logo.png" 
//             alt="PolicyBazaar Logo" 
//             className="logo" 
//           />
//           <span className="slogan">HAR FAMILY HOGI INSURED</span>
//         </div>
//         <div className="btn-group">
//           <button className="assist-btn">
//             <span className="btn-icon">🛟</span> Claim Assistance
//           </button>
//           <button className="expert-btn">
//             <span className="btn-icon">📞</span> Talk to Expert
//           </button>
//         </div>
//       </div>

//       <div className="headline">
//         <span className="amount">₹1 Crore</span> life cover starting <span className="price">from ₹485</span><span className="month-text">/month<sup>+</sup></span>
//       </div>

//       <div className="offer-section">
//         <div className="offer">
//           <span className="offer-icon-container">
//             <span className="offer-icon">✓</span>
//           </span>
//           <div className="offer-content">
//             <span className="offer-text">Get an</span><br/>
//             <span className="offer-highlight">Online Discount of 15%</span>
//             <sup>#</sup>
//           </div>
//         </div>
//         <div className="offer">
//           <span className="offer-icon-container trophy">
//             <span className="offer-icon">🏆</span>
//           </span>
//           <div className="offer-content">
//             <span className="offer-text">PB Promise</span><br/>
//             <span className="offer-highlight">Lowest Price Guarantee</span>
//             <sup>*</sup>
//           </div>
//         </div>
//       </div>

//       <div className="gender-selector">
//         <button 
//           className={`gender-btn ${gender === 'Male' ? 'gender-btn-active' : 'gender-btn-inactive'}`}
//           onClick={() => setGender('Male')}
//         >
//           Male
//         </button>
//         <button 
//           className={`gender-btn ${gender === 'Female' ? 'gender-btn-active' : 'gender-btn-inactive'}`}
//           onClick={() => setGender('Female')}
//         >
//           Female
//         </button>
//       </div>

//       <div className="form-field">
//         <div className="field-label">Your Name</div>
//         <input 
//           type="text" 
//           className="input-field" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your full name"
//         />
//       </div>

//       <div className="form-field">
//         <div className="field-label">Date of Birth</div>
//         <div className="dob-container">
//           <input 
//             type="text" 
//             className="input-field" 
//             value={dob}
//             onChange={(e) => setDob(e.target.value)}
//             placeholder="DD/MM/YYYY"
//           />
//           {dob && (
//             <span className="age-display">
//               {calculateAge(dob)}
//             </span>
//           )}
//         </div>
//       </div>

//       <div className="form-field">
//         <div className="field-label">Mobile Number</div>
//         <div className="phone-input">
//           <div className="country-select-container">
//             <select 
//               className="country-select"
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//             >
//               <option value="India">India</option>
//               <option value="US">US</option>
//               <option value="UK">UK</option>
//             </select>
//             <span className="dropdown-icon">▼</span>
//           </div>
//           <div className="phone-code">+91</div>
//           <input 
//             type="text" 
//             className="phone-number" 
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             placeholder="Enter your 10 digit mobile number"
//           />
//         </div>
//       </div>

//       <button className="view-plans-btn">
//         View Plans
//       </button>

//       <div className="certified-section">
//         <span className="certified-icon">🛡️</span>
//         <span className="certified-text">Only certified Policybazaar expert will assist you</span>
//       </div>

//       <div className="whatsapp-section">
//         <span className="whatsapp-icon">📱</span>
//         <span className="whatsapp-text">Get updates on WhatsApp</span>
//         <label className="toggle-switch">
//           <input 
//             type="checkbox" 
//             className="toggle-input"
//             checked={whatsappUpdates}
//             onChange={() => setWhatsappUpdates(!whatsappUpdates)}
//           />
//           <span className="toggle-slider"></span>
//         </label>
//       </div>

//       <div className="disclaimer">
//         By clicking, you agree to our <a href="#" className="link">Privacy policy</a>, <a href="#" className="link">Terms of Use</a> & <a href="#" className="link">Disclaimers</a>
//       </div>

//       <div className="footer">
//         <div className="company-info">
//           <div className="company-title">Policybazaar is one of <span className="highlight">India's leading digital</span></div>
//           <div className="company-subtitle">insurance platform</div>
//         </div>

//         <div className="rating">
//           <div className="stars">
//             <span className="star filled">★</span>
//             <span className="star filled">★</span>
//             <span className="star filled">★</span>
//             <span className="star filled">★</span>
//             <span className="star half-filled">★</span>
//           </div>
//         </div>

//         <div className="statistics">
//           <div className="stat">
//             <div className="stat-value">9.7 <span className="stat-unit">Crore</span></div>
//             <div className="stat-label">Registered Consumers</div>
//           </div>
//           <div className="stat">
//             <div className="stat-value">51</div>
//             <div className="stat-label">Insurance Partners</div>
//           </div>
//           <div className="stat">
//             <div className="stat-value">4.9 <span className="stat-unit">Crore</span></div>
//             <div className="stat-label">Policies Sold</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermLifeInsuranceForm;


import React, { useState } from 'react';
import './InsuranceForm.css';

const TermLifeInsuranceForm = () => {
  const [gender, setGender] = useState('Male');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('India');
  const [phone, setPhone] = useState('');
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);

  const calculateAge = (birthDate) => {
    if (!birthDate) return '';
    
    const parts = birthDate.split('/');
    if (parts.length !== 3) return '';
    
    const birthYear = parseInt(parts[2]);
    const currentYear = new Date().getFullYear();
    return `${currentYear - birthYear} years`;
  };

  return (
    <div className="insurance-main-container">
      <div className="insurance-header">
        <div className="insurance-logo-container">
          <img 
            src="/policybazaar-logo.png" 
            alt="PolicyBazaar Logo" 
            className="insurance-logo" 
          />
          <span className="insurance-slogan">HAR FAMILY HOGI INSURED</span>
        </div>
        <div className="insurance-btn-group">
          <button className="insurance-assist-btn">
            <span className="insurance-btn-icon">🛟</span> Claim Assistance
          </button>
          <button className="insurance-expert-btn">
            <span className="insurance-btn-icon">📞</span> Talk to Expert
          </button>
        </div>
      </div>

      <div className="insurance-headline">
        <span className="insurance-amount">₹1 Crore</span> life cover starting <span className="insurance-price">from ₹485</span><span className="insurance-month-text">/month<sup>+</sup></span>
      </div>

      <div className="insurance-offer-section">
        <div className="insurance-offer">
          <span className="insurance-offer-icon-container">
            <span className="insurance-offer-icon">✓</span>
          </span>
          <div className="insurance-offer-content">
            <span className="insurance-offer-text">Get an</span><br/>
            <span className="insurance-offer-highlight">Online Discount of 15%</span>
            <sup>#</sup>
          </div>
        </div>
        <div className="insurance-offer">
          <span className="insurance-offer-icon-container insurance-trophy">
            <span className="insurance-offer-icon">🏆</span>
          </span>
          <div className="insurance-offer-content">
            <span className="insurance-offer-text">PB Promise</span><br/>
            <span className="insurance-offer-highlight">Lowest Price Guarantee</span>
            <sup>*</sup>
          </div>
        </div>
      </div>

      <div className="insurance-gender-selector">
        <button 
          className={`insurance-gender-btn ${gender === 'Male' ? 'insurance-gender-btn-active' : 'insurance-gender-btn-inactive'}`}
          onClick={() => setGender('Male')}
        >
          Male
        </button>
        <button 
          className={`insurance-gender-btn ${gender === 'Female' ? 'insurance-gender-btn-active' : 'insurance-gender-btn-inactive'}`}
          onClick={() => setGender('Female')}
        >
          Female
        </button>
      </div>

      <div className="insurance-form-field">
        <div className="insurance-field-label">Your Name</div>
        <input 
          type="text" 
          className="insurance-input-field" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
        />
      </div>

      <div className="insurance-form-field">
        <div className="insurance-field-label">Date of Birth</div>
        <div className="insurance-dob-container">
          <input 
            type="text" 
            className="insurance-input-field" 
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="DD/MM/YYYY"
          />
          {dob && (
            <span className="insurance-age-display">
              {calculateAge(dob)}
            </span>
          )}
        </div>
      </div>

      <div className="insurance-form-field">
        <div className="insurance-field-label">Mobile Number</div>
        <div className="insurance-phone-input">
          <div className="insurance-country-select-container">
            <select 
              className="insurance-country-select"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="India">India</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
            </select>
            <span className="insurance-dropdown-icon">▼</span>
          </div>
          <div className="insurance-phone-code">+91</div>
          <input 
            type="text" 
            className="insurance-phone-number" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your 10 digit mobile number"
          />
        </div>
      </div>

      <button className="insurance-view-plans-btn">
        View Plans
      </button>

      <div className="insurance-certified-section">
        <span className="insurance-certified-icon">🛡️</span>
        <span className="insurance-certified-text">Only certified Policybazaar expert will assist you</span>
      </div>

      <div className="insurance-whatsapp-section">
        <span className="insurance-whatsapp-icon">📱</span>
        <span className="insurance-whatsapp-text">Get updates on WhatsApp</span>
        <label className="insurance-toggle-switch">
          <input 
            type="checkbox" 
            className="insurance-toggle-input"
            checked={whatsappUpdates}
            onChange={() => setWhatsappUpdates(!whatsappUpdates)}
          />
          <span className="insurance-toggle-slider"></span>
        </label>
      </div>

      <div className="insurance-disclaimer">
        By clicking, you agree to our <a href="#" className="insurance-link">Privacy policy</a>, <a href="#" className="insurance-link">Terms of Use</a> & <a href="#" className="insurance-link">Disclaimers</a>
      </div>

      <div className="insurance-footer">
        <div className="insurance-company-info">
          <div className="insurance-company-title">Policybazaar is one of <span className="insurance-highlight">India's leading digital</span></div>
          <div className="insurance-company-subtitle">insurance platform</div>
        </div>

        <div className="insurance-rating">
          <div className="insurance-stars">
            <span className="insurance-star insurance-filled">★</span>
            <span className="insurance-star insurance-filled">★</span>
            <span className="insurance-star insurance-filled">★</span>
            <span className="insurance-star insurance-filled">★</span>
            <span className="insurance-star insurance-half-filled">★</span>
          </div>
        </div>

        <div className="insurance-statistics">
          <div className="insurance-stat">
            <div className="insurance-stat-value">9.7 <span className="insurance-stat-unit">Crore</span></div>
            <div className="insurance-stat-label">Registered Consumers</div>
          </div>
          <div className="insurance-stat">
            <div className="insurance-stat-value">51</div>
            <div className="insurance-stat-label">Insurance Partners</div>
          </div>
          <div className="insurance-stat">
            <div className="insurance-stat-value">4.9 <span className="insurance-stat-unit">Crore</span></div>
            <div className="insurance-stat-label">Policies Sold</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermLifeInsuranceForm;