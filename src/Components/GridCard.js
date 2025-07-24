import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
export default function GridCard() {
  const { id } = useParams();
  const productList = useSelector((state) => state.GridCards);
  const product = productList.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="container py-5">No product found for ID: {id}</div>;
  }

  return (
    <div>
   <Header></Header>
    <div className="container py-5">
      <div className="row shadow-lg bg-white rounded p-4">
        {/* Image Section */}
        <div className="col-md-6 text-center mb-4">
          <img
            src={product.image_url}
            alt={product.Product_name}
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>

        {/* Product Info Section */}
        <div className="col-md-6">
          <h2 className="fw-bold text-uppercase">{product.Product_name}</h2>
          {/* <h5 className="text-muted">{product.model}</h5> */}

          <hr />

          <p className="text-secondary mb-3">{product.overview}</p>

          {/* <h4 className="text-primary mb-3">${product.price}</h4> */}

          <button className="btn btn-dark btn-lg px-4 py-2 mb-3">Buy Now</button>

          {/* Contact & Logistics Info */}
          <ul className="list-unstyled mt-3">
            <li><i className="bi bi-telephone-fill me-2 text-dark"></i>{product.contact}</li>
            <li><i className="bi bi-truck me-2 text-dark"></i>Free Delivery Available</li>
            <li><i className="bi bi-shield-check me-2 text-dark"></i>1 Year Warranty</li>
          </ul>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="row mt-5">
        <div className="col-12">
          <h4 className="fw-bold mb-3 border-bottom pb-2">Specifications</h4>
          <div className="row">
            <div className="col-md-4 mb-3">
              <strong>Battery Timing:</strong> Up to 4 days (regular use); slightly less with frequent NFC payments.
            </div>
            <div className="col-md-4 mb-3">
              <strong>Charging Time:</strong> {product.charging_time}
            </div>
            <div className="col-md-4 mb-3">
              <strong>Sunlight Visibility:</strong> {product.sunlight_visibility}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="row mt-4">
        <div className="col-12">
          <h4 className="fw-bold mb-3 border-bottom pb-2">Description</h4>
          <p className="text-secondary">{product.description}</p>
        </div>
      </div>

      {/* Overview */}
      <div className="row mt-4">
        <div className="col-12">
          <h4 className="fw-bold mb-3 border-bottom pb-2">Overview</h4>
          <p className="text-secondary">{product.overview}</p>
        </div>
      </div>
    </div>

    <Footer></Footer>
    </div>

  );
}
