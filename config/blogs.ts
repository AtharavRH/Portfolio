export interface BlogInterface {
  id: string;
  title: string;
  description: string;
  blogLink: string;
  publishedDate: Date;
  thumbnail: string;
  category: string[];
}

export const blogs: BlogInterface[] = [
  {
    id: "malware-analysis-guide",
    title: "Malware Analysis: A Comprehensive Guide to Static & Dynamic Analysis",
    description:
      "Deep dive into malware analysis techniques, including static analysis using IDA Pro, dynamic analysis in isolated environments, and reverse engineering strategies.",
    blogLink: "https://example.com/malware-analysis-guide",
    publishedDate: new Date("2023-11-15"),
    thumbnail: "/logo.png",
    category: ["Security", "Malware Analysis"],
  },
  {
    id: "secure-coding-practices",
    title: "Secure Coding Practices: Building Resilient Applications",
    description:
      "Explore essential secure coding principles, OWASP Top 10 mitigation strategies, input validation, authentication, and cryptography best practices.",
    blogLink: "https://example.com/secure-coding-practices",
    publishedDate: new Date("2023-10-20"),
    thumbnail: "/logo.png",
    category: ["Security", "Application Security"],
  },
  {
    id: "threat-hunting-101",
    title: "Threat Hunting 101: Proactive Threat Detection Strategies",
    description:
      "Learn proactive threat hunting methodologies, hypothesis-driven investigations, data analysis techniques, and how to leverage MITRE ATT&CK for threat detection.",
    blogLink: "https://example.com/threat-hunting-101",
    publishedDate: new Date("2023-09-10"),
    thumbnail: "/logo.png",
    category: ["Security", "Threat Intelligence"],
  },
];

export const featuredBlogs = blogs.slice(0, 3);
