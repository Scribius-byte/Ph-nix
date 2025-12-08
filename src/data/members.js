import reineImg from '../assets/images/reine.jpg';
import premierMinistreImg from '../assets/images/premier-ministre.jpg';
import roiImg from '../assets/images/orval_new.png';
import seigneurGuerreImg from '../assets/images/seigneur-de-guerre.jpg';
import seigneurGuerre2Img from '../assets/images/seigneur-de-guerre-2.jpg';
import evenementOfficierImg from '../assets/images/evenement-officier.jpg';
import sainteImg from '../assets/images/sainte.jpg';
import bouffonImg from '../assets/images/bouffon.jpg';

export const leaders = [
    {
        id: "sirkesa",
        name: "Sirkesa",
        role: "Leader",
        title: "La Sublime",
        description: "Dirigeante acharnée, douce et toujours à l'écoute de ses membres. Elle se bat en première ligne pour les profits de la famille.",
        image: reineImg
    },
    {
        id: "siphas",
        name: "Siphas",
        role: "Leader",
        title: "Le Serein",
        description: "Diplomate et Grand Conseiller, pilier de la diplomatie intra et inter Royaume. 'Tout va bien, JE SUIS LA'.",
        image: premierMinistreImg
    },
    {
        id: "orval",
        name: "Orval",
        role: "Leader",
        title: "Le Valeureux",
        description: "Chef au grand cœur, co-fondateur et grand orateur. Il résout les conflits avec sa verve digne de Molière.",
        image: roiImg
    }
];

export const officers = [
    {
        id: "is4gi",
        name: "Is4gi",
        role: "Seigneur de Guerre",
        title: "La Bassine de Sang",
        description: "Si un ennemi vient, nous remplirons un verre de son sang. Si trois viennent, la mer virera au rouge.",
        image: seigneurGuerreImg
    },
    {
        id: "bftigra",
        name: "BfTigra",
        role: "Seigneur de Guerre",
        title: "La Marée Rouge",
        description: "Un homme au sang chaud, prêt à défendre la famille contre toute invasion.",
        image: seigneurGuerre2Img
    },
    {
        id: "azepasoif",
        name: "Azepasoif",
        role: "Officier Événement",
        title: "Le Garde du Corps",
        description: "Pilier pour tous les événements, apportant une touche joviale.",
        image: evenementOfficierImg,
        partnerId: "papillon"
    },
    {
        id: "papillon",
        name: "Papillon",
        role: "Officier Événement",
        title: "La Douce",
        description: "Apporte lumière et joie au milieu de l'océan de noirceur.",
        image: evenementOfficierImg,
        partnerId: "azepasoif"
    },
    {
        id: "alexxa",
        name: "Alexxa",
        role: "Sainte",
        title: "L'Éblouissante",
        description: "Femme élégante. Attention à vos yeux !",
        image: sainteImg
    },
    {
        id: "scribius",
        name: "Scribius",
        role: "Émissaire",
        title: "Le Bouffon",
        description: "Il est gentil (selon les filles). Ne pas le nourrir après minuit.",
        image: bouffonImg
    }
];
