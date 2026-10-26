import { siteConfig } from './site-config';
import type { Language } from './site-config';
import type { IconName } from '../components/icons';

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    // Describes the social sharing image (public/og/og-en.png and og-fr.png)
    ogImageAlt: string;
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
    skipLink: string;
    openMenu: string;
    closeMenu: string;
    menuLabel: string;
    mainNavLabel: string;
    switchLanguage: string;
    tagline: string;
  };
  // Button labels. Apply or waitlist depends on siteConfig.applicationsOpen.
  cta: {
    apply: string;
    waitlist: string;
    curriculum: string;
  };
  // Thin bar above the header. Leave the texts empty to hide it.
  announcement: {
    open: string;
    waitlist: string;
  };
  hero: {
    eyebrow: string;
    titleLines: string[];
    subtitle: string;
    facts: string[];
    pillars: string[];
    scroll: string;
    // Alt text of the hero photo
    photoAlt: string;
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
    // Alt text of the classroom photo (mission card and phone landscape)
    photoAlt: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: Array<{
      title: string;
      text: string;
    }>;
  };
  curriculum: {
    eyebrow: string;
    title: string[];
    intro: string;
    weekLabel: string;
    leadLabel: string;
    // Read by screen readers after the lead's name when it links to LinkedIn
    leadLink: string;
    outcomesTitle: string;
    toolsTitle: string;
    tools: string[];
    tracks: Array<{
      title: string;
      shortTitle: string;
      lead: {
        name: string;
        role: string;
        // Leave empty to show the name without a link
        linkedin: string;
      };
      summary: string;
      weeks: string[];
      outcomes: string[];
    }>;
    tracksSection: {
      eyebrow: string;
      title: string;
      intro: string;
      // Alt text of the coding photo under the track cards (phones)
      photoAlt: string;
    };
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    // Leave href empty to hide the link
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
      // Leave empty to hide the "View project" link
      href: string;
      illustrative?: boolean;
      image: { label: string; tone: 'light' | 'dark' };
    }>;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    points: Array<{
      icon: IconName;
      title: string;
      text: string;
    }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    // Followed by the contact email
    more: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  apply: {
    eyebrow: string;
    title: string;
    intro: string;
    // Shown instead of the intro while applications are closed
    waitlistIntro: string;
    // Alt text of the study photo (left column on desktop, banner on phones)
    photoAlt: string;
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
    privacy: string;
  };
}

export const content: Record<Language, SiteContent> = {
  en: {
    meta: {
      title: 'Hard Skills Lab | Free data and AI training for young Africans',
      description:
        'Free, online and project-first training in data and AI for young people across Africa, in French and English.',
      ogImageAlt:
        'Hard Skills Lab: free data and AI training, online, in French and English.',
    },
    navigation: {
      home: 'Home',
      program: 'Program',
      curriculum: 'Curriculum',
      projects: 'Sample projects',
      about: 'About',
      faq: 'FAQ',
      apply: 'Apply',
    },
    header: {
      skipLink: 'Skip to content',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      menuLabel: 'Menu',
      mainNavLabel: 'Main navigation',
      switchLanguage: 'Switch to French',
      tagline: 'Free. Practical. Bilingual. Beginner friendly.',
    },
    cta: {
      apply: 'Apply for cohort 1',
      waitlist: 'Get notified',
      curriculum: 'See the curriculum',
    },
    announcement: {
      open: 'Cohort 1 applications are open.',
      waitlist: 'Cohort 1 applications open soon.',
    },
    hero: {
      eyebrow: 'Data & AI training for Africa',
      titleLines: [
        'Real skills.',
        'Practical projects.',
        'A stronger tomorrow.',
      ],
      subtitle:
        'Hard Skills Lab trains young Africans in data and artificial intelligence, free and online, in French and English. We teach by doing, so you leave with a real project, not just theory.',
      facts: ['Free', '8 weeks', '100% online', 'French & English'],
      pillars: ['Learn', 'Build', 'Grow'],
      scroll: 'Scroll',
      photoAlt: 'A young woman working on a laptop at a desk',
    },
    program: {
      eyebrow: 'The program',
      title: 'An 8-week cohort, two tracks, one goal.',
      intro:
        'You follow two tracks in parallel: Data Analysis with Python, and Artificial Intelligence & Machine Learning. Live sessions, hands-on exercises and a final capstone project.',
      facts: [
        {
          icon: 'laptop',
          title: '100% online',
          text: 'Live sessions + self-paced work',
        },
        {
          icon: 'globe',
          title: 'Bilingual',
          text: 'French & English',
        },
        {
          icon: 'users',
          title: 'Beginner friendly',
          text: 'No experience needed',
        },
        {
          icon: 'africa',
          title: 'Across Africa',
          text: 'Open to young people across the continent',
        },
      ],
      mission: {
        eyebrow: 'Our mission',
        title: 'More African talent in data and AI.',
        text: 'We close the gap in practical, free training, and build a community of learners who create real solutions for Africa.',
      },
      photoAlt:
        'A coding class in a computer lab, with the teacher at the front',
    },
    howItWorks: {
      eyebrow: 'How it works',
      title: 'From application to final project.',
      // DEV: add a selection step, session days and times (GMT) and
      // recordings here once they are decided.
      steps: [
        {
          title: 'Apply',
          text: 'Fill in the online form, in French or English. There is no fee.',
        },
        {
          title: 'Learn live',
          text: 'Each week, join one live data session and one live AI session.',
        },
        {
          title: 'Practise',
          text: 'Do the hands-on exercises at your own pace. Plan for about 10 to 12 hours a week in total.',
        },
        {
          title: 'Present your project',
          text: 'In week 8, bring both tracks together in one capstone project and present it.',
        },
      ],
    },
    curriculum: {
      eyebrow: 'The curriculum',
      title: ['8 weeks.', '2 tracks.', '1 project.'],
      intro:
        'Everyone follows both tracks. Each week you have one data session and one AI session. The two tracks support each other, and everything builds towards a final project you present.',
      weekLabel: 'Week',
      leadLabel: 'Led by',
      leadLink: '(LinkedIn profile, opens in a new tab)',
      outcomesTitle: 'By the end, you can',
      toolsTitle: 'Tools you will use',
      // DEV: list to confirm with the track leads
      tools: ['Python', 'Jupyter', 'pandas', 'Matplotlib', 'scikit-learn'],
      tracks: [
        {
          title: 'Data Analysis with Python',
          shortTitle: 'Data Analysis with Python',
          lead: {
            name: 'Kokou Hugues Minasseh',
            role: 'Data scientist and educator',
            linkedin:
              'https://www.linkedin.com/in/kokou-hugues-minasseh-b426591b8',
          },
          summary:
            'Clean, explore and visualise data to find insights about your market, your users or your community.',
          weeks: [
            'Python basics & environment setup',
            'Data structures, functions, files',
            'Pandas: load, filter, group, summarise',
            'Cleaning messy data',
            'Visualisation',
            'Basic statistics that matter',
            'End-to-end data analysis',
            'Capstone data work & presentation',
          ],
          outcomes: [
            'Write Python to load, clean and reshape data',
            'Explore and summarise a dataset with pandas',
            'Build clear charts and use basic statistics',
            'Run a full analysis and present what you found',
          ],
        },
        {
          title: 'Artificial Intelligence & Machine Learning',
          shortTitle: 'Artificial Intelligence & ML',
          // DEV: confirm the name format, role line and LinkedIn URL
          lead: {
            name: 'Yao Gervais Amoah',
            role: 'Machine learning engineer and educator',
            linkedin: 'https://www.linkedin.com/in/gervais-amoah/',
          },
          summary:
            'Build and evaluate simple models to predict, classify or generate useful results from data.',
          weeks: [
            'What is AI and ML, setup',
            'How machines learn from data',
            'First model: classifier or regressor',
            'Training, testing, evaluation',
            'Improving models, second algorithm',
            'LLMs and responsible AI',
            'Applied AI mini-project',
            'Capstone model work & presentation',
          ],
          outcomes: [
            'Explain how machines learn from data',
            'Train, test and evaluate a first model',
            'Improve a model and compare two algorithms',
            'Use LLMs responsibly and build a small AI project',
          ],
        },
      ],
      tracksSection: {
        eyebrow: 'The tracks',
        title: 'Two skills, working together.',
        intro:
          'Data helps you understand. AI helps you build. Together, they help you solve real problems.',
        photoAlt: 'A developer with headphones writing code on a large screen',
      },
    },
    projects: {
      eyebrow: 'Real work',
      title: 'Sample projects',
      intro:
        'Here is the kind of work you will do. Both examples follow the curriculum: a data analysis and a simple machine learning project.',
      // TODO: add the real links (a projects page or GitHub) when they exist
      seeMore: {
        label: 'See more projects',
        href: '',
      },
      viewProject: 'View project',
      newTab: '(opens in a new tab)',
      illustrativeLabel: 'Illustrative example',
      previous: 'Previous projects',
      next: 'Next projects',
      items: [
        {
          category: 'Data analysis project',
          title: 'Youth employment in Africa',
          text: 'Clean, explore and visualise public data to find insights about youth employment across African countries.',
          href: '',
          illustrative: true,
          image: { label: 'Data visualisation', tone: 'light' },
        },
        {
          category: 'AI / ML project',
          title: 'Student dropout prediction',
          text: 'Build and evaluate a simple model to predict which students are at risk of dropping out (uses real-world style data).',
          href: '',
          illustrative: true,
          image: { label: 'Code screenshot', tone: 'dark' },
        },
      ],
    },
    about: {
      eyebrow: 'About us',
      title: 'Practical skills, open to the whole continent.',
      intro:
        'We believe African talent deserves practical, high-quality training in data and AI. Hard Skills Lab makes it free, online and project-first, so more young people can take part.',
      points: [
        {
          icon: 'checkCircle',
          title: 'Free, so cost is not a barrier',
          text: 'There are no fees. If you have the time and a stable connection, you can apply.',
        },
        {
          icon: 'globe',
          title: 'Bilingual, to reach most of the continent',
          text: 'French or English is a working language in most African countries. Teaching in both opens the program to learners from francophone and anglophone countries.',
        },
        {
          icon: 'laptop',
          title: 'Project-first, so you can show your skills',
          text: 'You practise every topic and finish with a real project to add to your portfolio.',
        },
      ],
    },
    faq: {
      eyebrow: 'Good to know',
      title: 'Frequently asked questions',
      more: 'Something else? Write to us at',
      // Only confirmed answers here (see SPEC.md)
      questions: [
        {
          question: 'Is it really free?',
          answer: 'Yes. There are no fees to apply or to take part.',
        },
        {
          question: 'Do I need to know how to code?',
          answer:
            'No. The program is beginner friendly. Week 1 starts with Python basics and setting up your tools.',
        },
        {
          question: 'Who can join?',
          answer:
            'Young people from anywhere in Africa who want to learn data and AI. No experience is needed.',
        },
        {
          question: 'Which language are classes in?',
          answer:
            'French and English. The program runs in both languages, so learners from francophone and anglophone countries can join.',
        },
        {
          question: 'How much time does it take?',
          answer:
            'About 10 to 12 hours a week for 8 weeks. That covers one live data session, one live AI session and practice at your own pace.',
        },
        {
          question: 'When does the next cohort start?',
          // DEV: update this answer when applications open
          answer:
            'The dates are not set yet. Click “Get notified” and we will email you as soon as applications open.',
        },
        {
          question: 'What do I get at the end?',
          answer:
            'A real project that you built and presented, using what you learned in both tracks.',
        },
      ],
    },
    apply: {
      eyebrow: 'Join us',
      title: 'Ready to build your future?',
      intro:
        'Apply for the first cohort and take your first step into data and AI.',
      waitlistIntro:
        'Applications for the first cohort open soon. Leave your email and we will let you know as soon as they open.',
      photoAlt:
        'A young woman smiling at her laptop, with a notebook beside her',
      details: [
        {
          icon: 'checkCircle',
          title: 'Eligibility',
          text: 'Young people from anywhere in Africa.',
        },
        {
          icon: 'clock',
          title: 'Time commitment',
          text: 'About 10 to 12 hours a week.',
        },
        {
          icon: 'wifi',
          title: 'Internet',
          text: 'A stable internet connection is required.',
        },
        {
          icon: 'calendar',
          title: 'Application deadline',
          // DEV: the mockup says "May 31, 2025 (example)". Set the real date.
          text: 'Date to be confirmed.',
        },
      ],
      questions: {
        title: 'Have questions?',
        text: 'Get in touch with the team.',
        cta: 'Contact us',
      },
    },
    footer: {
      tagline:
        'Training young Africans in data and AI through free, practical, project-first learning.',
      navigation: 'Navigation',
      contact: 'Contact',
      rights: 'All rights reserved.',
      // DEV: draft, to approve before going live
      privacy:
        'Privacy: we use the details you give in our forms only to run the program and keep you informed. Email us if you want them deleted.',
    },
  },
  fr: {
    meta: {
      title:
        'Hard Skills Lab | Formation gratuite en données et IA pour les jeunes Africains',
      description:
        "Formation gratuite, en ligne et axée sur les projets, en données et en IA, pour les jeunes de toute l'Afrique, en français et en anglais.",
      ogImageAlt:
        'Hard Skills Lab : formation gratuite en données et IA, en ligne, en français et en anglais.',
    },
    navigation: {
      home: 'Accueil',
      program: 'Programme',
      curriculum: 'Curriculum',
      projects: 'Projets',
      about: 'À propos',
      faq: 'FAQ',
      apply: 'Postuler',
    },
    header: {
      skipLink: 'Aller au contenu',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      menuLabel: 'Menu',
      mainNavLabel: 'Navigation principale',
      switchLanguage: "Passer à l'anglais",
      tagline: 'Gratuit. Pratique. Bilingue. Accessible aux débutants.',
    },
    cta: {
      apply: 'Postuler à la cohorte 1',
      waitlist: 'Me prévenir',
      curriculum: 'Voir le curriculum',
    },
    announcement: {
      open: 'Cohorte 1 : les candidatures sont ouvertes.',
      waitlist: 'Cohorte 1 : candidatures bientôt ouvertes.',
    },
    hero: {
      eyebrow: "Formation en données et IA pour l'Afrique",
      titleLines: [
        'De vraies compétences.',
        'Des projets concrets.',
        'Un avenir plus solide.',
      ],
      subtitle:
        "Hard Skills Lab forme les jeunes Africains aux données et à l'intelligence artificielle, gratuitement et en ligne, en français et en anglais. Nous enseignons par la pratique : vous repartez avec un vrai projet, pas seulement de la théorie.",
      facts: ['Gratuit', '8 semaines', '100 % en ligne', 'Français et anglais'],
      pillars: ['Apprendre', 'Créer', 'Grandir'],
      scroll: 'Défiler',
      photoAlt:
        'Une jeune femme travaille sur un ordinateur portable à son bureau',
    },
    program: {
      eyebrow: 'Le programme',
      title: 'Une cohorte de 8 semaines, deux parcours, un seul objectif.',
      intro:
        "Vous suivez deux parcours en parallèle : l'analyse de données avec Python, et l'intelligence artificielle et le machine learning. Sessions en direct, exercices pratiques et un projet final.",
      facts: [
        {
          icon: 'laptop',
          title: '100 % en ligne',
          text: 'Sessions en direct + travail à votre rythme',
        },
        {
          icon: 'globe',
          title: 'Bilingue',
          text: 'Français et anglais',
        },
        {
          icon: 'users',
          title: 'Accessible aux débutants',
          text: 'Aucune expérience requise',
        },
        {
          icon: 'africa',
          title: 'Partout en Afrique',
          text: 'Ouvert aux jeunes de tout le continent',
        },
      ],
      mission: {
        eyebrow: 'Notre mission',
        title: 'Plus de talents africains en données et en IA.',
        text: "Nous comblons le manque de formations pratiques et gratuites, et nous construisons une communauté d'apprenants qui créent de vraies solutions pour l'Afrique.",
      },
      photoAlt:
        'Un cours de programmation dans une salle informatique, avec le formateur devant la classe',
    },
    howItWorks: {
      eyebrow: 'Comment ça marche',
      title: 'De la candidature au projet final.',
      // DEV : ajouter une étape de sélection, les jours et heures des sessions
      // (GMT) et les enregistrements quand ils seront décidés.
      steps: [
        {
          title: 'Postulez',
          text: "Remplissez le formulaire en ligne, en français ou en anglais. C'est gratuit.",
        },
        {
          title: 'Apprenez en direct',
          text: 'Chaque semaine, suivez une session données et une session IA en direct.',
        },
        {
          title: 'Pratiquez',
          text: 'Faites les exercices pratiques à votre rythme. Comptez environ 10 à 12 heures par semaine au total.',
        },
        {
          title: 'Présentez votre projet',
          text: 'En semaine 8, réunissez les deux parcours dans un projet final et présentez-le.',
        },
      ],
    },
    curriculum: {
      eyebrow: 'Le curriculum',
      title: ['8 semaines.', '2 parcours.', '1 projet.'],
      intro:
        'Tout le monde suit les deux parcours. Chaque semaine, vous avez une session données et une session IA. Les deux parcours se renforcent, et tout converge vers un projet final que vous présentez.',
      weekLabel: 'Semaine',
      leadLabel: 'Animé par',
      leadLink: "(profil LinkedIn, s'ouvre dans un nouvel onglet)",
      outcomesTitle: 'À la fin, vous saurez',
      toolsTitle: 'Les outils utilisés',
      // DEV : liste à confirmer avec les responsables des parcours
      tools: ['Python', 'Jupyter', 'pandas', 'Matplotlib', 'scikit-learn'],
      tracks: [
        {
          title: 'Analyse de données avec Python',
          shortTitle: 'Analyse de données avec Python',
          lead: {
            name: 'Kokou Hugues Minasseh',
            role: 'Data scientist et formateur',
            linkedin:
              'https://www.linkedin.com/in/kokou-hugues-minasseh-b426591b8',
          },
          summary:
            'Nettoyez, explorez et visualisez des données pour dégager des enseignements sur votre marché, vos utilisateurs ou votre communauté.',
          weeks: [
            "Bases de Python et installation de l'environnement",
            'Structures de données, fonctions, fichiers',
            'Pandas : charger, filtrer, regrouper, résumer',
            'Nettoyage de données désordonnées',
            'Visualisation',
            'Les statistiques de base qui comptent',
            'Analyse de données de bout en bout',
            'Projet final en données et présentation',
          ],
          outcomes: [
            'Écrire du Python pour charger, nettoyer et transformer des données',
            'Explorer et résumer un jeu de données avec pandas',
            'Créer des graphiques clairs et utiliser les statistiques de base',
            'Mener une analyse complète et présenter vos résultats',
          ],
        },
        {
          title: 'Intelligence artificielle & Machine Learning',
          shortTitle: 'Intelligence artificielle & ML',
          // DEV : confirmer le format du nom, le rôle et l'URL LinkedIn
          lead: {
            name: 'Yao Gervais Amoah',
            role: 'Ingénieur en machine learning et formateur',
            linkedin: '',
          },
          summary:
            'Construisez et évaluez des modèles simples pour prédire, classer ou générer des résultats utiles à partir de données.',
          weeks: [
            "Qu'est-ce que l'IA et le ML ? Installation",
            'Comment les machines apprennent des données',
            'Premier modèle : classification ou régression',
            'Entraînement, test et évaluation',
            'Améliorer les modèles, second algorithme',
            'LLM et IA responsable',
            "Mini-projet d'IA appliquée",
            'Projet final en modèle et présentation',
          ],
          outcomes: [
            'Expliquer comment les machines apprennent des données',
            'Entraîner, tester et évaluer un premier modèle',
            'Améliorer un modèle et comparer deux algorithmes',
            "Utiliser les LLM de façon responsable et créer un petit projet d'IA",
          ],
        },
      ],
      tracksSection: {
        eyebrow: 'Les parcours',
        title: 'Deux compétences qui se complètent.',
        intro:
          "Les données vous aident à comprendre. L'IA vous aide à construire. Ensemble, elles vous permettent de résoudre de vrais problèmes.",
        photoAlt:
          'Un développeur avec un casque écrit du code sur un grand écran',
      },
    },
    projects: {
      eyebrow: 'Travaux concrets',
      title: 'Exemples de projets',
      intro:
        'Voici le type de travail que vous réaliserez. Les deux exemples suivent le curriculum : une analyse de données et un projet simple de machine learning.',
      // TODO : ajouter les vrais liens (page projets ou GitHub) quand ils existeront
      seeMore: {
        label: 'Voir plus de projets',
        href: '',
      },
      viewProject: 'Voir le projet',
      newTab: "(s'ouvre dans un nouvel onglet)",
      illustrativeLabel: 'Exemple illustratif',
      previous: 'Projets précédents',
      next: 'Projets suivants',
      items: [
        {
          category: "Projet d'analyse de données",
          title: "L'emploi des jeunes en Afrique",
          text: "Nettoyez, explorez et visualisez des données publiques pour mieux comprendre l'emploi des jeunes dans les pays africains.",
          href: '',
          illustrative: true,
          image: { label: 'Data visualisation', tone: 'light' },
        },
        {
          category: 'Projet IA / ML',
          title: 'Prédiction du décrochage scolaire',
          text: "Construisez et évaluez un modèle simple pour prédire quels élèves risquent d'abandonner leurs études (avec des données proches du réel).",
          href: '',
          illustrative: true,
          image: { label: 'Code screenshot', tone: 'dark' },
        },
      ],
    },
    about: {
      eyebrow: 'À propos',
      title: 'Des compétences concrètes, ouvertes à tout le continent.',
      intro:
        'Nous pensons que les talents africains méritent une formation pratique et de qualité en données et en IA. Hard Skills Lab la rend gratuite, en ligne et axée sur les projets, pour que plus de jeunes puissent y participer.',
      points: [
        {
          icon: 'checkCircle',
          title: 'Gratuit, pour que le coût ne soit pas un frein',
          text: 'Aucun frais. Si vous avez le temps et une connexion stable, vous pouvez postuler.',
        },
        {
          icon: 'globe',
          title: 'Bilingue, pour toucher la majeure partie du continent',
          text: "Le français ou l'anglais est une langue de travail dans la plupart des pays africains. Enseigner dans les deux ouvre le programme aux apprenants des pays francophones comme anglophones.",
        },
        {
          icon: 'laptop',
          title: 'Axé sur les projets, pour montrer ce que vous savez faire',
          text: 'Vous pratiquez chaque notion et terminez avec un vrai projet à ajouter à votre portfolio.',
        },
      ],
    },
    faq: {
      eyebrow: 'Bon à savoir',
      title: 'Questions fréquentes',
      more: 'Une autre question ? Écrivez-nous à',
      // Uniquement des réponses confirmées (voir SPEC.md)
      questions: [
        {
          question: 'Le programme est-il vraiment gratuit ?',
          answer:
            "Oui. Il n'y a aucun frais, ni pour postuler ni pour participer.",
        },
        {
          question: 'Faut-il savoir coder ?',
          answer:
            "Non. Le programme est accessible aux débutants. La semaine 1 commence par les bases de Python et l'installation des outils.",
        },
        {
          question: 'Qui peut participer ?',
          answer:
            "Les jeunes de toute l'Afrique qui veulent apprendre les données et l'IA. Aucune expérience n'est requise.",
        },
        {
          question: 'Dans quelle langue sont les cours ?',
          answer:
            'En français et en anglais. Le programme est proposé dans les deux langues, pour accueillir les apprenants des pays francophones comme anglophones.',
        },
        {
          question: 'Combien de temps faut-il prévoir ?',
          answer:
            'Environ 10 à 12 heures par semaine pendant 8 semaines. Cela comprend une session données et une session IA en direct, et du travail à votre rythme.',
        },
        {
          question: 'Quand commence la prochaine cohorte ?',
          // DEV : mettre à jour cette réponse à l'ouverture des candidatures
          answer:
            "Les dates ne sont pas encore fixées. Cliquez sur « Me prévenir » et nous vous écrirons dès l'ouverture des candidatures.",
        },
        {
          question: "Qu'est-ce que j'obtiens à la fin ?",
          answer:
            'Un vrai projet que vous avez construit et présenté, avec ce que vous avez appris dans les deux parcours.',
        },
      ],
    },
    apply: {
      eyebrow: 'Rejoignez-nous',
      title: 'Prêt à construire votre avenir ?',
      intro:
        "Postulez à la première cohorte et faites vos premiers pas dans les données et l'IA.",
      waitlistIntro:
        'Les candidatures pour la première cohorte ouvrent bientôt. Laissez votre e-mail et nous vous préviendrons dès leur ouverture.',
      photoAlt:
        "Une jeune femme sourit devant son ordinateur portable, un cahier à côté d'elle",
      details: [
        {
          icon: 'checkCircle',
          title: 'Éligibilité',
          text: "Jeunes de toute l'Afrique.",
        },
        {
          icon: 'clock',
          title: 'Engagement',
          text: 'Environ 10 à 12 heures par semaine.',
        },
        {
          icon: 'wifi',
          title: 'Internet',
          text: 'Une connexion internet stable est nécessaire.',
        },
        {
          icon: 'calendar',
          title: 'Date limite de candidature',
          // DEV : la maquette indique « 31 mai 2025 (exemple) ». Mettre la vraie date.
          text: 'Date à confirmer.',
        },
      ],
      questions: {
        title: 'Des questions ?',
        text: "Contactez l'équipe.",
        cta: 'Nous contacter',
      },
    },
    footer: {
      tagline:
        "Former les jeunes Africains aux données et à l'IA grâce à un apprentissage gratuit, pratique et axé sur les projets.",
      navigation: 'Navigation',
      contact: 'Contact',
      rights: 'Tous droits réservés.',
      // DEV : brouillon, à valider avant la mise en ligne
      privacy:
        'Confidentialité : nous utilisons les informations de nos formulaires uniquement pour organiser le programme et vous tenir informé. Écrivez-nous pour les faire supprimer.',
    },
  },
};

// Helper function to get content by language
export function getContent(lang: Language): SiteContent {
  return content[lang];
}

// Main call to action, used by the header, hero, apply section and mobile bar.
// It points to the waitlist until applications open (see site-config.ts).
export function getMainCta(lang: Language) {
  const { cta, announcement } = content[lang];

  if (siteConfig.applicationsOpen) {
    return {
      href: siteConfig.applicationUrls[lang],
      label: cta.apply,
      status: announcement.open,
    };
  }

  return {
    href: siteConfig.waitlistUrls[lang],
    label: cta.waitlist,
    status: announcement.waitlist,
  };
}
