import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const skills = [
    {
      label: "Docker",
      desc: "Containerized deployments for consistency and portability",
      icon: <span className="text-primary font-bold">🐳</span>,
    },
    {
      label: "Kubernetes",
      desc: "Orchestration and cluster management for containerized apps",
      icon: <span className="text-primary font-bold">☸️</span>,
    },
    {
      label: "CI/CD",
      desc: "GitHub Actions pipelines and deployment automation",
      icon: <span className="text-primary font-bold">⚙️</span>,
    },
    {
      label: "Jenkins",
      desc: "Automated build, test, and CI/CD deployment pipelines with Jenkins",
      icon: <span className="text-primary font-bold">🔧</span>,
    },
    {
      label: "AWS",
      desc: "EC2, S3, IAM, VPC, CloudWatch, and SNS for scalable cloud infrastructure",
      icon: <span className="text-primary font-bold">☁️</span>,
    },
    {
      label: "Linux & Networking",
      desc: "System administration and network fundamentals",
      icon: <span className="text-primary font-bold">🐧</span>,
    },
    {
      label: "Front-End & Modern Web",
      desc: "React, responsive UI, modern web development practices",
      icon: <span className="text-primary font-bold">💻</span>,
    },
  ];

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
            About Me
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-secondary"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left side text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Junior DevOps Engineer with a background in IT Support and
              Front-End Development. I focus on building modern, responsive
              websites and automating deployment pipelines while managing Linux
              environments and scalable cloud infrastructure using AWS.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-primary font-semibold mb-2">
                  Cloud & Infrastructure
                </h3>
                <p className="text-muted-foreground">
                  AWS services like EC2, S3, IAM, VPC, CloudWatch, and SNS;
                  Linux system administration; and Kubernetes orchestration.
                </p>
              </div>

              <div>
                <h3 className="text-primary font-semibold mb-2">
                  CI/CD & Automation
                </h3>
                <p className="text-muted-foreground">
                  Proficient with GitHub Actions, Jenkins pipelines, Bash
                  scripting, and Git version control to automate deployments and
                  infrastructure tasks.
                </p>
              </div>

              <div>
                <h3 className="text-primary font-semibold mb-2">
                  IT Fundamentals
                </h3>
                <p className="text-muted-foreground">
                  Strong knowledge of Linux systems, networking basics, and
                  system administration. Always learning and exploring new
                  technologies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side cards */}
          <motion.div
            variants={itemVariants}
            className="accent-border rounded-lg p-8 bg-card/50 backdrop-blur-sm"
          >
            <div className="space-y-6">
              {skills.map(({ label, desc, icon }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {label}
                    </h4>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <SectionDivider />
    </section>
  );
}
