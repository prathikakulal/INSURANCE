import React from 'react';
import './SupportSection.css';
import supportImage from '../assets/support-illustration.jpg'; // Replace with your actual path

const SupportSection = () => {
  return (
    <section className="support-section">
      <div className="support-container">
        <div className="support-text">
          <h2>
            Have a question? <br />
            <span>Here to help.</span>
          </h2>
          <div className="underline"></div>
          <p>
            Our friendly customer support team is your extended family. Speak your heart out. They listen with undivided attention to resolve your concerns. Give us a call, request a callback or drop us an email, we’re here to help.
          </p>

          <div className="contact-box">
            <div className="icon">📧</div>
            <div className="info">
              <p className="label">General Enquiries</p>
              <p className="data">support@myservice.in</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="icon">🎧</div>
            <div className="info">
              <p className="label">Customer Sales Enquiries</p>
              <p className="data">+91 98765 43210</p>
            </div>
          </div>
        </div>

        <div className="support-image">
          <img src={supportImage} alt="Support Illustration" />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
