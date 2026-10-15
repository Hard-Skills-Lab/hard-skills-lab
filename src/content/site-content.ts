import type { Language } from "./site-config";
import type { IconName } from "../components/icons";

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
    eyebrow: string;
    title: string;
    intro: string;
    facts: Array<{
      icon: IconName;
      title: string;
      text: string;
    }>;
    mission: {
      eyebrow: string;
      title: string;
      text: string;
    };
  };
  curriculum: {
    eyebrow: string;
    title: string[];
    intro: string;
    weekLabel: string;
    tracks: Array<{
      title: string;
      shortTitle: string;
      lead: string;
      summary: string;
      weeks: string[];
    }>;
    tracksSection: {
      eyebrow: string;
      title: string;
      intro: string;
    };
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
      eyebrow: "The program",
      title: "An 8-week cohort, two tracks, one goal.",
      intro:
        "You'll learn in parallel with two tracks — Data Analysis with Python and Artificial Intelligence & Machine Learning. Live sessions, hands-on exercises, and a final capstone project.",
      facts: [
        {
          icon: "laptop",
          title: "100% online",
          text: "Live sessions + self-paced work",
        },
        {
          icon: "globe",
          title: "Bilingual",
          text: "French & English",
        },
        {
          icon: "users",
          title: "Beginner friendly",
          text: "No experience needed",
        },
        {
          icon: "africa",
          title: "For West Africa",
          text: "Open to young people in Togo and beyond",
        },
      ],
      mission: {
        eyebrow: "Our mission",
        title: "More African talent in data and AI.",
        text: "We close the gap in practical, free training, and build a community of learners who create real solutions for Africa.",
      },
    },
    curriculum: {
      eyebrow: "The curriculum",
      title: ["8 weeks. 2 tracks.", " 1 capstone project."],
      intro:
        "Each week, you'll have one data session and one AI session. The two tracks reinforce each other, and everything builds towards a final project you'll present.",
      weekLabel: "Week",
      tracks: [
        {
          title: "Data Analysis with Python",
          shortTitle: "Data Analysis with Python",
          lead: "Hugues",
          summary:
            "Clean, explore and visualise data to find insights about your market, your users or your community.",
          weeks: [
            "Python basics & environment setup",
            "Data structures, functions, files",
            "Pandas: load, filter, group, summarise",
            "Cleaning messy data",
            "Visualisation",
            "Basic statistics that matter",
            "End-to-end data analysis",
            "Capstone data work & presentation",
          ],
        },
        {
          title: "Artificial Intelligence & Machine Learning",
          shortTitle: "Artificial Intelligence & ML",
          lead: "Name TBC",
          summary:
            "Build and evaluate simple models to predict, classify or generate useful results from data.",
          weeks: [
            "What is AI and ML, setup",
            "How machines learn from data",
            "First model: classifier or regressor",
            "Training, testing, evaluation",
            "Improving models, second algorithm",
            "LLMs and responsible AI",
            "Applied AI mini-project",
            "Capstone model work & presentation",
          ],
        },
      ],
      tracksSection: {
        eyebrow: "The tracks",
        title: "Two skills, working together.",
        intro:
          "Data helps you understand. AI helps you build. Together, they help you solve real problems.",
      },
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
      eyebrow: "Le programme",
      title: "Une cohorte de 8 semaines, deux parcours, un seul objectif.",
      intro:
        "Vous apprendrez en parallèle dans deux parcours — l'analyse de données avec Python, et l'intelligence artificielle & le machine learning. Sessions en direct, exercices pratiques et un projet final.",
      facts: [
        {
          icon: "laptop",
          title: "100 % en ligne",
          text: "Sessions en direct + travail à votre rythme",
        },
        {
          icon: "globe",
          title: "Bilingue",
          text: "Français et anglais",
        },
        {
          icon: "users",
          title: "Accessible aux débutants",
          text: "Aucune expérience requise",
        },
        {
          icon: "africa",
          title: "Pour l'Afrique de l'Ouest",
          text: "Ouvert aux jeunes du Togo et d'ailleurs",
        },
      ],
      mission: {
        eyebrow: "Notre mission",
        title: "Plus de talents africains en données et en IA.",
        text: "Nous comblons le manque de formations pratiques et gratuites, et nous construisons une communauté d'apprenants qui créent de vraies solutions pour l'Afrique.",
      },
    },
    curriculum: {
      eyebrow: "Le curriculum",
      title: ["8 semaines. 2 parcours.", "1 projet final."],
      intro:
        "Chaque semaine, vous suivez une session données et une session IA. Les deux parcours se renforcent mutuellement, et tout converge vers un projet final que vous présenterez.",
      weekLabel: "Semaine",
      tracks: [
        {
          title: "Analyse de données avec Python",
          shortTitle: "Analyse de données avec Python",
          lead: "Hugues",
          summary:
            "Nettoyez, explorez et visualisez des données pour dégager des enseignements sur votre marché, vos utilisateurs ou votre communauté.",
          weeks: [
            "Bases de Python et installation de l'environnement",
            "Structures de données, fonctions, fichiers",
            "Pandas : charger, filtrer, regrouper, résumer",
            "Nettoyage de données désordonnées",
            "Visualisation",
            "Les statistiques de base qui comptent",
            "Analyse de données de bout en bout",
            "Projet final en données et présentation",
          ],
        },
        {
          title: "Intelligence artificielle & Machine Learning",
          shortTitle: "Intelligence artificielle & ML",
          lead: "Nom à confirmer",
          summary:
            "Construisez et évaluez des modèles simples pour prédire, classer ou générer des résultats utiles à partir de données.",
          weeks: [
            "Qu'est-ce que l'IA et le ML ? Installation",
            "Comment les machines apprennent des données",
            "Premier modèle : classification ou régression",
            "Entraînement, test et évaluation",
            "Améliorer les modèles, second algorithme",
            "LLM et IA responsable",
            "Mini-projet d'IA appliquée",
            "Projet final en modèle et présentation",
          ],
        },
      ],
      tracksSection: {
        eyebrow: "Les parcours",
        title: "Deux compétences qui se complètent.",
        intro:
          "Les données vous aident à comprendre. L'IA vous aide à construire. Ensemble, elles vous permettent de résoudre de vrais problèmes.",
      },
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
