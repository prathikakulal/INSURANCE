import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="left-section">
        <h2>
          What makes <span className="highlight">Policybazaar</span> one of <br />
          <span className="highlight">India's favourite places</span> to <br />
          <span className="highlight">buy insurance</span>?
        </h2>
      </div>

      <div className="right-section">
        <div className="info-card purple">
          <div className="emoji">🎉</div>
          <h3>Over 9 million</h3>
          <p>customers trust us & have bought their insurance on Policybazaar</p>
        </div>

        <div className="info-card blue">
          <div className="emoji">🔍</div>
          <h3>51 insurers</h3>
          <p>partnered with us so that you can compare easily & transparently</p>
        </div>

        <div className="info-card green">
          <div className="emoji">😎</div>
          <h3>Great Price</h3>
          <p>for all kinds of insurance plans available online</p>
        </div>

        <div className="info-card yellow">
          <div className="emoji">👩🏻‍💼</div>
          <h3>Claims</h3>
          <p>support built in with every policy for help, when you need it the most</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
