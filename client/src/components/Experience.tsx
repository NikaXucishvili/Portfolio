import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import { Briefcase, BookOpen } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      icon: Briefcase,
      title: "Front-End Developer",
      subtitle: "College Spectre Website",
      period: "Sep 2024 - Dec 2024",
      description:
        "Developed responsive website using WordPress CMS. Installed and configured WordPress plugins for extended functionality. Customized themes and layouts using WordPress page builders.",
      highlights: [
        "WordPress CMS development",
        "Plugin configuration and customization",
        "Responsive web design",
        "Page builder implementation",
      ],
    },
    {
      icon: BookOpen,
      title: "AWS Cloud Practitioner Certification",
      subtitle: "Udemy - Stephane Maarek",
      period: "Completed March 2026",
      description:
        "Comprehensive AWS certification course covering cloud fundamentals, EC2, S3, VPC, IAM, and other core AWS services. Hands-on labs and real-world scenarios.",
      highlights: [
        "AWS EC2 and VPC configuration",
        "S3 bucket management",
        "IAM users and permissions",
        "CloudWatch and monitoring",
      ],
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
            Experience & Learning
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-secondary"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="accent-border rounded-lg p-6 md:p-8 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">{exp.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {exp.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}
