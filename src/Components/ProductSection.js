import React from 'react';

import '../Styles/style.css';
import { useSelector } from 'react-redux';

const PopularProducts = () => {
const product=useSelector((state)=>state.popularproduct)

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Popular Timepieces</h2>
      <div className="row g-4">
        {product.map((product) => (
          <div className="col-sm-6 col-lg-3" key={product.id}>
            <div className="product-card inward-effect">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h6 className="card-title fw-bold">{product.name}</h6>
                <p className="text-muted mb-2">{product.price}</p>
                <a href="#" className="btn btn-outline-dark btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
