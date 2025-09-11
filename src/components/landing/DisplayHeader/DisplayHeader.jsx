import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useStars } from '../../../hooks/useStars';
// import ikon telepon
import phone from '../../../assets/common/phone.svg';
import LogoImg from '../../../assets/logo.svg';
import './DisplayHeader.css';

const DisplayHeader = ({ activeItem }) => {
  const starCountRef = useRef(null);
  const stars = useStars();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    if (stars && starCountRef.current) {
      gsap.fromTo(
        starCountRef.current,
        { scale: 0, width: 0, opacity: 0 },
        { scale: 1, width: '100px', opacity: 1, duration: 0.8, ease: 'back.out(1)' }
      );
    }
  }, [stars]);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img
            src={LogoImg}
            alt="Logo"
            style={{ width: '200px', height: '200px', cursor: 'pointer' }}
          />
        </Link>

        {/* Hamburger untuk mobile */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Menu desktop */}
        <nav className="landing-nav-items">
          <Link className={`nav-link ${activeItem === 'home' ? 'active-link' : ''}`} to="/">Home</Link>
          <Link className={`nav-link ${activeItem === 'about' ? 'active-link' : ''}`} to="/about">About</Link>
          <Link className={`nav-link ${activeItem === 'achievements' ? 'active-link' : ''}`} to="/achievements">Achievements</Link>
          <Link className={`nav-link ${activeItem === 'gallery' ? 'active-link' : ''}`} to="/gallery">Gallery</Link>
          <button
            className="cta-button"
            onClick={() => window.open('tel:+628123456789', '_blank')}
          >
            Contact
            <span ref={starCountRef} style={{ opacity: 0 }}>
              <img src={phone} alt="Phone Icon" style={{ width: '20px', height: '20px', marginLeft: '4px' }} />
            </span>
          </button>
        </nav>
      </div>

      {/* Menu mobile overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <nav className="mobile-nav">
            <Link className="nav-link" to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link className="nav-link" to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link className="nav-link" to="/achievements" onClick={() => setMobileMenuOpen(false)}>Achievements</Link>
            <Link className="nav-link" to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <button
              className="cta-button mobile-contact"
              onClick={() => window.open('https://wa.me/6289530696926?text=Halo Cektadent!', '_blank')}
            >
              Contact
              
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default DisplayHeader;
