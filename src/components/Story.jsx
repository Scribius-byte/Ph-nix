import React from 'react';
import phenix2Img from '../assets/images/phenix-2.jpg';
import espionImg from '../assets/images/espion.png';

const Story = () => {
  return (
    <section className="story">
      <div className="container">
        <h2 className="section-title">L'Histoire de nos Batailles</h2>
        <div className="story-content">
          <p>Depuis mon entrée dans la famille, j'ai participé à plusieurs guerres plus ou moins difficiles :</p>
          <ul className="battle-list">
            <li>Petite alliance dont j'ai oublié le nom (facile)</li>
            <li>CR06 (difficile au début puis facile sur notre deuxième affrontement)</li>
            <li>CNDC (facile sans l'aide de WV06 et de leur baleine)</li>
            <li>WV06 (données manquantes, il me semble avoir pris un coup derrière la tête et de me réveiller 3 jours plus tard)</li>
            <li>Tout le royaume 3941 (tenu en 1 contre tous pendant 1 semaine)</li>
            <li>Kvk 1 donc tout le serveur 3898</li>
          </ul>
        </div>

        <div className="story-block">
          <h2 className="section-title">Une Résurrection Miraculeuse</h2>
          <div className="story-content">
            <p>
              Nous sommes tombés encore et encore mais jamais Phénix Family ne mourra définitivement.
              Les guerres et les escarmouches ne font que nous renforcer. Nous tombons et préparons notre revanche dans l'ombre.
            </p>
            <p className="highlight">
              Nous sommes forts et unis et personne ne pourra nous séparer.
            </p>
          </div>
          <div className="story-image">
            <img src={phenix2Img} alt="Phénix renaissant" />
          </div>
        </div>

        <div className="story-block">
          <h2 className="section-title">L'Incroyable Histoire de notre Espion</h2>
          <div className="story-content">
            <p>
              Parlons de notre espion aux pouvoirs persuasifs divins. J'ai nommé : <strong>Onlyway</strong> !
            </p>
            <p>
              Cet incroyable homme nous a apporté, non pas des millions de ressources, mais des dizaines d'alliances.
              Là où nos dirigeants ont commencé avec une petite alliance, notre famille s'est agrandie et est renforcée par pas loin de 13 alliances secondaires et fermes.
            </p>
          </div>
          <div className="story-image small">
            <img src={espionImg} alt="Espion Onlyway" />
          </div>
        </div>
      </div>

      <style>{`
        .story {
          padding: var(--spacing-xxl) var(--spacing-md);
          background: linear-gradient(to bottom, var(--color-void-dark), var(--color-void-purple));
          color: var(--color-text-light);
          position: relative;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-lg);
          background: linear-gradient(to right, var(--color-phoenix-red), var(--color-phoenix-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
          display: block;
        }

        .story-content {
             margin-bottom: var(--spacing-xl);
        }

        .story-content p {
          font-size: 1.2rem;
          margin-bottom: var(--spacing-md);
          line-height: 1.8;
          color: var(--color-text-muted);
        }

        .story-content .highlight {
            font-size: 1.4rem;
            color: var(--color-phoenix-gold);
            font-weight: 600;
            text-align: center;
            font-style: italic;
        }
        
        .battle-list {
            list-style-type: none;
            padding: 0;
            margin: var(--spacing-md) 0;
        }

        .battle-list li {
            background: rgba(255, 255, 255, 0.05);
            margin-bottom: var(--spacing-xs);
            padding: var(--spacing-sm) var(--spacing-md);
            border-left: 3px solid var(--color-phoenix-red);
            border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
            font-size: 1.1rem;
            transition: transform 0.2s;
        }

        .battle-list li:hover {
            transform: translateX(10px);
            background: rgba(255, 255, 255, 0.1);
        }

        .story-block {
            margin-top: var(--spacing-xxl);
            text-align: center;
        }

        .story-image img {
            max-width: 100%;
            border-radius: var(--radius-md);
            box-shadow: 0 5px 25px rgba(0,0,0,0.5);
            border: 1px solid rgba(229, 57, 53, 0.3);
        }

        .story-image.small img {
            max-width: 400px;
        }
      `}</style>
    </section>
  );
};

export default Story;
