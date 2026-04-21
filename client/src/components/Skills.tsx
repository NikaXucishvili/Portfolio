import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import SectionDivider from "./SectionDivider";
import {
  Code2,
  Database,
  GitBranch,
  Terminal,
  Zap,
  Layers,
  Settings,
  Box,
} from "lucide-react";

const skillsData = [
  {
    category: "Core DevOps & Cloud",
    skills: [
      { icon: Box, name: "Docker", description: "Containerization & images" },
      {
        icon: Layers,
        name: "Kubernetes",
        description: "Container orchestration & clusters",
      },
      {
        icon: Box,
        name: "AWS",
        description: "EC2, S3, IAM, VPC, CloudWatch, SNS",
      },
      {
        icon: Terminal,
        name: "Linux",
        description: "Ubuntu system administration",
      },
      {
        icon: Settings,
        name: "Git",
        description: "Version control & workflows",
      },
      {
        icon: GitBranch,
        name: "GitHub Actions",
        description: "CI/CD automation",
      },
      {
        icon: Settings,
        name: "Jenkins",
        description: "CI/CD build & deployment pipelines",
      },
    ],
  },
  {
    category: "Networking & Security",
    skills: [
      { icon: Zap, name: "TCP/IP, UDP", description: "Network protocols" },
      { icon: Terminal, name: "SSH, DNS", description: "Network tools" },
      { icon: Settings, name: "Security Groups", description: "AWS security" },
      {
        icon: Database,
        name: "NACL Rules",
        description: "Network access control",
      },
    ],
  },
  {
    category: "Automation & Scripting",
    skills: [
      { icon: Code2, name: "Bash", description: "Shell scripting" },
      {
        icon: Zap,
        name: "JavaScript (ES6+)",
        description: "Scripting & automation",
      },
      { icon: Terminal, name: "REST APIs", description: "API integration" },
      {
        icon: Settings,
        name: "Troubleshooting",
        description: "System diagnostics",
      },
      {
        icon: GitBranch,
        name: "CI/CD",
        description: "Continuous Integration & Deployment pipelines",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
            Skills & Expertise
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-secondary"></div>
        </motion.div>

        {skillsData.map((skillGroup, groupIndex) => (
          <div key={skillGroup.category} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-primary mb-6"
            >
              {skillGroup.category}
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {skillGroup.skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  description={skill.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <SectionDivider />
    </section>
  );
}
