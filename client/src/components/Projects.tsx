import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SectionDivider from "./SectionDivider";

const projectsData = [
  {
    title: "Birthday Reminder Android App",
    description:
      "Android application with birthday management functionality. Import birthdays from contacts or add manually. Birthdays are sorted by closest upcoming date for quick visibility. Includes push notifications one day before and on the day of the birthday. Multi-language support: Georgian, English, and Russian.",
    tags: ["Android", "Java", "Firebase", "Mobile"],
    liveUrl: "https://play.google.com", // Play Store link
  },
  {
    title: "AWS Cloud Practitioner Hands-On Labs",
    description:
      "Comprehensive hands-on labs demonstrating AWS cloud infrastructure setup and management. Launched and configured EC2 instances with SSH access and security groups. Set up VPC with public/private subnets, NAT Gateway, and Internet Gateway. Configured CloudWatch alarms with SNS email notifications.",
    tags: ["AWS", "EC2", "VPC", "CloudWatch", "DevOps"],
  },
  {
    title: "College Spectre Website",
    description:
      "Developed responsive website for College Spectre using WordPress CMS. Installed and configured WordPress plugins for extended functionality. Customized themes and layouts using WordPress page builders to create a professional, modern web presence. Live on its own domain.",
    tags: ["WordPress", "PHP", "HTML/CSS", "Web Design"],
    liveUrl: "https://spectri.ge",
  },
];

export default function Projects() {
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
            Featured Projects
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-secondary"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              liveUrl={project.liveUrl}
              index={index}
            />
          ))}
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}