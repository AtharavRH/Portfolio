import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Application Security",
    description:
      "Identifying and mitigating vulnerabilities in web and application environments.",
    rating: 5,
    icon: Icons.shield,
  },
  {
    name: "Vulnerability Assessment",
    description:
      "Systematic evaluation of systems and code for security weaknesses.",
    rating: 5,
    icon: Icons.shield,
  },
  {
    name: "Python",
    description:
      "Scripting for automation, tooling, and security research.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Linux",
    description:
      "Working in Linux environments for security testing and administration.",
    rating: 4,
    icon: Icons.laptop,
  },
  {
    name: "Typescript",
    description:
      "Reading and writing TypeScript/JavaScript for secure development.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "Next.js",
    description:
      "Building and reviewing modern web applications.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Front-end development and understanding of client-side security.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Docker",
    description:
      "Containerization and secure deployment practices.",
    rating: 4,
    icon: Icons.laptop,
  },
  {
    name: "Git",
    description:
      "Version control and secure development workflows.",
    rating: 5,
    icon: Icons.gitRepoIcon,
  },
  {
    name: "Node.js",
    description:
      "Server-side JavaScript for APIs and tooling.",
    rating: 3,
    icon: Icons.nodejs,
  },
  {
    name: "AWS",
    description:
      "Cloud security and infrastructure on Amazon Web Services.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Tailwind CSS",
    description:
      "Styling and building responsive interfaces.",
    rating: 3,
    icon: Icons.tailwindcss,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
