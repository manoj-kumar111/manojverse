import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Layers } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Smart Search AI",
    description: "AI-powered search engine that fetches real-time web results via Google Custom Search API and generates context-aware answers using Gemini 2.5 Flash LLM.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format",
    tech: ["React.js", "TypeScript", "Next.js", "MongoDB", "Gemini AI"],
    category: "AI",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "Full-stack MERN application with JWT authentication to create, update, and delete expenses organized by category with real-time updates.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    category: "Web",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "Responsive single-page application showcasing About, Education, Skills, Projects with card layout, and Contact sections using React components.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    category: "Web",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = ["All", "Web", "AI"];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <GlassCard className="group overflow-hidden p-0 h-full hover:scale-[1.02] transition-transform duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        
        {/* Overlay actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
          <Button variant="hero" size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <Badge variant="neon" className="text-xs">
            {project.category}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="tech" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my best work in full-stack development and AI"
        />

        {/* Category filter */}
        <div
          ref={ref}
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "hero" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category === "All" && <Layers className="w-4 h-4 mr-1" />}
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
