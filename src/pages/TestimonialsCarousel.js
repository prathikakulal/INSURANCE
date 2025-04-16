import React, { useState } from 'react';
import './TestimonialsCarousel.css';

const testimonialsData = [
  {
    name: "Shraddha Sharma",
    message: "Very simple to use, friendly website"
  },
  {
    name: "Prabhat Yadav",
    message: "Thanking you very much for your support for getting our policy quickly, I would appreciate your work."
  },
  {
    name: "Neha Jain",
    message: "You are doing a great job. Proud to be a customer of Policybazaar."
  },
  {
    name: "Amit Verma",
    message: "The process was super smooth and hassle-free!"
  },
  {
    name: "Sakshi Mehra",
    message: "I got my insurance done within minutes. Great service!"
  },
  {
    name: "Rahul Singh",
    message: "Clear and quick responses. I recommend them to everyone."
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(testimonialsData.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const visibleTestimonials = testimonialsData.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <h2>What Our Customers <br /> Are Saying</h2>
        <div className="nav-arrows">
          <button onClick={handlePrev}>&larr;</button>
          <button onClick={handleNext}>&rarr;</button>
        </div>
      </div>
        <br></br>
        <br></br>
        <br></br>
      <div className="testimonial-cards">
        {visibleTestimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <h4>{testimonial.name}</h4>
            <div className="quote-icon">“</div>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </div>

      <div className="dots-container">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
