import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a id='logo' href='/'>Telus E-Cart</a>
      </div>
      <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>      
        <Link to='/home'>Home</Link>
        <Link to='/category'>Category</Link>
        <Link to='/about'>About</Link>
        <Link to='/service'>Service</Link>
        <Link to='/contact'>Contact</Link>
        {/* <Link to='/vegtablesfruits'>Vegtablesfruits</Link> */}
        <Link to='/register'>
          <button>Sign Up</button>
        </Link>
      </div>
      <div className='mobile-toggle' onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;