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
      "Track eCrime and nation-state threat actors and ORB infrastructure targeting Meta; translate TTPs into detections and response guidance.",
      "Support live nation-state IR events (scoping to legal remediation), delivering real-time intel, threat analysis, and on-call investigation support.",
      "Partner with Red Team and Endpoint Protection Team to run adversary emulation and strengthen monitoring coverage.",
      "Lead TTP-driven threat hunts mapped to MITRE ATT&CK; translate adversary behaviors into durable detection opportunities and actionable playbooks.",
      "Design, implement, and maintain an RMM abuse control system for tracking, detection, and prevention.",
    ],
    achievements: [
      "Identified telemetry gaps and drove detection improvements.",
      "Drove rapid tuning for emerging threats and infection trends.",
    ],
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
      "Simulated 20+ critical CVEs to derive network and application indicators; shipped detection logic and validation test cases.",
      "Produced engineering-ready write-ups to support faster triage and response.",
      "Mapped AD and remote tooling abuse to MITRE ATT&CK and created repeatable detection content and briefings.",
    ],
    achievements: [
      "Delivered detection content for emerging CVE threats.",
    ],
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
      "Developed Python connector drivers for a PAM platform using gRPC/REST/SOAP, integrating with Cisco FTD/IOS, ServiceNow, and MongoDB Atlas.",
      "Contributed to OWASP-aligned cloud hardening guardrails in AWS.",
      "Customized Power BI dashboards and API/SQL queries to meet client reporting requirements.",
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
      "Built a GCP security testing environment with centralized log/metrics monitoring (Elastic/Kibana).",
      "Executed Nessus compliance scans to surface and report control gaps.",
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
      "Scoped engagements with clients; performed vulnerability assessment and penetration tests.",
      "Executed Web application, API, and Cloud penetration testing.",
    ],
    achievements: [],
    skills: ["Burp Suite", "OWASP", "Vulnerability Assessment", "Linux"],
    companyUrl: undefined,
    logo: undefined,
  },
];
