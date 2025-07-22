import React from 'react'

export default function AboutSection() {
  return (
    <div>
          <div className="container py-5">

        {/* About Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="LuxuryTime - Fine Watches"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">About Our Timepieces</h2>
            <p className="text-muted">
              At LuxuryTime, we are passionate about bringing you the world’s most iconic and finely crafted watches.
              Our mission is to curate a timeless collection that reflects sophistication, tradition, and excellence.
            </p>
            <p className="text-muted">
              With years of experience in the horology world, our team selects only authentic, high-end watches that are
              both stylish and valuable. Whether you're a first-time buyer or a seasoned collector, we’re here to help
              you find the perfect timepiece.
            </p>
            <a href="/contact" className="btn btn-dark mt-3">Contact Us</a>
          </div>
        </div>
</div>
    </div>
  )
}
