import React, { useState } from 'react';

// Import all images to display in gallery (excluding those already used heavily if needed, but here we dump them)
// For simplicity, we'll assume a list of imports.
// In a real app we might dynamic import or use a list.
// I will import the key ones mentioned in existing HTMLs + any extras found in the folder listing.

import ph1 from '../assets/images/phenix-1.jpg';
import ph2 from '../assets/images/phenix-2.jpg';
import sGuerre from '../assets/images/seigneur-de-guerre.jpg';
import sGuerre2 from '../assets/images/seigneur-de-guerre-2.jpg';
import reine from '../assets/images/reine.jpg';
import roi from '../assets/images/orval_new.png';
import pm from '../assets/images/premier-ministre.jpg';
import espion from '../assets/images/espion.png';
import fayot from '../assets/images/fayot.jpg';
import conseiller from '../assets/images/conseiller.jpg';
import coeur from '../assets/images/coeur.jpg';
import bouffon from '../assets/images/bouffon.jpg';
import sainte from '../assets/images/sainte.jpg';
import evtOff from '../assets/images/evenement-officier.jpg';
import equipe from '../assets/images/equipe-soudee.jpg';
import eleForester from '../assets/images/eleforester.png';


const images = [
    { src: ph2, alt: "Le Phénix Renait" },
    { src: ph1, alt: "Le Phénix" },
    { src: equipe, alt: "L'équipe soudée" },
    { src: reine, alt: "Sirkesa" },
    { src: roi, alt: "Orval" },
    { src: pm, alt: "Siphas" },
    { src: sGuerre, alt: "Is4gi" },
    { src: sGuerre2, alt: "BfTigra" },
    { src: sainte, alt: "Alexxa" },
    { src: bouffon, alt: "Scribius" },
    { src: espion, alt: "Onlyway L'Espion" },
    { src: fayot, alt: "..." },
    { src: conseiller, alt: "Conseiller" },
    { src: coeur, alt: "Cœur" },
    { src: evtOff, alt: "Les Officiers" },
    { src: eleForester, alt: "EleForester" },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="gallery-page">
            <div className="container">
                <header className="page-header">
                    <h1 className="page-title">Galerie</h1>
                    <p className="page-subtitle">Souvenirs et Visages de la Famille</p>
                </header>

                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <div key={index} className="gallery-item" onClick={() => setSelectedImage(img)}>
                            <img src={img.src} alt={img.alt} loading="lazy" />
                            <div className="overlay">
                                <span>{img.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content">
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                        <p>{selectedImage.alt}</p>
                    </div>
                </div>
            )}

            <style>{`
                .gallery-page {
                    padding-top: 100px;
                    padding-bottom: var(--spacing-xl);
                    background: var(--color-void-dark);
                    min-height: 100vh;
                }

                .container {
                    max-width: 1200px;
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

                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: var(--spacing-md);
                }

                .gallery-item {
                    position: relative;
                    cursor: pointer;
                    overflow: hidden;
                    border-radius: var(--radius-md);
                    border: 1px solid rgba(255, 215, 0, 0.1);
                    aspect-ratio: 1;
                }

                .gallery-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .gallery-item:hover img {
                    transform: scale(1.1);
                }

                .gallery-item .overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgba(0, 0, 0, 0.7);
                    padding: var(--spacing-sm);
                    color: white;
                    transform: translateY(100%);
                    transition: transform 0.3s ease;
                    text-align: center;
                }

                .gallery-item:hover .overlay {
                    transform: translateY(0);
                }

                .lightbox {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    padding: var(--spacing-lg);
                }

                .lightbox-content {
                    max-width: 90%;
                    max-height: 90%;
                    text-align: center;
                }

                .lightbox-content img {
                    max-width: 100%;
                    max-height: 80vh;
                    border: 2px solid var(--color-phoenix-gold);
                    border-radius: var(--radius-sm);
                    margin-bottom: var(--spacing-sm);
                }

                .lightbox-content p {
                    color: var(--color-text-primary);
                    font-size: 1.2rem;
                }
            `}</style>
        </div>
    );
};

export default Gallery;
