import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="accent-border rounded-lg p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 flex flex-col h-full"
    >
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
          >
            {tag}
          </span>
        ))}
      </div>

      {liveUrl && (
  <div className="flex justify-center">
    <Button
      size="sm"
      asChild
      className="bg-primary hover:bg-primary/90 text-primary-foreground"
    >
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="w-4 h-4 mr-2" />
        Live Demo
      </a>
    </Button>
  </div>
)}
    </motion.div>
  );
}