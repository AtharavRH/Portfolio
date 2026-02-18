import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

// Update with your real LinkedIn, GitHub, and email from your resume/KnowledgeBase
export const SocialLinks: SocialInterface[] = [
  {
    name: "GitHub",
    username: "@AtharavRH",
    icon: Icons.gitHub,
    link: "https://github.com/AtharavRH",
  },
  {
    name: "LinkedIn",
    username: "Atharav Hedage",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/atharav-rh/",
  },
  {
    name: "Gmail",
    username: "atharavhedage55@gmail.com",
    icon: Icons.gmail,
    link: "mailto:atharavhedage55@gmail.com",
  },
];
