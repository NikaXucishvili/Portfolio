import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  description?: string;
  index?: number;
}

export default function SkillCard({
  icon: Icon,
  name,
  description,
  index = 0,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="accent-border rounded-lg p-4 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-6 h-6 text-primary" />
        <h3 className="font-semibold text-foreground">{name}</h3>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}
