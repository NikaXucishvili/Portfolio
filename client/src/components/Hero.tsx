import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onViewProjects?: () => void;
  onContactMe?: () => void;
}

export default function Hero({ onViewProjects, onContactMe }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with hero image */}
      <div
        className="absolute inset-0 grid-pattern"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663494092491/AsVkSPmdRn9fSLYZDR7VBC/hero-background-GmwpGu7krhvWh2ACKjWRRy.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 text-foreground"
          >
            Nikoloz Khutsishvili
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl gradient-text font-semibold mb-6"
          >
            Junior DevOps Engineer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto px-2"
          >
            Focused on automating deployment pipelines, managing Linux environments,
            and building scalable cloud infrastructure using AWS.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 px-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto"
              onClick={onViewProjects}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 font-semibold w-full sm:w-auto"
              onClick={onContactMe}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center cursor-pointer"
            onClick={onViewProjects}
          >
            <ArrowDown className="w-6 h-6 text-primary hover:text-secondary transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
