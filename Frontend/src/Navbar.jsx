import React from 'react';
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
  const gradientBackground = {
    background: 'linear-gradient(to bottom, rgba(105, 20, 87, 0.3), rgba(75, 15, 85, 0.2) 50%, rgba(70, 0, 80, 0.3)), #893487',
    backgroundSize: 'cover',
    backgroundColor: '#893487',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={gradientBackground}>
      <div className="container">
        <a className="navbar-brand" href="/" style={{ fontWeight: '700' }}>Branding  |  Collaboration Brand</a>
        <div className="ml-auto">
          <FaUser style={{ fontSize: '30px', color: '#000', border: '1px solid #fff', borderRadius: '50%', padding: '9%', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;