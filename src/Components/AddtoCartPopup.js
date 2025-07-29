import React from 'react';
import '../Styles/Addtocart.css';

const AddToCartPopup = ({ show, onClose, product }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="popup-content">
          <div className="left-section">
            <h2 className="popup-title">Item Added to Cart 🎉</h2>
            <p className="popup-subtitle">You just added <strong>{product.Product_name}</strong> to your cart!</p>
            <button className="reveal-btn" onClick={onClose}>Continue Shopping</button>
          </div>

          <div className="right-section">
            <img src={product.image_url} alt={product.Product_name} className="popup-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPopup;
