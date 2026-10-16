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
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    seeMore: { label: string; href: string };
    viewProject: string;
    newTab: string;
    illustrativeLabel: string;
    previous: string;
    next: string;
    items: Array<{
      category: string;
      title: string;
      text: string;
      href: string;
      illustrative?: boolean;
      image: { label: string; tone: "light" | "dark" };
    }>;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    team: Array<{
      name: string;
      role: string;
      bio: string;
      photoLabel: string;
    }>;
    together: {
      title: string;
      text: string;
    };
  };
  faq: {
    title: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  apply: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
    details: Array<{
      icon: IconName;
      title: string;
      text: string;
    }>;
    questions: {
      title: string;
      text: string;
      cta: string;
    };
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
    projects: {
      eyebrow: "Real work",
      title: "Sample projects",
      intro:
        "Here's a look at the kind of work you'll do. These are examples from our curriculum — real analysis and a simple machine learning project.",
      // PLACEHOLDER URLs: replace with the real destinations
      seeMore: {
        label: "See more projects",
        href: "https://example.com/projects",
      },
      viewProject: "View project",
      newTab: "(opens in a new tab)",
      illustrativeLabel: "Illustrative example",
      previous: "Previous projects",
      next: "Next projects",
      items: [
        {
          category: "Data analysis project",
          title: "Togo population and employment",
          text: "Clean, explore and visualise public data to find insights about youth employment in Togo.",
          href: "https://example.com/projects/togo-population-employment",
          illustrative: true,
          image: { label: "Data visualisation", tone: "light" },
        },
        {
          category: "AI / ML project",
          title: "Student dropout prediction",
          text: "Build and evaluate a simple model to predict which students are at risk of dropping out (uses real-world style data).",
          href: "https://example.com/projects/student-dropout-prediction",
          illustrative: true,
          image: { label: "Code screenshot", tone: "dark" },
        },
        {
          category: "Data analysis project",
          title: "Togo population and employment",
          text: "Clean, explore and visualise public data to find insights about youth employment in Togo.",
          href: "https://example.com/projects/togo-population-employment",
          illustrative: true,
          image: { label: "Data visualisation", tone: "light" },
        },
      ],
    },
    about: {
      eyebrow: "About us",
      title: "A small team, a big mission.",
      intro:
        "We're two co-founders, united by the belief that African talent deserves access to practical, high-quality training in data and AI. We teach, we build, and we grow together with our learners.",
      // DEV: names and bios come from the mockup. Confirm with the founders.
      team: [
        {
          name: "Hugues",
          role: "Co-founder · Data Analysis Track",
          bio: "Data scientist and educator. I design and teach the Python track and handle the data side of the capstone.",
          photoLabel: "Portrait",
        },
        {
          name: "Name TBC",
          role: "Co-founder · AI & Machine Learning Track",
          bio: "Machine learning engineer and educator. I design and teach the AI track and draft the curriculum content.",
          photoLabel: "Portrait",
        },
      ],
      together: {
        title: "Together",
        text: "We also run our LinkedIn and Instagram, recruit learners, run the sessions, issue certificates and build the community.",
      },
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
      eyebrow: "Join us",
      title: "Ready to build your future?",
      intro:
        "Apply for the first cohort and take the first step into data and AI.",
      cta: "Apply for cohort",
      details: [
        {
          icon: "checkCircle",
          title: "Eligibility",
          text: "Young people in Togo and West Africa.",
        },
        {
          icon: "clock",
          title: "Time commitment",
          text: "Around 10-12 hours per week.",
        },
        {
          icon: "wifi",
          title: "Internet",
          text: "A stable internet connection is required.",
        },
        {
          icon: "calendar",
          title: "Application deadline",
          // DEV: the mockup says "May 31, 2025 (example)". Set the real date.
          text: "Date to be confirmed.",
        },
      ],
      questions: {
        title: "Have questions?",
        text: "Get in touch with the team.",
        cta: "Contact us",
      },
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
    projects: {
      eyebrow: "Travaux concrets",
      title: "Exemples de projets",
      intro:
        "Voici un aperçu du type de travail que vous réaliserez. Ce sont des exemples issus de notre curriculum — une vraie analyse de données et un projet simple de machine learning.",
      // URL PLACEHOLDER : à remplacer par les vraies destinations
      seeMore: {
        label: "Voir plus de projets",
        href: "https://example.com/projects",
      },
      viewProject: "Voir le projet",
      newTab: "(s'ouvre dans un nouvel onglet)",
      illustrativeLabel: "Exemple illustratif",
      previous: "Projets précédents",
      next: "Projets suivants",
      items: [
        {
          category: "Projet d'analyse de données",
          title: "Population et emploi au Togo",
          text: "Nettoyez, explorez et visualisez des données publiques pour dégager des enseignements sur l'emploi des jeunes au Togo.",
          href: "https://example.com/projects/togo-population-employment",
          illustrative: true,
          image: { label: "Data visualisation", tone: "light" },
        },
        {
          category: "Projet IA / ML",
          title: "Prédiction du décrochage scolaire",
          text: "Construisez et évaluez un modèle simple pour prédire quels élèves risquent d'abandonner leurs études (avec des données proches du réel).",
          href: "https://example.com/projects/student-dropout-prediction",
          illustrative: true,
          image: { label: "Code screenshot", tone: "dark" },
        },
        {
          category: "Projet d'analyse de données",
          title: "Population et emploi au Togo",
          text: "Nettoyez, explorez et visualisez des données publiques pour dégager des enseignements sur l'emploi des jeunes au Togo.",
          href: "https://example.com/projects/togo-population-employment",
          illustrative: true,
          image: { label: "Data visualisation", tone: "light" },
        },
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Une petite équipe, une grande mission.",
      intro:
        "Nous sommes deux cofondateurs, unis par la conviction que les talents africains méritent un accès à une formation pratique et de qualité en données et en IA. Nous enseignons, nous construisons, et nous progressons avec nos apprenants.",
      // DEV : noms et bios issus de la maquette. À confirmer avec les fondateurs.
      team: [
        {
          name: "Hugues",
          role: "Cofondateur · Parcours Analyse de données",
          bio: "Data scientist et formateur. Je conçois et j'enseigne le parcours Python et je m'occupe du volet données du projet final.",
          photoLabel: "Portrait",
        },
        {
          name: "Nom à confirmer",
          role: "Cofondateur · Parcours IA & Machine Learning",
          bio: "Ingénieur en machine learning et formateur. Je conçois et j'enseigne le parcours IA et je rédige le contenu du curriculum.",
          photoLabel: "Portrait",
        },
      ],
      together: {
        title: "Ensemble",
        text: "Nous gérons aussi notre LinkedIn et notre Instagram, recrutons les apprenants, animons les sessions, délivrons les certificats et faisons vivre la communauté.",
      },
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
      eyebrow: "Rejoignez-nous",
      title: "Prêt à construire votre avenir ?",
      intro:
        "Postulez à la première cohorte et faites le premier pas vers les données et l'IA.",
      cta: "Postuler à la cohorte",
      details: [
        {
          icon: "checkCircle",
          title: "Éligibilité",
          text: "Jeunes du Togo et d'Afrique de l'Ouest.",
        },
        {
          icon: "clock",
          title: "Engagement",
          text: "Environ 10 à 12 heures par semaine.",
        },
        {
          icon: "wifi",
          title: "Internet",
          text: "Une connexion internet stable est nécessaire.",
        },
        {
          icon: "calendar",
          title: "Date limite de candidature",
          // DEV : la maquette indique « 31 mai 2025 (exemple) ». Mettre la vraie date.
          text: "Date à confirmer.",
        },
      ],
      questions: {
        title: "Des questions ?",
        text: "Contactez l'équipe.",
        cta: "Nous contacter",
      },
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
