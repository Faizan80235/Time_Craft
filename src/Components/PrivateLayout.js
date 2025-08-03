import React from 'react';
import Navbar from './Header';
import { Outlet } from 'react-router-dom';

const PrivateLayout = ({ user, logout }) => {
  return (
    <>
      <Navbar user={user} logout={logout} />
      <main className="container mt-4">
        <Outlet />
      </main>
    </>
  );
};

export default PrivateLayout;
