import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row">

          {/* Brand Name */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-4">
              TIME<span className="text-warning">CRAFT</span>
            </h5>
            <p>
              Discover premium timepieces that blend craftsmanship, design, and timeless elegance.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Explore</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Collections</a></li>
              <li><a href="#" className="text-white text-decoration-none">Luxury</a></li>
              <li><a href="#" className="text-white text-decoration-none">About</a></li>
              <Link to="/privacy-policy" style={{ color: 'white',textDecoration:'none' }}>Privacy Policy</Link>
              <br></br>
<Link to="/return-policy" style={{ color: 'white',textDecoration:'none'}}>Return Policy</Link>

            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
            <p><i className="bi bi-geo-alt me-2"></i> New York, NY 10012, US</p>
            <p><i className="bi bi-envelope me-2"></i> info@timecraft.com</p>
            <p><i className="bi bi-phone me-2"></i> +1 234 567 890</p>
          </div>

          {/* Socials */}
          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Follow us</h6>
            <div>
              <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="text-white"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4 border-top pt-3">
        <p className="mb-0">&copy; {new Date().getFullYear()} TIMECRAFT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
