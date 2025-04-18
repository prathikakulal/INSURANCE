
import React from 'react';
import amer from '../assets/american-express.png';
import visa from '../assets/visa.png';
import paytm from '../assets/paytm1.png';
import rupay from '../assets/Rupay1.png';
import card from '../assets/card.png';
import netbanking from '../assets/netbank.webp';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="pb-footer">
      {/* Top Section */}
      <div className="footer-top-section">
        <div className="footer-column payment-methods">
          <h3 className="footer-title">Payment Methods</h3>
          <div className="payment-icons">
            <img src={amer} alt="American Express" />
            <img src={visa} alt="VISA" />
            <img src={paytm} alt="Paytm" />
            <img src={rupay} alt="RuPay" />
            <img src={netbanking} alt="NetBanking" />
            <img src={card} alt="MasterCard" />
          </div>
        </div>

        <div className="footer-column security-badge">
          <h3 className="footer-title">Secured With</h3>
          <img src="/icons/pci-dss.png" alt="PCI DSS Certified" className="security-icon" />
        </div>

        <div className="footer-column social-media">
          <h3 className="footer-title">Follow us on</h3>
          <div className="social-icons">
            <a href="#" className="social-icon-box"><img src="/icons/facebook.png" alt="Facebook" /></a>
            <a href="#" className="social-icon-box"><img src="/icons/twitter.png" alt="Twitter" /></a>
            <a href="#" className="social-icon-box"><img src="/icons/linkedin.png" alt="LinkedIn" /></a>
            <a href="#" className="social-icon-box"><img src="/icons/youtube.png" alt="YouTube" /></a>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-middle-section">
        <ul className="company-info">
          <li>Policybazaar Insurance Brokers Private Limited CIN U74999HR2014PTC050454 Registered Office - Plot No.119, Sector -44, Gurugram - 122001, Haryana Tel no. : 0124-4218302 Email ID: enquiry@policybazaar.com</li>
          <li>Policybazaar is registered as a Composite Broker | Registration No. 742, Registration Code No. IRDAI 03 797/19, Valid till 09/06/2027, License category: Composite Broker</li>
          <li>Visitors are hereby informed that their information submitted on the website may be shared with insurers. Product information is authentic and solely based on the information received from the insurers.</li>
        </ul>

        <div className="warning-box">
          <strong>BEWARE OF SPURIOUS PHONE CALLS AND FICTITIOUS / FRAUDULENT OFFERS</strong>
          <p>IRDAI or its officials do not involve in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom-section">
        <p>© Copyright 2008-2025 policybazaar.com. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;