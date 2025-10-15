import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav
      className="navbar"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        borderBottom: '1px solid #ccc',
      }}
    >
      <h2>Primetrade App</h2>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {user && user.role === 'admin' && <Link to="/admin">Admin</Link>}
        {user && <Link to="/dashboard">Dashboard</Link>}

        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            {location.pathname === '/login' && (
              <Link to="/register">Register</Link>
            )}
            {location.pathname === '/register' && (
              <Link to="/login">Login</Link>
            )}
            {location.pathname !== '/login' &&
              location.pathname !== '/register' && (
                <Link to="/login">Login</Link>
              )}
          </>
        )}
      </div>
    </nav>
  );
}
