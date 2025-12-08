import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">Px Family</Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
          <Link to="/team" className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}>Équipe</Link>
          <Link to="/leaders" className={`nav-link ${location.pathname === '/leaders' ? 'active' : ''}`}>Dirigeants</Link>
          <Link to="/family" className={`nav-link ${location.pathname === '/family' ? 'active' : ''}`}>Famille</Link>
          <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>Galerie</Link>
          <Link to="/thanks" className={`nav-link ${location.pathname === '/thanks' ? 'active' : ''}`}>Remerciements</Link>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 1.5rem 2rem;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(15, 5, 24, 0.95);
          padding: 1rem 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-phoenix-gold);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: var(--color-text-light);
          font-weight: 600;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-phoenix-red);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
