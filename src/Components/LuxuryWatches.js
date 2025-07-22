import React from 'react';
import { useSelector } from 'react-redux';

export default function LuxryWatches() {
const product = useSelector((state) => state.Luxrydata);
console.log('Product array from redux:', product);
console.log('Total products:', product.length);
const length=product.length


  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Popular Timepieces</h2>
      <h2 className=" fw-bold mb-5">All Product ({length})</h2>
      <div className="row g-4">
        {product.map((info, index) => (
          <Item key={index} info={info} />
        ))}
      </div>
    </div>
  );
}

function Item({ info }) {
  return (
    <div className="col-sm-6 col-lg-3 mb-4">
      <div className="product-card inward-effect h-100">
        <img
          src={info.image}
          className="card-img-top"
          alt={info.name}
        />
        <div className="card-body text-center">
          <h6 className="card-title fw-bold">{info.name}</h6>
          <p className="text-muted mb-2">{info.price}</p>
          <a href="#" className="btn btn-outline-dark btn-sm">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
