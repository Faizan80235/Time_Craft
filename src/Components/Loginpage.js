import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../Assest/image/pexels-pixabay-364822.jpg";

const LoginPage = ({ login }) => {
  const [formdata, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata)
      });

      const data = await res.json();
      
      if (res.ok ) {
        // login(data.user);  // setUser from Routing
        toast.success("Login successful!");
        navigate("/dashboard");  // redirect after login
      } else {
        toast.error(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg rounded-4 overflow-hidden w-100" style={{ maxWidth: '1000px' }}>
        <div className="col-md-6 d-none d-md-block p-0">
          <img src={image} alt="Watch" className="img-fluid h-100 w-100" style={{ objectFit: 'cover' }} />
        </div>
        <div className="col-md-6 bg-white d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: '400px' }}>
            <h2 className="text-center fw-bold mb-3">Welcome Back</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mb-3"
                onChange={handleChange}
                value={formdata.email}
                required
                disabled={isLoading}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control mb-4"
                onChange={handleChange}
                value={formdata.password}
                required
                disabled={isLoading}
              />
              <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            <p className="text-center mt-4 text-muted">
              Don’t have an account? <Link to="/Signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default LoginPage;
