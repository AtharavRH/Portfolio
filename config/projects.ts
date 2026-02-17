import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "wordpress-kratos-analysis",
    companyName: "Empirical Study of Malware in Nulled WordPress Plugins (Kratos)",
    type: "Personal",
    category: ["Security", "Application Security", "Research"],
    shortDescription:
      "Empirical study on malware in nulled WordPress plugin marketplaces. Identified 1,851 malicious plugins from 4,271 analyzed. Developed Kratos, an automated framework for detecting malicious behaviors in plugin code using regex and AST signatures.",
    githubLink: "https://github.com/AtharavRH/kratos",
    techStack: ["Python", "PHP", "Linux", "Git", "Docker", "Security Research"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-05-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Research & Framework",
        description:
          "Study of three distribution channels: web-based marketplaces, Telegram, and Torrents. Kratos combines regex and AST-based behavioral signatures.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Content Management Systems power over 68% of the web, with WordPress controlling nearly 60% of the CMS market. Nulled (pirated) plugins are distributed through web marketplaces, Telegram, and torrents—and attackers often inject malware into these packages. This research studied 4,271 plugins across these channels and flagged 1,851 as malicious (~43% malicious rate).",
        "Kratos is an automated malware detection pipeline tailored for CMS plugin files. It targets PHP malware, uses MIME-type identification (not file extensions), and combines regex-based signatures with AST-derived semantic signatures. The framework was bundled in Docker for reproducible, isolated analysis runs.",
      ],
      bullets: [
        "Analyzed 4,271 nulled WordPress plugins; identified 1,851 malicious (~43%).",
        "Developed Kratos: regex + AST signatures for PHP malware (API abuse, downloaders, blackhat SEO, gated backdoors, spam injection).",
        "Distribution channels studied: web marketplaces (vestathemes, wptry, wplocker), Telegram, Torrents.",
        "Paper: 'Hidden in Plain Sight: An Empirical Study of Malware in Nulled WordPress Plugins' (co-authored at Georgia Tech).",
      ],
    },
  },
  {
    id: "secure-cloud-storage",
    companyName: "Secure Shared Cloud Storage and Communication",
    type: "Personal",
    category: ["Security", "Backend", "Research"],
    shortDescription:
      "Secure Cloud Storage Framework with distributed systems security. Utilized certificates, mutual authentication, and encrypted communication channels for secure document storage, retrieval, and access control.",
    techStack: ["Python", "Flask", "Linux", "Git", "Security Research"],
    startDate: new Date("2020-08-01"),
    endDate: new Date("2021-03-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Architecture",
        description:
          "Distributed systems security with certificates, mutual authentication, and encrypted channels for multi-user document storage.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a Secure Cloud Storage Framework emphasizing distributed systems security. The system uses certificates, mutual authentication, and encrypted communication channels (OpenSSL, AES, RSA) to enable secure document storage, retrieval, and access control for multiple users.",
      ],
      bullets: [
        "Utilized certificates and mutual authentication for secure access control.",
        "Encrypted communication channels (OpenSSL, AES, RSA) for data confidentiality and integrity.",
        "Multi-user secure document storage, retrieval, and access control.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
