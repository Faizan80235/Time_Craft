import React from 'react'
import image from "../Assest/image/watchmaker-at-work-stockcake.jpg"
export default function OurFeatures() {
  return (
    <div>
         <div className="container py-5">

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Authentic Brands</h5>
            <p className="text-muted">We deal in 100% authentic luxury watches from top global brands.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Curated Selection</h5>
            <p className="text-muted">Our team handpicks every model for quality, style, and value.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Customer Trust</h5>
            <p className="text-muted">Trusted by thousands of collectors and enthusiasts worldwide.</p>
          </div>
        </div>

        {/* Our Legacy Section */}
        <div className="row my-5 align-items-center">
          <div className="col-md-6 order-md-2">
            <img
              src={image}
              alt="TimeCraft legacy"
              className="img-fluid rounded shadow"
              loading="lazy"
            />
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold mb-3">Our Legacy</h4>
            <p className="text-muted">
              Founded in 2010, TimeCraft began with a simple vision — to make luxury timepieces accessible to discerning collectors around the world. 
              From humble beginnings to a global presence, our journey reflects passion, precision, and an unrelenting pursuit of excellence.
            </p>
          </div>
        </div>

     

   
          </div>
    </div>
  )
}
