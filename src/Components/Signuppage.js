import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg rounded-4 overflow-hidden w-100" style={{ maxWidth: '1000px' }}>
        {/* Left Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=800&q=80"
            alt="Watch"
            className="img-fluid h-100 w-100"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Right Form */}
        <div className="col-md-6 bg-white d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: '400px' }}>
            <h2 className="text-center fw-bold mb-3">Create Your Account</h2>
            <p className="text-center text-muted mb-4">Join TimeCraft to experience luxury</p>

            <form>
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input type="text" className="form-control form-control-lg rounded-3" placeholder="John Doe" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email address</label>
                <input type="email" className="form-control form-control-lg rounded-3" placeholder="you@example.com" />
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold">Password</label>
                <input type="password" className="form-control form-control-lg rounded-3" placeholder="Create a password" />
              </div>
              <button type="submit" className="btn btn-success w-100 py-2 fw-semibold rounded-3">
                Sign Up
              </button>
            </form>

            <p className="text-center mt-4 text-muted">
              Already have an account? <Link to="/login" className="text-decoration-none">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
