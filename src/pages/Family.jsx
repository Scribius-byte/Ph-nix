import React from 'react';
import equipeSoudeeImg from '../assets/images/equipe-soudee.jpg';
import evenementRokImg from '../assets/images/evenement-rok.webp';
import seigneurGuerreImg from '../assets/images/seigneur-de-guerre.jpg';
import seigneurGuerre2Img from '../assets/images/seigneur-de-guerre-2.jpg';
import bouffonImg from '../assets/images/bouffon.jpg';
// We need images for Azepasoif, Papillon and Alexxa.
// Based on file listing: 'evenement-officier.jpg' (271KB) seems to be the group one,
// and 'sainte.jpg' for Alexxa (Sainte).
import evenementOfficierImg from '../assets/images/evenement-officier.jpg';
import sainteImg from '../assets/images/sainte.jpg';
import eleForesterImg from '../assets/images/eleforester.png';

const Family = () => {
    return (
        <div className="family-page">
            <div className="container">
                <header className="page-header">
                    <h1 className="page-title">La Famille Phénix</h1>
                    <p className="page-subtitle">Magnifique, Puissante, Soudée.</p>
                </header>

                {/* --- Introduction & General Family --- */}
                <section className="content-section">
                    <div className="text-content">
                        <h2>Présentation</h2>
                        <p>
                            Nous allons présenter ici la Famille Px. Que dire de plus que magnifique, puissante, soudée et MAGNIFIQUE (oui je sais je l'ai déjà dit).
                        </p>
                        <p>
                            Comme dit précédemment, cette famille a vu le jour grâce à Sirkesa, Siphas et Orval, nos dirigeants charismatiques. Forte d'une terre d'un peu plus de 300 territoires, nous sommes une force non négligeable du Royaume 3899.
                        </p>
                        <p>
                            Unis comme les 5 doigts de la main avec nos 200 membres (attention à l'image d'une main à 200 doigts, ça fait peur) nous nous battons pour un équilibre dans le royaume. Notre objectif: s'amuser et se développer du mieux possible, ensemble !
                        </p>
                    </div>
                    <div className="image-content">
                        <img src={equipeSoudeeImg} alt="Équipe soudée" />
                    </div>
                </section>

                <div className="divider"></div>

                {/* --- Warlords Section --- */}
                <section className="content-section reverse">
                    <div className="text-content">
                        <h2>Les Seigneurs de Guerre</h2>
                        <h3>Is4gi et BfTigra</h3>
                        <p>
                            Nous allons présenter ici la Famille dirigeante de Px! Passons nos 3 dirigeants d'exceptions et passons aux autres: Les seigneurs de guerre <strong>Is4gi</strong> et <strong>BfTigra</strong>.
                        </p>
                        <p className="quote">
                            "Si un ennemi vient, nous remplirons un verre de son sang. Si deux ennemis viennent, nous remplirons une bassine de leur sang. Si trois ennemis viennent, alors la mer virera au rouge."
                        </p>
                    </div>
                    <div className="image-content grid-2">
                        <img src={seigneurGuerreImg} alt="Is4gi" />
                        <img src={seigneurGuerre2Img} alt="BfTigra" />
                    </div>
                </section>

                {/* --- Emissary Section --- */}
                <section className="content-section">
                    <div className="text-content">
                        <h2>L'Émissaire</h2>
                        <h3>Scribius</h3>
                        <p>
                            Le bouffon du Roi dans l'alliance. Pas grand chose à dire à part qu'il est gentil (argument souvent donné par les filles quand on leur demande ce qu'elles pensent de lui).
                        </p>
                        <p>
                            Il ne faut pas le sous-estimer ni le nourrir après minuit sinon attention à vous.
                        </p>
                    </div>
                    <div className="image-content">
                        <img src={bouffonImg} alt="Scribius" style={{ maxWidth: '400px' }} />
                    </div>
                </section>

                {/* --- Event Team Section --- */}
                <section className="content-section reverse">
                    <div className="text-content">
                        <h2>L'Équipe Événement & Sainte</h2>
                        <h3>Azepasoif, Papillon et Alexxa</h3>
                        <p>
                            Nos préposés aux évènements. Ils sont nos piliers pour tous les évènements dans l'alliance. La douce <strong>Papillon</strong> et son garde du corps <strong>Azepasoif</strong>, les plus mystérieux des officiers (on ne sait jamais sur qui on tombe quand ils arrivent dans le discord, même si c'est souvent deux pour le prix d'un).
                        </p>
                        <p>
                            Ils apportent une petite touche joviale et lumineuse au milieu de cet océan de noirceur et de tristesse.
                        </p>
                        <br />
                        <p>
                            <strong>Alexxa</strong>, que dire de plus que 'Attention à vos yeux !' Femme élégante et ... attend me frappe pas je réfléchi à ce que je peux mettre... Non pas les yeux, PAS LES YEUX ahaaaaaaaaaaaaaaaaaaaaa!
                        </p>
                    </div>
                    <div className="image-content grid-2">
                        <img src={evenementOfficierImg} alt="Azepasoif et Papillon" />
                        <img src={sainteImg} alt="Alexxa" />
                    </div>
                </section>

                {/* --- Tech / Co-Dev Section --- */}
                <section className="content-section tech-section">
                    <div className="text-content centered">
                        <h2>Le Technicien de l'Ombre</h2>
                        <h3>EleForester</h3>
                        <p>
                            Le Co-Dev du site avec Scribius, et un membre qui a aidé dans plusieurs projets techniques pour l'alliance. C'est l'homme à tout faire côté informatique.
                        </p>
                        <div className="image-content">
                            <img src={eleForesterImg} alt="EleForester" style={{ maxWidth: '300px' }} />
                        </div>
                    </div>
                </section>

                <div className="divider"></div>

                {/* --- General Events & Support --- */}
                <section className="content-section">
                    <div className="text-content">
                        <h3>Évènements et soutien</h3>
                        <p>
                            Pas grand chose à dire ici, mis à part, une envie d'évoluer ensemble à travers les événements du jeu et le soutien à nos membres.
                        </p>
                    </div>
                    <div className="image-content">
                        <img src={evenementRokImg} alt="Évènement RoK" />
                    </div>
                </section>
            </div>

            <style>{`
        .family-page {
            padding-top: 100px;
            padding-bottom: var(--spacing-xl);
            background: var(--color-void-dark);
            min-height: 100vh;
            color: var(--color-text-primary);
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
        
        .divider {
            height: 1px;
            background: linear-gradient(to right, transparent, var(--color-phoenix-red), transparent);
            margin: var(--spacing-xxl) 0;
            opacity: 0.3;
        }

        .content-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-xl);
            margin-bottom: var(--spacing-xxl);
            align-items: center;
        }

        .content-section.reverse {
            direction: rtl; 
        }
        
        .content-section.reverse .text-content {
             direction: ltr;
        }

        .text-content h2 {
            color: var(--color-phoenix-red);
            margin-bottom: var(--spacing-xs);
            font-size: 2rem;
        }
        
        .text-content h3 {
            color: var(--color-phoenix-gold);
            margin-bottom: var(--spacing-md);
            font-size: 1.5rem;
        }

        .text-content p {
            margin-bottom: var(--spacing-md);
            line-height: 1.6;
            font-size: 1.1rem;
        }
        
        .quote {
            font-style: italic;
            border-left: 3px solid var(--color-phoenix-red);
            padding-left: var(--spacing-md);
            color: var(--color-text-light);
            background: rgba(255, 255, 255, 0.05);
            padding: var(--spacing-md);
            border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }
        
        .text-content.centered {
            text-align: center;
        }
        
        .tech-section {
             display: flex;
             justify-content: center;
        }

        .image-content {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .image-content.grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-md);
        }

        .image-content img {
            width: 100%;
            border-radius: var(--radius-md);
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            border: 1px solid rgba(229, 57, 53, 0.3);
            transition: transform 0.3s ease;
        }

        .image-content img:hover {
            transform: scale(1.02);
        }
        
        .placeholder-box {
            width: 200px;
            height: 200px;
            background: rgba(255, 255, 255, 0.05);
            border: 2px dashed var(--color-phoenix-gold);
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            color: var(--color-text-muted);
        }

        @media (max-width: 768px) {
            .content-section, .content-section.reverse {
                grid-template-columns: 1fr;
                direction: ltr !important;
            }
            .image-content.grid-2 {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
        </div>
    );
};

export default Family;
