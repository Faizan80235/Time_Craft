import React from 'react';
import manImage from '../Assest/image/AT-black-push-left.avif';
import promoVideo from '../Assest/Video/movie.webm'; // or use a GIF or animated image
import productImg from '../Assest/image/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22010412101002-ceac31.avif';

const ProductFeatureSection = () => {
  return (
    <div className="container-fluid py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">

          {/* Left: Man Wearing Watch Image */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <img
              src={manImage}
              alt="Man Wearing Watch"
              className="img-fluid"
              style={{ maxHeight: '600px', objectFit: 'cover' }}
            />
          </div>

          {/* Right: Video + Product Info + Controls */}
          <div className="col-lg-6">
            {/* Top Video */}
            <div className="mb-4">
              <video
                src={promoVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-100 rounded shadow"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
            </div>

            {/* Watch Info */}
            <div className="d-flex align-items-center mb-3">
              <img
                src={productImg}
                alt="Omega Seamaster"
                className="img-fluid"
                style={{ maxWidth: '100px', marginRight: '20px' }}
              />
              <div>
                <h6 className="text-uppercase fw-bold mb-1">
                  Seamaster Aqua Terra 150M
                </h6>
                <p className="mb-1 text-muted" style={{ fontSize: '0.9rem' }}>
                  41 mm, steel on steel
                </p>
                <a href="#" className="text-decoration-underline text-dark" style={{ fontSize: '0.9rem' }}>
                  Details
                </a>
              </div>
            </div>

            {/* Arrows + Pagination */}
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-dark me-2" aria-label="Previous">
                &#8592;
              </button>
              <button className="btn btn-outline-dark me-3" aria-label="Next">
                &#8594;
              </button>
              <span style={{ fontSize: '0.9rem' }}>1 / 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatureSection;
