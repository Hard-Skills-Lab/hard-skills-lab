import type { Language } from "./site-config";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  navigation: {
    home: string;
    program: string;
    curriculum: string;
    projects: string;
    about: string;
    faq: string;
    apply: string;
  };
  header: {
    openMenu: string;
    closeMenu: string;
    menuLabel: string;
    mainNavLabel: string;
    switchLanguage: string;
    applyCta: string;
    tagline: string;
  };
  hero: {
    eyebrow: string;
    titleLines: string[];
    subtitle: string;
    cta: string;
    pillars: string[];
    scroll: string;
  };
  program: {
    title: string;
    intro: string;
    facts: Array<{
      label: string;
      value: string;
    }>;
  };
  curriculum: {
    title: string;
    intro: string;
    tracks: Array<{
      title: string;
      description: string;
      skills: string[];
    }>;
  };
  about: {
    title: string;
    mission: string;
    vision: string;
    founders: Array<{
      name: string;
      role: string;
      bio: string;
    }>;
  };
  faq: {
    title: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  apply: {
    title: string;
    description: string;
    cta: string;
    requirements: string[];
  };
  footer: {
    tagline: string;
    navigation: string;
    contact: string;
    rights: string;
  };
}

export const content: Record<Language, SiteContent> = {
  en: {
    meta: {
      title: "Hard Skills Lab — Data & AI Training for Young Africans",
      description:
        "Free, online, practical, project-first learning in data and AI for young people in Togo and West Africa.",
    },
    navigation: {
      home: "Home",
      program: "Program",
      curriculum: "Curriculum",
      projects: "Sample projects",
      about: "About",
      faq: "FAQ",
      apply: "Apply",
    },
    header: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      menuLabel: "Menu",
      mainNavLabel: "Main navigation",
      switchLanguage: "Switch to French",
      applyCta: "Apply for cohort",
      tagline: "Free. Practical. Bilingual. Beginner friendly.",
    },
    hero: {
      eyebrow: "Data & AI training for Africa",
      titleLines: [
        "Real skills.",
        "Practical projects.",
        "A stronger tomorrow.",
      ],
      subtitle:
        "Hard Skills Lab trains young Africans in data and artificial intelligence, free and online, in French and English. We teach by doing — so you leave with a real project, not just theory.",
      cta: "Apply for cohort",
      pillars: ["Learn", "Build", "Grow"],
      scroll: "Scroll",
    },
    program: {
      title: "The Program",
      intro:
        "A 16-week online program designed for beginners. Learn by doing, build a portfolio, and join a community of learners across West Africa.",
      facts: [
        { label: "Duration", value: "16 weeks" },
        { label: "Format", value: "100% online" },
        { label: "Cost", value: "Free" },
        { label: "Level", value: "Beginner-friendly" },
      ],
    },
    curriculum: {
      title: "What You Will Learn",
      intro:
        "Three tracks, one goal: practical skills you can demonstrate through real projects.",
      tracks: [
        {
          title: "Data Fundamentals",
          description:
            "Work with spreadsheets, databases, and visualization tools. Learn to clean, analyze, and present data.",
          skills: ["Spreadsheets", "SQL", "Data visualization"],
        },
        {
          title: "Programming for Data",
          description:
            "Learn Python from scratch. Automate tasks, manipulate datasets, and build simple data pipelines.",
          skills: ["Python", "Pandas", "Jupyter"],
        },
        {
          title: "Applied AI",
          description:
            "Understand machine learning basics and build practical AI applications that solve local problems.",
          skills: ["Machine learning", "APIs", "Deployment"],
        },
      ],
    },
    about: {
      title: "About Hard Skills Lab",
      mission:
        "Our mission is to make data and AI skills accessible to young Africans, regardless of background or location.",
      vision:
        "We envision a generation of African builders who use data and AI to solve local and global challenges.",
      founders: [
        {
          name: "Founder Name",
          role: "Co-founder & Program Lead",
          bio: "Bio placeholder — to be updated with real founder information.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "Who can apply?",
          answer:
            "Young people in Togo and West Africa, aged 18-30, with basic computer literacy and reliable internet access. No prior coding experience required.",
        },
        {
          question: "Is the program really free?",
          answer:
            "Yes. Hard Skills Lab is completely free for all selected participants.",
        },
        {
          question: "What equipment do I need?",
          answer:
            "A computer with internet access. All tools and platforms used are free or provided.",
        },
        {
          question: "When does the first cohort start?",
          answer:
            "Cohort 1 dates will be announced after applications close. Follow our social channels for updates.",
        },
      ],
    },
    apply: {
      title: "Ready to Start?",
      description:
        "Applications for Cohort 1 are now open. Join us and build the skills that will shape your future.",
      cta: "Apply for Cohort 1",
      requirements: [
        "Aged 18-30",
        "Based in Togo or West Africa",
        "Basic computer literacy",
        "Reliable internet access",
        "Commitment to 16 weeks of learning",
      ],
    },
    footer: {
      tagline:
        "Training young Africans in data and AI through free, practical, project-first learning.",
      navigation: "Navigation",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
  fr: {
    meta: {
      title:
        "Hard Skills Lab — Formation en Données & IA pour Jeunes Africains",
      description:
        "Apprentissage gratuit, en ligne, pratique et axé sur les projets en données et IA pour les jeunes du Togo et d'Afrique de l'Ouest.",
    },
    navigation: {
      home: "Accueil",
      program: "Programme",
      curriculum: "Curriculum",
      projects: "Projets",
      about: "À propos",
      faq: "FAQ",
      apply: "Postuler",
    },
    header: {
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      menuLabel: "Menu",
      mainNavLabel: "Navigation principale",
      switchLanguage: "Passer à l'anglais",
      applyCta: "Postuler à la cohorte",
      tagline: "Gratuit. Pratique. Bilingue. Accessible aux débutants.",
    },
    hero: {
      eyebrow: "Formation en données et IA pour l'Afrique",
      titleLines: [
        "De vraies compétences.",
        "Des projets concrets.",
        "Un avenir plus solide.",
      ],
      subtitle:
        "Hard Skills Lab forme les jeunes Africains aux données et à l'intelligence artificielle, gratuitement et en ligne, en français et en anglais. Nous enseignons en pratiquant — pour que vous repartiez avec un vrai projet, pas seulement de la théorie.",
      cta: "Postuler à la cohorte",
      pillars: ["Apprendre", "Créer", "Grandir"],
      scroll: "Défiler",
    },
    program: {
      title: "Le Programme",
      intro:
        "Un programme en ligne de 16 semaines conçu pour les débutants. Apprenez en faisant, constituez un portfolio et rejoignez une communauté d'apprenants à travers l'Afrique de l'Ouest.",
      facts: [
        { label: "Durée", value: "16 semaines" },
        { label: "Format", value: "100% en ligne" },
        { label: "Coût", value: "Gratuit" },
        { label: "Niveau", value: "Accessible aux débutants" },
      ],
    },
    curriculum: {
      title: "Ce Que Vous Allez Apprendre",
      intro:
        "Trois parcours, un objectif : des compétences pratiques que vous pouvez démontrer à travers de vrais projets.",
      tracks: [
        {
          title: "Fondamentaux des Données",
          description:
            "Travaillez avec des tableurs, des bases de données et des outils de visualisation. Apprenez à nettoyer, analyser et présenter des données.",
          skills: ["Tableurs", "SQL", "Visualisation de données"],
        },
        {
          title: "Programmation pour les Données",
          description:
            "Apprenez Python à partir de zéro. Automatisez des tâches, manipulez des ensembles de données et construisez des pipelines de données simples.",
          skills: ["Python", "Pandas", "Jupyter"],
        },
        {
          title: "IA Appliquée",
          description:
            "Comprenez les bases de l'apprentissage automatique et construisez des applications IA pratiques qui résolvent des problèmes locaux.",
          skills: ["Apprentissage automatique", "APIs", "Déploiement"],
        },
      ],
    },
    about: {
      title: "À Propos de Hard Skills Lab",
      mission:
        "Notre mission est de rendre les compétences en données et en IA accessibles aux jeunes Africains, quel que soit leur parcours ou leur lieu de résidence.",
      vision:
        "Nous envisageons une génération de bâtisseurs africains qui utilisent les données et l'IA pour résoudre des défis locaux et mondiaux.",
      founders: [
        {
          name: "Nom du Fondateur",
          role: "Co-fondateur & Responsable du Programme",
          bio: "Biographie à compléter — sera remplacée par les informations réelles des fondateurs.",
        },
      ],
    },
    faq: {
      title: "Questions Fréquentes",
      questions: [
        {
          question: "Qui peut postuler ?",
          answer:
            "Les jeunes du Togo et d'Afrique de l'Ouest, âgés de 18 à 30 ans, ayant des compétences informatiques de base et un accès internet fiable. Aucune expérience en programmation n'est requise.",
        },
        {
          question: "Le programme est-il vraiment gratuit ?",
          answer:
            "Oui. Hard Skills Lab est entièrement gratuit pour tous les participants sélectionnés.",
        },
        {
          question: "De quel équipement ai-je besoin ?",
          answer:
            "Un ordinateur avec accès internet. Tous les outils et plateformes utilisés sont gratuits ou fournis.",
        },
        {
          question: "Quand commence la première cohorte ?",
          answer:
            "Les dates de la Cohorte 1 seront annoncées après la clôture des candidatures. Suivez nos réseaux sociaux pour rester informé.",
        },
      ],
    },
    apply: {
      title: "Prêt à Commencer ?",
      description:
        "Les candidatures pour la Cohorte 1 sont maintenant ouvertes. Rejoignez-nous et développez les compétences qui façonneront votre avenir.",
      cta: "Postuler pour la Cohorte 1",
      requirements: [
        "Âgé de 18 à 30 ans",
        "Basé au Togo ou en Afrique de l'Ouest",
        "Compétences informatiques de base",
        "Accès internet fiable",
        "Engagement pour 16 semaines d'apprentissage",
      ],
    },
    footer: {
      tagline:
        "Former les jeunes Africains aux données et à l'IA grâce à un apprentissage gratuit, pratique et axé sur les projets.",
      navigation: "Navigation",
      contact: "Contact",
      rights: "Tous droits réservés.",
    },
  },
};

// Helper function to get content by language
export function getContent(lang: Language): SiteContent {
  return content[lang];
}
