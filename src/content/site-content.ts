import { siteConfig } from './site-config';
import type { Language } from './site-config';
import type { ImageMetadata } from 'astro';
import type { IconName } from '../components/icons';
// Charts of the two sample projects (see src/assets/projects/CREDITS.md)
import roadAccidentsChart from '../assets/projects/road-accidents-heatmap.png';
import churnChart from '../assets/projects/churn-confusion-matrices.png';

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
    // Read by screen readers after the Apply button (the form opens in a new tab)
    newTab: string;
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
    // The final project that joins both tracks (weeks 7 and 8)
    capstone: {
      title: string;
      text: string;
    };
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
    // Small tag saying the project was made by the team, not by learners
    exampleLabel: string;
    previous: string;
    next: string;
    items: Array<{
      category: string;
      title: string;
      text: string;
      // Source of the data, shown in small print under the text
      credit?: string;
      // Leave empty to hide the "View project" link
      href: string;
      example?: boolean;
      // Without src, a placeholder with the label is shown instead
      image: {
        label: string;
        tone: 'light' | 'dark';
        src?: ImageMetadata;
        alt?: string;
      };
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
      apply: 'Apply to the cohort',
      waitlist: 'Get notified',
      curriculum: 'See the curriculum',
      newTab: '(opens in a new tab)',
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
          text: 'In weeks 7 and 8, bring both tracks together in one capstone project and present it.',
        },
      ],
    },
    curriculum: {
      eyebrow: 'The curriculum',
      title: ['8 weeks.', '2 tracks.', '1 project.'],
      intro:
        'Everyone follows both tracks. Each week you have one data session and one AI session. The AI sessions only use Python you have already learned in the data track, so you can start from zero. In weeks 7 and 8, both tracks come together in one final project.',
      weekLabel: 'Week',
      leadLabel: 'Led by',
      leadLink: '(LinkedIn profile, opens in a new tab)',
      outcomesTitle: 'By the end, you can',
      toolsTitle: 'Tools you will use',
      tools: [
        'Python',
        'Jupyter',
        'Google Colab',
        'NumPy',
        'pandas',
        'Matplotlib',
        'seaborn',
        'scikit-learn',
      ],
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
          // Same outline as the Python for Data Analysis course notes
          weeks: [
            'Introduction and Python basics',
            'NumPy and data structures',
            'pandas fundamentals',
            'Data cleaning and preparation',
            'Exploratory data analysis',
            'Data visualisation',
            'Capstone: question, data and workflow',
            'Project presentation and discussion',
          ],
          outcomes: [
            'Write clear Python to load, clean and prepare messy data',
            'Select, filter, group and reshape data with NumPy and pandas',
            'Explore a dataset and back each finding with numbers',
            'Build clear charts and present your findings in a notebook',
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
            'Teach a computer to predict, classify and find groups in data, then check honestly how well it works.',
          // Each week only uses Python already taught in the data track
          weeks: [
            'What AI and ML are, no code yet',
            'How machines learn: features, labels, error',
            'First model: predicting a number',
            'Classification: predicting a category',
            'Better models: features, overfitting, comparison',
            'Finding groups and explaining results',
            'Generative AI, responsible AI, capstone plan',
            'Capstone: test, explain and present your model',
          ],
          outcomes: [
            'Explain in plain words how machines learn from data',
            'Train and test regression and classification models',
            'Compare models fairly and pick the right metric',
            "Use generative AI responsibly and know a model's limits",
          ],
        },
      ],
      capstone: {
        title: 'The capstone: one project, both tracks',
        text: "In weeks 7 and 8 you pick a real dataset on an issue you care about. You clean, explore and chart it with what the data track taught you, add one model from the AI track that predicts or groups something useful, then present your findings, the model's limits and one recommendation.",
      },
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
        'Two real projects from our team, one for each track, with the code open on GitHub. They show where the skills you learn here can take you.',
      // TODO: add the real links (a projects page or GitHub) when they exist
      seeMore: {
        label: 'See more projects',
        href: '',
      },
      viewProject: 'View on GitHub',
      newTab: '(opens in a new tab)',
      exampleLabel: 'Example by our team',
      previous: 'Previous projects',
      next: 'Next projects',
      items: [
        {
          category: 'Data analysis project',
          title: 'When and where road accidents happen',
          text: "Cleaning and exploring the UK's 2018 road accident records to find the riskiest hours, roads and hotspots, then turning the results into road-safety advice. The worst hour is 17:00 and the worst day is Friday.",
          credit:
            'Data: UK Department for Transport (STATS19), Open Government Licence v3.0.',
          href: 'https://github.com/Hugues-hash/msc-traffic-accident-data-mining',
          example: true,
          image: {
            label: 'Data visualisation',
            tone: 'light',
            src: roadAccidentsChart,
            alt: 'Heatmap of road accidents in 2018 by day of the week and hour. The darkest cells are weekday mornings around 8:00 and late afternoons around 17:00.',
          },
        },
        {
          category: 'AI / ML project',
          title: 'Predicting which customers will leave',
          text: "Models that predict a streaming customer's monthly spend and whether they will cancel, compared with clear metrics, plus customer groups a retention team could act on. The best churn model was right for 98% of test customers.",
          href: 'https://github.com/Hugues-hash/msc-customer-behaviour-analysis',
          example: true,
          image: {
            label: 'Model results',
            tone: 'dark',
            src: churnChart,
            alt: 'Confusion matrices of two churn models on 1,000 test customers. The random forest classifies 977 correctly and the neural network 982.',
          },
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
            'No. The program is beginner friendly. Week 1 starts with Python basics and setting up your tools, and the AI track begins without any code.',
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
          // DEV: add the dates here once they are fixed
          answer:
            'The dates are not set yet. You can already apply, and we will email you the dates as soon as they are fixed.',
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
      apply: 'Postuler à la cohorte',
      waitlist: 'Me prévenir',
      curriculum: 'Voir le curriculum',
      newTab: "(s'ouvre dans un nouvel onglet)",
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
          text: 'En semaines 7 et 8, réunissez les deux parcours dans un projet final et présentez-le.',
        },
      ],
    },
    curriculum: {
      eyebrow: 'Le curriculum',
      title: ['8 semaines.', '2 parcours.', '1 projet.'],
      intro:
        "Tout le monde suit les deux parcours. Chaque semaine, vous avez une session données et une session IA. Les sessions IA n'utilisent que le Python déjà vu dans le parcours données : vous pouvez partir de zéro. En semaines 7 et 8, les deux parcours se rejoignent dans un projet final.",
      weekLabel: 'Semaine',
      leadLabel: 'Animé par',
      leadLink: "(profil LinkedIn, s'ouvre dans un nouvel onglet)",
      outcomesTitle: 'À la fin, vous saurez',
      toolsTitle: 'Les outils utilisés',
      tools: [
        'Python',
        'Jupyter',
        'Google Colab',
        'NumPy',
        'pandas',
        'Matplotlib',
        'seaborn',
        'scikit-learn',
      ],
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
          // Même plan que le support de cours Python for Data Analysis
          weeks: [
            'Introduction et bases de Python',
            'NumPy et structures de données',
            'Les bases de pandas',
            'Nettoyage et préparation des données',
            'Analyse exploratoire des données',
            'Visualisation des données',
            'Projet final : question, données et démarche',
            'Présentation des projets et discussion',
          ],
          outcomes: [
            'Écrire du Python clair pour charger, nettoyer et préparer des données désordonnées',
            'Sélectionner, filtrer, regrouper et transformer des données avec NumPy et pandas',
            'Explorer un jeu de données et appuyer chaque constat sur des chiffres',
            'Créer des graphiques clairs et présenter vos résultats dans un notebook',
          ],
        },
        {
          title: 'Intelligence artificielle & Machine Learning',
          shortTitle: 'Intelligence artificielle & ML',
          // DEV : confirmer le format du nom, le rôle et l'URL LinkedIn
          lead: {
            name: 'Yao Gervais Amoah',
            role: 'Ingénieur en machine learning et formateur',
            linkedin: 'https://www.linkedin.com/in/gervais-amoah/',
          },
          summary:
            "Apprenez à un ordinateur à prédire, classer et trouver des groupes dans des données, puis vérifiez honnêtement ce qu'il vaut.",
          // Chaque semaine n'utilise que le Python déjà vu dans le parcours données
          weeks: [
            "L'IA et le ML, sans code pour commencer",
            'Comment une machine apprend : variables, étiquettes, erreur',
            'Premier modèle : prédire un nombre',
            'Classification : prédire une catégorie',
            'De meilleurs modèles : variables, surapprentissage, comparaison',
            'Trouver des groupes et expliquer les résultats',
            'IA générative, IA responsable, plan du projet final',
            'Projet final : tester, expliquer et présenter votre modèle',
          ],
          outcomes: [
            'Expliquer simplement comment une machine apprend des données',
            'Entraîner et tester des modèles de régression et de classification',
            'Comparer des modèles avec rigueur et choisir la bonne métrique',
            "Utiliser l'IA générative de façon responsable et connaître les limites d'un modèle",
          ],
        },
      ],
      capstone: {
        title: 'Le projet final : un projet, deux parcours',
        text: "En semaines 7 et 8, vous choisissez un vrai jeu de données sur un sujet qui vous tient à cœur. Vous le nettoyez, l'explorez et le mettez en graphiques avec ce que le parcours données vous a appris, vous ajoutez un modèle du parcours IA qui prédit ou regroupe quelque chose d'utile, puis vous présentez vos résultats, les limites du modèle et une recommandation.",
      },
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
        "Deux vrais projets de notre équipe, un par parcours, avec le code ouvert sur GitHub. Ils montrent jusqu'où les compétences apprises ici peuvent vous mener.",
      // TODO : ajouter les vrais liens (page projets ou GitHub) quand ils existeront
      seeMore: {
        label: 'Voir plus de projets',
        href: '',
      },
      viewProject: 'Voir sur GitHub',
      newTab: "(s'ouvre dans un nouvel onglet)",
      exampleLabel: "Exemple de l'équipe",
      previous: 'Projets précédents',
      next: 'Projets suivants',
      items: [
        {
          category: "Projet d'analyse de données",
          title: 'Quand et où se produisent les accidents de la route',
          text: "Nettoyer et explorer les accidents de la route de 2018 au Royaume-Uni pour repérer les heures, les routes et les zones les plus à risque, puis en tirer des conseils de sécurité routière. L'heure la plus touchée est 17 h et le jour le plus touché, le vendredi.",
          credit:
            'Données : ministère britannique des Transports (STATS19), Open Government Licence v3.0.',
          href: 'https://github.com/Hugues-hash/msc-traffic-accident-data-mining',
          example: true,
          image: {
            label: 'Data visualisation',
            tone: 'light',
            src: roadAccidentsChart,
            alt: "Carte de chaleur des accidents de la route de 2018 par jour de la semaine et par heure. Les cases les plus foncées sont les matins de semaine vers 8 h et les fins d'après-midi vers 17 h.",
          },
        },
        {
          category: 'Projet IA / ML',
          title: 'Prédire quels clients vont partir',
          text: "Des modèles qui prédisent les dépenses mensuelles des abonnés d'un service de streaming et s'ils vont résilier, comparés avec des métriques claires, plus des groupes de clients utiles pour la fidélisation. Le meilleur modèle a vu juste pour 98 % des clients de test.",
          href: 'https://github.com/Hugues-hash/msc-customer-behaviour-analysis',
          example: true,
          image: {
            label: 'Model results',
            tone: 'dark',
            src: churnChart,
            alt: 'Matrices de confusion de deux modèles de résiliation sur 1 000 clients de test. La forêt aléatoire en classe correctement 977 et le réseau de neurones 982.',
          },
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
            "Non. Le programme est accessible aux débutants. La semaine 1 commence par les bases de Python et l'installation des outils, et le parcours IA démarre sans code.",
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
          // DEV : ajouter les dates ici dès qu'elles sont fixées
          answer:
            "Les dates ne sont pas encore fixées. Vous pouvez déjà postuler, et nous vous enverrons les dates par e-mail dès qu'elles seront fixées.",
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
      newTab: cta.newTab,
    };
  }

  return {
    href: siteConfig.waitlistUrls[lang],
    label: cta.waitlist,
    status: announcement.waitlist,
    newTab: cta.newTab,
  };
}
