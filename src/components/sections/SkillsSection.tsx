import { useInView } from "react-intersection-observer";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 90 },
      { name: "Java", level: 75 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "JWT Auth", level: 80 },
      { name: "Next.js", level: 70 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 90 },
      { name: "Vercel", level: 80 },
      { name: "Postman", level: 80 },
    ],
  },
  {
    title: "Core CS",
    skills: [
      { name: "Data Structures and Algorithms", level: 90 },
      { name: "Object Oriented Programming", level: 85 },
      { name: "Database Management System", level: 80 },
      { name: "Operating System", level: 75 },
      { name: "Computer Networks", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-primary font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
          style={{ 
            width: inView ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container px-6">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A comprehensive overview of my technical expertise and proficiency levels"
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <GlassCard className="h-full">
                <h3 className="text-lg font-display font-bold mb-6 text-gradient">
                  {category.title}
                </h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 100 + skillIndex * 50}
                  />
                ))}
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
