import React from 'react';
import coeurImg from '../assets/images/coeur.jpg';
import fayotImg from '../assets/images/fayot.jpg';

const Thanks = () => {
    return (
        <div className="thanks-page">
            <div className="container">
                <h1 className="page-title">Remerciements</h1>

                <div className="messages-container">
                    <div className="message-box scribius">
                        <h2 className="author">Scribius</h2>
                        <div className="content">
                            <p className="warning">⚠️ Attention, ceci est un message à prendre au sérieux !</p>
                            <p>
                                Oui, je fais le Fayot mais vous êtes juste des gens incroyables et je suis très heureux de vous avoir rencontrés.
                                J'espère que tout ira bien pour vous tous et que nous continuerons à bien nous entendre et à avancer ensemble.
                                Je suis incroyablement content que vous fassiez partie de ma vie et je vous aime tous très fort !
                            </p>
                        </div>
                    </div>

                    <div className="message-box eleforester">
                        <h2 className="author">EleForester</h2>
                        <div className="content">
                            <p>
                                Je ne sais pas si je vous l'ai déjà assez dit, mais je vous adore 😄
                            </p>
                            <p>
                                Vous êtes tous des gens formidables, et j'ai passé un peu trop de temps en vocal avec certains, toujours dans la bonne humeur.
                                C'est bien la première fois que je me sens dans une nouvelle famille sur un jeu, et je voulais vous remercier encore une fois pour tous les merveilleux moments passés ensemble.
                            </p>
                            <p>
                                J'espère moi aussi que tout ira bien pour vous tous et qu'on continuera à discuter comme on l'a fait durant cette saison.
                                Merci de faire partie de ma vie et à bien vite :D
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-images">
                    <div className="image-item">
                        <img src={coeurImg} alt="Cœur" />
                    </div>
                    <div className="image-item">
                        <img src={fayotImg} alt="..." />
                        <span>...</span>
                    </div>
                </div>
            </div>

            <style>{`
                .thanks-page {
                    padding-top: 120px;
                    padding-bottom: 4rem;
                    min-height: 100vh;
                    background: var(--color-void-dark);
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }

                .page-title {
                    text-align: center;
                    margin-bottom: 4rem;
                    font-size: 3rem;
                    color: var(--color-phoenix-gold);
                }

                .messages-container {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    margin-bottom: 4rem;
                }

                @media (min-width: 768px) {
                    .messages-container {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                .message-box {
                    background: rgba(45, 27, 78, 0.4);
                    padding: 2rem;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 215, 0, 0.2);
                    transition: transform 0.3s ease;
                }

                .message-box:hover {
                    transform: translateY(-5px);
                    background: rgba(45, 27, 78, 0.6);
                }

                .author {
                    color: var(--color-phoenix-orange);
                    font-size: 1.8rem;
                    margin-bottom: 1.5rem;
                    text-align: center;
                    border-bottom: 2px solid var(--color-phoenix-red);
                    padding-bottom: 0.5rem;
                }

                .content {
                    font-family: var(--font-body);
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: var(--color-text-light);
                }

                .content p {
                    margin-bottom: 1rem;
                }

                .warning {
                    color: var(--color-phoenix-gold);
                    font-weight: bold;
                    font-style: italic;
                }

                .footer-images {
                    display: flex;
                    justify-content: center;
                    gap: 4rem;
                    margin-top: 4rem;
                    flex-wrap: wrap;
                }

                .image-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }

                .image-item img {
                    width: 150px;
                    height: 150px;
                    object-fit: cover;
                    border-radius: 50%;
                    border: 3px solid var(--color-phoenix-gold);
                    box-shadow: 0 0 20px rgba(255, 69, 0, 0.3);
                    transition: transform 0.3s ease;
                }

                .image-item:hover img {
                    transform: scale(1.1) rotate(5deg);
                }

                .image-item span {
                    color: var(--color-text-muted);
                    font-family: var(--font-heading);
                }
            `}</style>
        </div>
    );
};

export default Thanks;
