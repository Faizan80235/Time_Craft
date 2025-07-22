

// export default Card;
import React from 'react'
import { useSelector } from 'react-redux'

export default function Card() {
  const product = useSelector((state) => state.product.product); // assuming your state shape

  return (
    <div>
      {product.map((info, index) => (
        <Item key={index} info={info} />
      ))}
    </div>
  );
}

function Item({ info }) {
  return (
    <div>
      <div className="col-12 mb-5">
        <div className="row align-items-center">
          {/* Watch Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div
              className="border p-3 rounded shadow-sm bg-white d-inline-block"
              style={{ maxWidth: '100%', borderColor: '#ccc' }}
            >
              <img
                src={info.image_url}
                alt={info.Product_name}
                className="img-fluid"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="col-md-6">
            <br /><br /><br /><br />
            <h5 className="text-uppercase fw-bold">{info.Product_name}</h5>
            <h3 className="mb-3">{info.model}</h3>
            <p>{info.details}</p>
            <h4 className="text-primary mt-4">€{info.price}</h4>
            <button className="btn btn-dark px-4 py-2">BUY</button>

            {/* Contact Info */}
            <div className="mt-4">
              <p><i className="bi bi-telephone"></i> {info.contact}</p>
              <p><i className="bi bi-truck"></i> Delivery</p>
              <p><i className="bi bi-shield-check"></i> Warranty</p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="container text-dark mt-4">
          <div className="col fw-bold mb-2">Overview</div>
          <p>{info.overview}</p>
        </div>
      </div>
    </div>
  );
}
