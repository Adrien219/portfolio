import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      certifications: 'Certifications',
      contact: 'Contact'
    },
    hero: {
      title: 'ADRIEL MULONGOY',
      subtitle: 'Développeur de Systèmes Intelligents',
      description: 'Innovation | Intelligence Artificielle | IoT | Vision par Ordinateur'
    },
    about: {
      title: 'À PROPOS',
      text1: "Développeur passionné par l'innovation et les systèmes intelligents, je conçois des solutions technologiques complètes alliant hardware, software et intelligence artificielle.",
      text2: "Ma vision : créer des produits réels à impact social, de la conception à l'industrialisation, en privilégiant l'approche open source et l'évolutivité.",
      philosophy: 'Philosophie',
      philosophyText: "Chaque projet est une opportunité d'innover et de résoudre des problèmes concrets. Je crois en une approche système complète et durable."
    },
    skills: {
      title: 'COMPÉTENCES',
      languages: 'Langages',
      ai: 'Intelligence Artificielle',
      iot: 'IoT & Embarqué',
      backend: 'Backend',
      frontend: 'Frontend & Interfaces'
    },
    projects: {
      title: 'PROJETS',
      viewProject: 'Voir le projet',
      intellibateur: {
        title: 'IntelliBateur',
        description: 'Incubateur intelligent avec capteurs IoT, IA prédictive et interface web temps réel pour optimiser les conditions d\'incubation.',
        tech: 'Arduino, ESP32, Python, Streamlit, IA, Wokwi'
      },
      navigation: {
        title: 'Système de Navigation Intelligente',
        description: 'Lunettes intelligentes pour personnes malvoyantes : détection d\'obstacles, reconnaissance d\'objets, assistant vocal IA, reconnaissance faciale, lecture de texte et GPS.',
        tech: 'Vision par ordinateur, IA, TTS, Reconnaissance faciale'
      },
      medflow: {
        title: 'MedFlow Pro 360',
        description: 'Application complète de gestion hospitalière avec backend robuste et interface mobile Flutter.',
        tech: 'Django, Flutter, API REST, Architecture backend structurée'
      }
    },
    certifications: {
      title: 'CERTIFICATIONS',
      placeholder: 'Section en cours de mise à jour avec les certifications et formations.'
    },
    vision: {
      title: 'VISION & OBJECTIFS',
      innovation: 'Innovation Continue',
      innovationText: 'Développer des technologies de pointe adaptées aux besoins réels',
      impact: 'Impact Social',
      impactText: 'Créer des solutions accessibles qui améliorent la vie quotidienne',
      products: 'Produits Réels',
      productsText: 'De la conception au prototype industrialisable',
      openSource: 'Open Source',
      openSourceText: 'Partager les connaissances pour un écosystème technologique durable'
    },
    contact: {
      title: 'CONTACT',
      subtitle: 'Collaborons ensemble',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi...',
      success: 'Message envoyé avec succès !',
      error: 'Erreur lors de l\'envoi. Veuillez réessayer.',
      github: 'GitHub',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn'
    },
    footer: {
      rights: '© 2025 Adriel Mulongoy. Tous droits réservés.',
      made: 'Conçu avec passion pour l\'innovation'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      certifications: 'Certifications',
      contact: 'Contact'
    },
    hero: {
      title: 'ADRIEL MULONGOY',
      subtitle: 'Intelligent Systems Developer',
      description: 'Innovation | Artificial Intelligence | IoT | Computer Vision'
    },
    about: {
      title: 'ABOUT',
      text1: 'As a developer passionate about innovation and intelligent systems, I design complete technological solutions combining hardware, software, and artificial intelligence.',
      text2: 'My vision: create real products with social impact, from conception to industrialization, favoring open source approach and scalability.',
      philosophy: 'Philosophy',
      philosophyText: 'Every project is an opportunity to innovate and solve concrete problems. I believe in a complete and sustainable system approach.'
    },
    skills: {
      title: 'SKILLS',
      languages: 'Languages',
      ai: 'Artificial Intelligence',
      iot: 'IoT & Embedded',
      backend: 'Backend',
      frontend: 'Frontend & Interfaces'
    },
    projects: {
      title: 'PROJECTS',
      viewProject: 'View project',
      intellibateur: {
        title: 'IntelliBateur',
        description: 'Intelligent incubator with IoT sensors, predictive AI and real-time web interface to optimize incubation conditions.',
        tech: 'Arduino, ESP32, Python, Streamlit, AI, Wokwi'
      },
      navigation: {
        title: 'Intelligent Navigation System',
        description: 'Smart glasses for visually impaired people: obstacle detection, object recognition, AI voice assistant, facial recognition, text reading and GPS.',
        tech: 'Computer Vision, AI, TTS, Facial Recognition'
      },
      medflow: {
        title: 'MedFlow Pro 360',
        description: 'Complete hospital management application with robust backend and Flutter mobile interface.',
        tech: 'Django, Flutter, REST API, Structured backend architecture'
      }
    },
    certifications: {
      title: 'CERTIFICATIONS',
      placeholder: 'Section being updated with certifications and training.'
    },
    vision: {
      title: 'VISION & GOALS',
      innovation: 'Continuous Innovation',
      innovationText: 'Develop cutting-edge technologies adapted to real needs',
      impact: 'Social Impact',
      impactText: 'Create accessible solutions that improve daily life',
      products: 'Real Products',
      productsText: 'From conception to industrializable prototype',
      openSource: 'Open Source',
      openSourceText: 'Share knowledge for a sustainable technological ecosystem'
    },
    contact: {
      title: 'CONTACT',
      subtitle: 'Let\'s collaborate together',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.',
      github: 'GitHub',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn'
    },
    footer: {
      rights: '© 2025 Adriel Mulongoy. All rights reserved.',
      made: 'Designed with passion for innovation'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};