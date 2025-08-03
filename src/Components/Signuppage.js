import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = ({ register }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const { name, email, password } = formData;

  if (!name || !email || !password) {
    toast.error('Please fill in all fields.');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    toast.error('Invalid email format.');
    return;
  }

  if (password.length < 8) {
    toast.error('Password must be at least 8 characters.');
    return;
  }

  setIsLoading(true);

  try {
    const response = await fetch('http://localhost:4000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.status === 201 || response.ok) {
      toast.success('Registration successful! Redirecting...');
      register(result.user || { name, email });
      // setTimeout(() => navigate('/'), 2000);
    } else {
      toast.error(result.message || 'Registration failed');
    }
  } catch (error) {
    // toast.error('Server error. Try again later.');
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg rounded-4 overflow-hidden w-100" style={{ maxWidth: '1000px' }}>
        <div className="col-md-6 d-none d-md-block p-0">
          <img src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=800&q=80" alt="Watch" className="img-fluid h-100 w-100" style={{ objectFit: 'cover' }} />
        </div>
        <div className="col-md-6 bg-white d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: '400px' }}>
            <h2 className="text-center fw-bold mb-3">Create Your Account</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Full Name" className="form-control mb-3" onChange={handleChange} value={formData.name} required disabled={isLoading} />
              <input type="email" name="email" placeholder="Email" className="form-control mb-3" onChange={handleChange} value={formData.email} required disabled={isLoading} />
              <input type="password" name="password" placeholder="Password" className="form-control mb-4" onChange={handleChange} value={formData.password} required disabled={isLoading} />
              <button type="submit" className="btn btn-success w-100" disabled={isLoading}>
                {isLoading ? 'Signing Up...' : 'Sign Up'}
              </button>
            </form>
            <p className="text-center mt-4 text-muted">Already have an account? <Link to="/Login">Login</Link></p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default SignupPage;
