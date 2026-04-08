import { useRef } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleViewProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactMe = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero onViewProjects={handleViewProjects} onContactMe={handleContactMe} />
      <About />
      <Skills />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Experience />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
