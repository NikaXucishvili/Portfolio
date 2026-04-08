import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "Nikoloz.xucishvili655@gmail.com",
      href: "mailto:Nikoloz.xucishvili655@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/NikaXucishvili",
      href: "https://github.com/NikaXucishvili",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nika-khutsishvili",
      href: "https://linkedin.com/in/nika-khutsishvili-a54a3235",
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
            Get In Touch
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-secondary"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12 px-4"
        >
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-12 px-4 sm:px-0">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="accent-border rounded-lg p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 text-center"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">
                  {method.label}
                </h3>
                <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {method.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            asChild
          >
            <a
              href="mailto:Nikoloz.xucishvili655@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Nika,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0D%0A%0D%0ARegards,"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Me an Email
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
