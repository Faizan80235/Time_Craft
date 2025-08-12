import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navi = useSelector(state => state.link);
  const cart = useSelector(state => state.addtocart);
  const user = useSelector(state => state.user);
  const length = cart?.length || 0;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-uppercase" to="/">
          <span style={{ color: '#d4af37' }}>{navi.logo}</span>
          {navi.Logoes}
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/">{navi.Home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/About">{navi.About}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/Watches/Collection">{navi.Collection}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/Collection/Luxry">{navi.luxry}</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link position-relative text-dark fw-semibold" to="/AddtoCart">
                <i className="bi bi-cart3 fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.7rem' }}>
                  {length}
                </span>
              </Link>
            </li>

            {/* User Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle text-dark fw-semibold"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle fs-5"></i>{' '}
                {user ? user.username : 'Account'}
              </span>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                {!user ? (
                  <>
                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                    <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
                  </>
                ) : (
                  <>
                    <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="/profile/edit">Edit Profile</Link></li>
                    <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
