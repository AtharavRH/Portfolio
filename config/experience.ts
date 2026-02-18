import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "meta",
    position: "Security Engineer",
    company: "Meta",
    location: "Menlo Park, CA",
    startDate: new Date("2024-10-01"),
    endDate: "Present",
    description: [
      "Tracked eCrime and nation-state threat actors and ORB infrastructure targeting Meta; translated TTPs into detections and response guidance.",
      "Supported live nation-state IR events (from scoping to legal remediation), delivering real-time intel, threat analysis, and on-call investigation support.",
      "Partnered with internal teams (especially Red Team and Endpoint Protection Team) to run adversary emulation and strengthen monitoring coverage; identified telemetry gaps and drove detection improvements.",
      "Led TTP-driven threat hunts mapped to MITRE ATT&CK; translated adversary behaviors into durable detection opportunities and actionable playbooks/runbooks.",
      "Designed, implemented, and maintained an RMM abuse control system (tracking, detection, and prevention), improving visibility into RMM activity and strengthening protections against tooling misuse.",
      "Drove rapid tuning for emerging threats and infection trends to keep detections current.",
    ],
    achievements: [],
    skills: ["Python", "Linux", "Git", "Security Research", "Vulnerability Assessment"],
    companyUrl: "https://about.meta.com",
    logo: undefined,
  },
  {
    id: "extrahop",
    position: "Security Engineer",
    company: "ExtraHop",
    location: "Seattle, WA",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-10-01"),
    description: [
      "Simulated 20+ critical CVEs to derive network and application indicators, then shipped detection logic and validation test cases. Produced clear, engineering-ready write-ups to support faster triage and response.",
      "Mapped AD and remote tooling abuse to MITRE ATT&CK and created repeatable detection content and briefings.",
    ],
    achievements: [],
    skills: ["Python", "Linux", "Git", "Security Research", "Vulnerability Assessment"],
    companyUrl: "https://www.extrahop.com",
    logo: undefined,
  },
  {
    id: "gatech-gta",
    position: "Graduate Teaching Assistant",
    company: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-12-01"),
    description: [
      "Graduate Teaching Assistant for CS 6035 – Information Security (graduate-level course).",
      "Supported CTF, Malware, Crypto, and Web-Security labs (testing and tutoring).",
    ],
    achievements: [
      "100% scholarship and assistantship during M.S. program.",
    ],
    skills: ["Python", "Linux", "Git", "Security Research"],
    companyUrl: "https://www.gatech.edu",
    logo: undefined,
  },
  {
    id: "ey",
    position: "Cybersecurity Consultant Intern",
    company: "Ernst & Young",
    location: "United States",
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-07-01"),
    description: [
      "Developed Python connector drivers for a PAM platform using gRPC/REST/SOAP, integrating with Cisco FTD/IOS, ServiceNow, and MongoDB Atlas. Contributed to OWASP-aligned cloud hardening guardrails in AWS.",
      "Customized Power BI dashboards and API/SQL queries to meet client reporting requirements.",
      "Contributed to developing and on-boarding in-house tools on ESXi.",
    ],
    achievements: [
      "Completed ServiceNow task in ~4 days (expected 7 weeks) – recognized by managers.",
    ],
    skills: ["Python", "AWS", "Git", "OWASP"],
    companyUrl: "https://www.ey.com",
    logo: undefined,
  },
  {
    id: "tech-mahindra",
    position: "Cybersecurity Analyst Intern",
    company: "Tech Mahindra",
    location: "India",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2022-03-01"),
    description: [
      "Identified Log4Shell (Log4j) exposure, validated impact, and escalated remediation guidance.",
      "Built a GCP security testing environment with centralized log/metrics monitoring (Elastic/Kibana) and executed Nessus compliance scans to surface and report control gaps.",
      "Conducted Vulnerability Assessment and Penetration Testing using Burp Suite and Nessus; assisted in validating results.",
      "Member of the organization's cybersecurity club (Sneak It).",
    ],
    achievements: [
      "Internship Excellence Award (top 1 of 37).",
    ],
    skills: ["Python", "Linux", "Burp Suite", "OWASP", "Vulnerability Assessment"],
    companyUrl: "https://www.techmahindra.com",
    logo: undefined,
  },
  {
    id: "bluefire-redteam",
    position: "Cyber Security Analyst Intern",
    company: "Bluefire-Redteam",
    location: "India",
    startDate: new Date("2021-05-01"),
    endDate: new Date("2021-06-01"),
    description: [
      "Triaged security findings and documented Proof-of-Concepts and hardening guidance for clients.",
      "Contributed to designing security questionnaires and pen-testing checklists for Web-App, API, and Cloud.",
      "Contributed to research and threat intelligence.",
    ],
    achievements: [],
    skills: ["Burp Suite", "OWASP", "Vulnerability Assessment", "Security Research"],
    companyUrl: undefined,
    logo: undefined,
  },
  {
    id: "cyber-sniper",
    position: "Security Engineer",
    company: "Cyber Sniper Solutions",
    location: "Pune, India",
    startDate: new Date("2020-11-01"),
    endDate: new Date("2021-04-01"),
    description: [
      "Gathered clear and coherent data from clients to scope engagements.",
      "Performed vulnerability assessment and penetration tests, including Web application penetration testing, API penetration testing, and Cloud penetration testing.",
    ],
    achievements: [],
    skills: ["Burp Suite", "OWASP", "Vulnerability Assessment", "Linux"],
    companyUrl: undefined,
    logo: undefined,
  },
];

// Experiences to showcase on the homepage (Meta, ExtraHop, Ernst & Young)
export const featuredExperienceIds = ["meta", "extrahop", "ey"] as const;
