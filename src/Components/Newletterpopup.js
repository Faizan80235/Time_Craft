import React, { useEffect, useState } from 'react';
import '../Styles/NewsletterPopup.css';
import image from "../Assest/image/image31.jpg"
const NewsletterPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('newsletter_shown');
    if (!alreadyShown) {
      setTimeout(() => {
        setShow(true);
        sessionStorage.setItem('newsletter_shown', 'true');
      }, 1500); // 1.5 second delay after page load
    }
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={handleClose}>×</button>

        <div className="popup-content">
          <div className="left-section">
            <h2 className="popup-title">Get 10% Off Your First Order 🎉</h2>
            <p className="popup-subtitle">Subscribe to our newsletter and never miss an update!</p>

            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="right-section">
            <img
              src={image}
              alt="Newsletter Promo"
              className="popup-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
