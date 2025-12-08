import React from 'react';
import reineImg from '../assets/images/reine.jpg';
import premierMinistreImg from '../assets/images/premier-ministre.jpg';
import orvalImg from '../assets/images/orval_new.png';
import conseillerImg from '../assets/images/conseiller.jpg';

const Leaders = () => {
  return (
    <div className="leaders-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Les Dirigeants</h1>
          <p className="page-subtitle">Les Piliers du Phénix</p>
        </header>

        <section className="leader-section">
          <div className="leader-content">
            <h2>Sirkesa</h2>
            <p>
              Présentons nos Membres de la direction. Pour commencer, La Sublime, L'Irrésistible, La Raffinée, La Kiffante, L'Excellentissime, La Souriante, L'Adorable ... <strong>Sirkesa</strong> !
            </p>
            <p>
              Dirigeante Acharnée, douce et toujours à l'écoute de ses membres. Elle est toujours disponible en cas de problèmes et se bat en première ligne pour les profits de la famille.
              Toujours devant même au risque de se faire raser, elle se tient droite et digne en toutes circonstances !
            </p>
            <p className="quote">Citation: "Tokyo, Hadès, revenez là"</p>
          </div>
          <div className="leader-image-container">
            <img src={reineImg} alt="Sirkesa" className="leader-image" />
          </div>
        </section>

        <section className="leader-section reverse">
          <div className="leader-content">
            <h2>Siphas</h2>
            <p>
              On ne le présente plus, voici Le Serein, L'Incroyable, Le Pacifique, L'Héroïque, L'Adroit, Le Solide ... <strong>Siphas</strong> !
            </p>
            <p>
              Diplomate et Grand Conseiller, cet homme incroyable est notre pilier de la diplomatie intra et inter Royaume.
              Tout problème peut être résolu tant que Siphas est là.
            </p>
            <p className="quote">Citation: "Tout va bien, JE SUIS LÀ"</p>
          </div>
          <div className="leader-image-container">
            <img src={premierMinistreImg} alt="Siphas" className="leader-image" />
            <img src={conseillerImg} alt="Conseiller" className="leader-image secondary" />
          </div>
        </section>

        <section className="leader-section">
          <div className="leader-content">
            <h2>Orval</h2>
            <p>
              Notre chef de cœur, celui qu'on connaît autant que la Bière, L'Observateur, Le Raisonnable, Le Valeureux, L'Accueillant, Le Lumineux... <strong>Orval</strong> !
            </p>
            <p>
              Notre chef au grand cœur, co-fondateur de la famille et Homme de valeur, est un pilier de la famille. Grand Orateur, il résout les conflits avec sa verve digne de Molière et Shakespeare.
              Comme le chantait Cyrano de Bergerac "Toudoum Toudoum Toudoum" (à moins que ce soit le générique de Kaamelott je m'en souviens plus).
            </p>
            <p className="quote">Citation: "On me dit que je suis nul en diplomatie, moi je dis juste les choses comme elles sont"</p>
          </div>
          <div className="leader-image-container">
            <img src={orvalImg} alt="Orval" className="leader-image" />
          </div>
        </section>
      </div>

      <style>{`
        .leaders-page {
          padding-top: 100px;
          padding-bottom: var(--spacing-xl);
          background: var(--color-void-dark);
          min-height: 100vh;
          color: var(--color-text-primary);
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 var(--spacing-md);
        }

        .page-header {
          text-align: center;
          margin-bottom: var(--spacing-xxl);
        }

        .page-title {
          font-size: 3rem;
          color: var(--color-phoenix-gold);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: var(--spacing-sm);
        }

        .page-subtitle {
          color: var(--color-text-muted);
          font-size: 1.2rem;
        }

        .leader-section {
          display: flex;
          align-items: center;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xxl);
          background: rgba(255, 255, 255, 0.02);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255, 215, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .leader-section:hover {
            transform: translateY(-5px);
            border-color: rgba(255, 215, 0, 0.3);
            background: rgba(255, 255, 255, 0.05);
        }

        .leader-section.reverse {
          flex-direction: row-reverse;
        }

        .leader-content {
          flex: 1;
        }

        .leader-content h2 {
          color: var(--color-phoenix-red);
          font-size: 2.2rem;
          margin-bottom: var(--spacing-md);
          font-family: var(--font-heading);
        }

        .leader-content p {
          margin-bottom: var(--spacing-md);
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--color-text-light);
        }

        .leader-content .quote {
            font-style: italic;
            color: var(--color-phoenix-gold);
            font-weight: 500;
            border-left: 3px solid var(--color-phoenix-red);
            padding-left: var(--spacing-md);
        }

        .leader-image-container {
          flex: 0 0 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .leader-image {
          width: 100%;
          border-radius: var(--radius-md);
          box-shadow: 0 5px 15px rgba(0,0,0,0.5);
          border: 1px solid rgba(229, 57, 53, 0.3);
        }
        
        .leader-image.secondary {
            width: 80%;
            margin-top: -50px;
            margin-left: 50px;
            z-index: 1;
            border: 2px solid var(--color-phoenix-gold);
        }

        @media (max-width: 900px) {
          .leader-section, .leader-section.reverse {
            flex-direction: column;
          }
          
          .leader-image-container {
            flex: auto;
            width: 100%;
            max-width: 500px;
          }
          
          .leader-image.secondary {
             margin-top: var(--spacing-md);
             margin-left: 0;
             width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Leaders;
