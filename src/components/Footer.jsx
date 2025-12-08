import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Px Family. Rise of Kingdoms.</p>
        <p className="footer-motto">"Nous sommes le Miracle."</p>
      </div>
      <style>{`
        .footer {
          background: var(--color-void-dark);
          padding: var(--spacing-md);
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--color-text-muted);
        }
        
        .footer-motto {
          color: var(--color-phoenix-gold);
          font-family: var(--font-heading);
          margin-top: var(--spacing-xs);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
