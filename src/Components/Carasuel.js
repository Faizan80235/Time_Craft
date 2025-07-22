import React from 'react';
import image from "../Assest/image/pexels-ferarcosn-190819.jpg";
import image2 from "../Assest/image/pexels-joey-nguy-n-1056657-2113994.jpg";
import image3 from "../Assest/image/pexels-pixabay-364822.jpg";

const WatchCarousel = () => {
  return (
    <div
      id="watchCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ width: '100%' }} // Full width container
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#watchCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#watchCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#watchCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner rounded shadow-sm">
        <div className="carousel-item active">
          <img
            src={image}
            className="d-block w-100"
            alt="Watch 1"
            style={{ height: '450px', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>Classic Chronograph</h5>
            <p>Elegant stainless steel watch with precision quartz movement and a durable leather strap. Perfect for everyday sophistication.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={image2}
            className="d-block w-100"
            alt="Watch 2"
            style={{ height: '450px', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>Modern Minimalist</h5>
            <p>Sleek design with a clean dial and slim profile. Features a silver mesh band and water resistance up to 50 meters.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={image3}
            className="d-block w-100"
            alt="Watch 3"
            style={{ height: '450px', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>Sporty Diver</h5>
            <p>Robust dive watch with luminous markers, rotating bezel, and 300m water resistance. Ideal for adventure seekers and water sports enthusiasts.</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#watchCarousel"
        data-bs-slide="prev"
        style={{ cursor: 'pointer' }} // pointer cursor on arrows
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#watchCarousel"
        data-bs-slide="next"
        style={{ cursor: 'pointer' }} // pointer cursor on arrows
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default WatchCarousel;
