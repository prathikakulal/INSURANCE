

import React, { useState, useEffect } from 'react';
import './Home.css';
import term from '../assets/term.png';
import healthcare from '../assets/healthcare.png';
import family from '../assets/family.png';
import compensation from '../assets/compensation.png';
import aarogya from '../assets/aarogya.png';
import healthcareinsurance from '../assets/health-insurance.png';
import OPD from '../assets/OPD.png';
import cancer from '../assets/cancer_insurance.png';
import WhyChooseUs from './WhyChooseUs'; 
import PBAdvantage from './PBAdvantage';
import TestimonialsCarousel from './TestimonialsCarousel';
import SupportSection from './SupportSection';
import Footer from '../components/Footer';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Term Life Insurance",
      amount: "₹11 Crore",
      price: "starting @ ₹485*/month"
    },
    {
      title: "Health Insurance",
      amount: "₹5 Lakh Coverage",
      price: "starting @ ₹299*/month"
    },
    {
      title: "Car Insurance",
      amount: "Zero Depreciation",
      price: "starting @ ₹1,999*/year"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="policybazaar-container">
      {/* Top Navigation Bar */}
      <div className="top-nav">
        <div className="logo">policybazaar</div>
        <div className="nav-links">
          <span className="nav-item">Insurance Products <span className="checkmark">✔</span></span>
          <span className="nav-item">Renew Your Policy <span className="checkmark">✔</span></span>
          <span className="nav-item">Claim <span className="checkmark">✔</span></span>
          <span className="nav-item">Support <span className="checkmark">✔</span></span>
          <span className="nav-item">Talk to Expert</span>
          <button className="sign-in-btn">Sign in</button>
        </div>
      </div>

      {/* Hero Section with Carousel */}
      <div className="insurance-hero-container">
        {/* Left side - Message section */}
        <div className="message-section">
          <h1>Let's find you the Best Insurance</h1>
          <div className="benefits">
            <p>51 insurers offering lowest prices</p>
            <p>Quick, easy & hassle free</p>
          </div>
        </div>

        {/* Right side - Carousel section */}
        <div className="carousel-section">
          <div className="carousel-container">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <h3>{slide.title}</h3>
                <div className="amount">{slide.amount}</div>
                <div className="price">{slide.price}</div>
                <button className="view-plans-btn">View plans</button>
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Insurance Categories */}
      <div className="insurance-categories">
        <div className="category">
        {/* <img src={term} alt="term" className="icon" />
        Term Life Insurance</div> */}
        <div className="card-box">
          <div className="label">Term Life Insurance</div>
          <div className="icon-container">
            <img src={term} alt="Term Life Insurance" className="icon" />
          </div>
          </div>
    
      </div>


        {/* <div className="category">Health Insurance</div> */}
            <div className="category">
            <div className="card-box">
            <div className="label">Health Insurance</div>
              <div className="icon-container">
                <img src={healthcare} alt="Health Insurance" className="icon" />
              </div>
            </div>
            </div>


            <div className="category">
            <div className="card-box">
            <div className="label">Family Health Insurance</div>
              <div className="icon-container">
                <img src={family} alt="Family Health Insurance" className="icon" />
              </div>
            </div>
            </div>


            <div className="category">
            <div className="card-box">
            <div className="label">Personal Accident</div>
              <div className="icon-container">
                <img src={compensation} alt="Personal Accident" className="icon" />
              </div>
            </div>
            </div>

            <div className="category">
            <div className="card-box">
            <div className="label">Aarogya Sanjeevini</div>
              <div className="icon-container">
                <img src={aarogya} alt="Day 1 Coverage" className="icon" />
              </div>
            </div>
            </div>

            <div className="category">
            <div className="card-box">
            <div className="label">1 Cr Health Cover</div>
              <div className="icon-container">
                <img src={healthcareinsurance} alt="1 Cr Health Insurance" className="icon" />
              </div>
            </div>
            </div>
            

            <div className="category">
            <div className="card-box">
            <div className="label">OPD</div>
              <div className="icon-container">
                <img src={OPD} alt="OPD" className="icon" />
              </div>
            </div>
            </div>

            <div className="category">
            <div className="card-box">
            <div className="label">Cancer Insurance</div>
              <div className="icon-container">
                <img src={cancer} alt="Cancer Insurance" className="icon" />
              </div>
            </div>
            </div>
      </div>

      <button className="view-all-btn">View all products</button>
      <WhyChooseUs />
      <PBAdvantage />
      <TestimonialsCarousel />
      <SupportSection />

     
      {/* Also Buy Section */}
      <div className="also-buy-section">
        <h3>ALSO BUY</h3>
        <div className="also-buy-items">
          <div className="also-buy-item">
            <span className="plus">+</span> Investment <span className="item-name">LIC Plans</span>
          </div>
          <div className="also-buy-item">
            <span className="plus">+</span> Term Life Return of Premium
          </div>
          <div className="also-buy-item">
            <span className="plus">+</span> Term He Life Insurance for Housewives
          </div>
          <div className="also-buy-item">
            <span className="plus">+</span> Health Insurance Day 1 Coverage
          </div>
          <div className="also-buy-item">
            <span className="plus">+</span> Health Insurance 1 Cr Health Insurance
          </div>
          <div className="also-buy-item">
            <span className="plus">+</span> Health Insurance Personal Accident
          </div>
          <div className="also-buy-item">
            <span className="plus">+</span> Motor Insurance Commercial Vehicles
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Home;