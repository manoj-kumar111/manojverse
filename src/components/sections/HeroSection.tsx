import { TypeAnimation } from "react-type-animation";
import { ArrowDown, FileText, Rocket, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Animated morphing orbs */}
      <div className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl top-[10%] left-[10%] animate-morph animate-float" />
      <div className="absolute w-80 h-80 rounded-full bg-secondary/10 blur-3xl top-[50%] right-[5%] animate-morph animate-float animation-delay-200" style={{ animationDelay: '2s' }} />
      <div className="absolute w-64 h-64 rounded-full bg-accent/10 blur-3xl bottom-[20%] left-[20%] animate-morph animate-float animation-delay-400" style={{ animationDelay: '4s' }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting badge */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight animate-fade-in">
            Hi, I'm{" "}
            <span className="text-gradient">Manoj Kumar</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in animation-delay-100">
            Computer Science Engineering Student
          </p>

          {/* Typing animation */}
          <div className="h-12 md:h-14 mb-10 animate-fade-in animation-delay-200">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "DSA Enthusiast",
                2000,
                "Problem Solver",
                2000,
                "AI Explorer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-mono text-primary"
            />
            <span className="animate-blink text-primary text-2xl md:text-3xl">|</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in animation-delay-300">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToProjects}
              className="group hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
            >
              <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              View Projects
            </Button>
            <Button 
              variant="hero-outline" 
              size="lg" 
              asChild
              className="group hover:scale-105 transition-all duration-300"
            >
              <a href="#contact">
                <FileText className="w-5 h-5 group-hover:-rotate-6 transition-transform duration-300" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in animation-delay-400">
            <a
              href="https://github.com/manojkumar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full border border-border/50 bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/manojkumar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full border border-border/50 bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:manojkumarraajbhar@gmail.com"
              aria-label="Email"
              className="p-3 rounded-full border border-border/50 bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-scroll-indicator">
          <div
            className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
