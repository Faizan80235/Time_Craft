import React from 'react';
import personImg from '../Assest/image/Person.jpg';
import watchImg from '../Assest/image/image1.jpg';

const Section = () => {
  return (
    <div className="container-fluid py-5 bg-white text-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Person Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={personImg}
              alt="Man Wearing Watch"
              className="img-fluid rounded"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>

          {/* Right: Watch Image + Info + Navigation */}
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-4">
              <img
                src={watchImg}
                alt="Speedmaster Moonwatch Professional"
                className="img-fluid"
                style={{ maxWidth: '150px', marginRight: '20px' }}
              />
              <div>
                <h6 className="text-uppercase fw-bold mb-1 text-dark" style={{ fontSize: '0.9rem' }}>
                  Speedmaster Moonwatch Professional
                </h6>
                <p className="mb-1 text-secondary" style={{ fontSize: '0.85rem' }}>
                  42 mm, steel on steel
                </p>
                <a href="#" className="text-warning text-decoration-underline" style={{ fontSize: '0.85rem' }}>
                  Details
                </a>
              </div>
            </div>

            {/* Navigation Arrows and Pagination */}
            <div className="d-flex align-items-center mb-4">
              <button type="button" className="btn btn-outline-light me-2" aria-label="Previous">
                &#8592;
              </button>
              <button type="button" className="btn btn-outline-light me-3" aria-label="Next">
                &#8594;
              </button>
              <div style={{ fontSize: '0.9rem' }}>
                1 / 3
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-warning" style={{ fontWeight: '600', letterSpacing: '1.5px' }}>
                Aaron Taylor-Johnson <br /> Wears a Moonwatch
              </h3>
              <p className="text-dark" style={{ fontSize: '1rem' }}>
                The British actor and OMEGA brand ambassador wears a Speedmaster Moonwatch with white dial. 
                With its contrasting black details and glossy lacquered finish – it's the ideal timepiece for a modern leading man.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
