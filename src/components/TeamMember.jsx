import React from 'react';
import emblem from '../assets/emblem.png';

const TeamMember = ({ member }) => {
    const isPartnered = !!member.partnerId;

    return (
        <div className={`team-member ${isPartnered ? 'partnered' : ''} ${member.role.toLowerCase().replace(' ', '-')}`}>
            <div className="member-avatar-container">
                <img src={emblem} alt={member.name} className="member-avatar" />
                {isPartnered && <div className="partner-badge" title="Soulbound">❤️</div>}
            </div>
            <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <span className="member-role">{member.role}</span>
                <h4 className="member-title">{member.title}</h4>
                <p className="member-desc">{member.description}</p>
            </div>

            <style>{`
        .team-member {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: var(--spacing-md);
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .team-member:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-phoenix-gold);
        }

        .team-member.leader {
          border-color: var(--color-phoenix-gold);
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.1);
        }
        
        .team-member.partnered {
          border-color: #ff4081; /* Pink for the couple */
          box-shadow: 0 0 10px rgba(255, 64, 129, 0.2);
        }

        .member-avatar-container {
          width: 100px;
          height: 100px;
          margin: 0 auto var(--spacing-sm);
          position: relative;
        }

        .member-avatar {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 5px rgba(0,0,0,0.5));
        }

        .partner-badge {
          position: absolute;
          bottom: 0;
          right: 0;
          font-size: 1.2rem;
          filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
          animation: pulse 2s infinite;
        }

        .member-name {
          color: var(--color-text-light);
          font-size: 1.4rem;
          margin-bottom: 0.2rem;
        }

        .member-role {
          display: inline-block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-phoenix-orange);
          margin-bottom: var(--spacing-xs);
          border: 1px solid var(--color-phoenix-orange);
          padding: 2px 8px;
          border-radius: 10px;
        }

        .member-title {
          color: var(--color-phoenix-gold);
          font-size: 1rem;
          font-style: italic;
          margin-bottom: var(--spacing-sm);
        }

        .member-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
        </div>
    );
};

export default TeamMember;
