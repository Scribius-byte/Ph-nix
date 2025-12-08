import React from 'react';
import headerLogo from '../assets/header_logo.png';
import emblem from '../assets/emblem.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={headerLogo} alt="Phoenix Family" className="hero-logo" />
        <h2 className="hero-subtitle">Renaître de ses Cendres</h2>
        <div className="hero-emblem-container">
          <img src={emblem} alt="Phoenix Emblem" className="hero-emblem" />
        </div>
      </div>

      <style>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, var(--color-void-purple), var(--color-void-dark));
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://www.transparenttextures.com/patterns/stardust.png');
          opacity: 0.3;
          animation: twinkle 10s infinite alternate;
        }

        .hero-content {
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-md);
        }

        .hero-logo {
          max-width: 80%;
          height: auto;
          filter: drop-shadow(0 0 20px rgba(229, 57, 53, 0.5));
          animation: float 6s ease-in-out infinite;
        }

        .hero-subtitle {
          font-size: 2rem;
          color: var(--color-phoenix-gold);
          text-transform: uppercase;
          letter-spacing: 0.5rem;
          margin-top: -1rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .hero-emblem {
            width: 150px;
            height: auto;
            opacity: 0.8;
            filter: drop-shadow(0 0 10px var(--color-phoenix-orange));
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
