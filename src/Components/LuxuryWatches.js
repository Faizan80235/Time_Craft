import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function LuxryWatches() {
  const product = useSelector((state) => state.Luxrydata);
  const length = product.length;

  console.log('Product array from redux:', product);
  console.log('Total products:', length);

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Popular Timepieces</h2>
      <h4 className="fw-semibold mb-5">All Products ({length})</h4>

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
    <div className="col-sm-6 col-lg-3">
      <div className="card h-100 shadow-sm p-3 rounded bg-white">
        <img
          src={info.image}
          className="card-img-top img-fluid mb-3"
          alt={info.Product_name}
          style={{ objectFit: 'cover', height: '200px', borderRadius: '0.5rem' }}
        />
        <div className="card-body text-center px-2">
          <h6 className="card-title fw-bold mb-2">{info.Product_name}</h6>
          <p className="text-muted mb-3">${info.price}</p>
          <Link to={`/detail/${info.id}`} className="btn btn-outline-dark btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
