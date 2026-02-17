import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my security-focused portfolio.",
    metadata: {
      title: "Home",
      description: "Atharav Hedage's security engineering portfolio.",
    },
  },
  skills: {
    title: "Skills",
    description: "Security and technical skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Atharav Hedage's security and technical skills.",
    },
  },
  projects: {
    title: "Projects",
    description: "Security research, tools, and technical projects.",
    metadata: {
      title: "Projects",
      description: "Atharav Hedage's security and technical projects.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect for security roles and collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Atharav Hedage.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source and security community contributions.",
    metadata: {
      title: "Contributions",
      description:
        "Atharav Hedage's open-source and security contributions.",
    },
  },
  resume: {
    title: "Resume",
    description: "Atharav Hedage's resume.",
    metadata: {
      title: "Resume",
      description: "Atharav Hedage's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Atharav Hedage's professional experience and timeline.",
    },
  },
};
