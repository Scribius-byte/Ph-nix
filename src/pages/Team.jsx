import React from 'react';
import TeamMember from '../components/TeamMember';
import { leaders, officers } from '../data/members';

const Team = () => {
  return (
    <div className="team-page">
      <div className="container">
        <header className="team-header">
          <h1 className="page-title">La Hiérarchie du Phénix</h1>
          <p className="page-subtitle">Ceux qui guident la flamme.</p>
        </header>

        <section className="team-section leaders">
          <h2 className="rank-title">Leaders</h2>
          <div className="team-grid leaders-grid">
            {leaders.map(leader => (
              <TeamMember key={leader.id} member={leader} />
            ))}
          </div>
        </section>

        <section className="team-section officers">
          <h2 className="rank-title">Officiers</h2>
          <div className="team-grid officers-grid">
            {officers.map(officer => (
              <TeamMember key={officer.id} member={officer} />
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .team-page {
          padding-top: 100px; /* Space for navbar */
          padding-bottom: var(--spacing-xl);
          min-height: 100vh;
          background: var(--color-void-dark);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--spacing-md);
        }

        .team-header {
          text-align: center;
          margin-bottom: var(--spacing-lg);
        }

        .page-title {
          font-size: 3rem;
          color: var(--color-phoenix-gold);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .page-subtitle {
          color: var(--color-text-muted);
          font-size: 1.2rem;
        }

        .team-section {
          margin-bottom: var(--spacing-xl);
        }

        .rank-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: var(--spacing-md);
          color: var(--color-phoenix-red);
          border-bottom: 1px solid rgba(229, 57, 53, 0.3);
          padding-bottom: var(--spacing-sm);
          display: inline-block;
          left: 50%;
          position: relative;
          transform: translateX(-50%);
        }

        .team-grid {
          display: grid;
          gap: var(--spacing-md);
        }

        .leaders-grid {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          justify-content: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .officers-grid {
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
      `}</style>
    </div>
  );
};

export default Team;
