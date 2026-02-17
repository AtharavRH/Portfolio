export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

// Open-source and security community contributions
export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "CVE-2021-39628 – Android Security Vulnerability",
    contibutionDescription:
      "Reported a high-severity Android security flaw to Google; awarded $5,000 bounty and CVE designation. Vulnerability released in Android Security Bulletin (Priority P2, Severity S2).",
    repoOwner: "Google Security",
    link: "https://source.android.com/docs/security/bulletin",
  },
  {
    repo: "Bug Bounty Program Awards",
    contibutionDescription:
      "Acknowledged with total bounty worth $13,800 for vulnerability research and responsible disclosure on Bugcrowd and HackerOne.",
    repoOwner: "Bugcrowd / HackerOne",
    link: "https://www.bugcrowd.com/",
  },
  {
    repo: "Kratos – WordPress Malware Detection Pipeline",
    contibutionDescription:
      "Open-source automated framework for detecting malicious behaviors in nulled WordPress plugins using regex and AST signatures. Used in empirical study identifying 1,851 malicious plugins from 4,271 analyzed.",
    repoOwner: "AtharavRH",
    link: "https://github.com/AtharavRH/kratos",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
