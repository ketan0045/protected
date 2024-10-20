import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');  
    navigate('/');  
  };

  return (
    <header style={{ padding: '10px', backgroundColor: '#f8f9fa' }}>
      <nav>
        <button onClick={handleLogout} style={{marginLeft:"80%"}}>Logout</button>
      </nav>
    </header>
  );
};

export default Header;
