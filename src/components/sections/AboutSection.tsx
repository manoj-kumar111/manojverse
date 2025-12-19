import { useInView } from "react-intersection-observer";
import { Code2, Rocket, Layers, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { label: "Problems Solved", value: 400, suffix: "+", icon: Code2 },
  { label: "Projects Built", value: 5, suffix: "+", icon: Rocket },
  { label: "Tech Stack", value: 10, suffix: "+", icon: Layers },
  { label: "Years Coding", value: 3, suffix: "+", icon: Sparkles },
];

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <SectionHeading
          title="About Me"
          subtitle="Motivated and detail-oriented final-year CSE student at Chandigarh University"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-6">
              <GlassCard className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-4 text-gradient">
                    My Journey
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a final-year Computer Science Engineering student at Chandigarh University 
                    with strong foundations in software development, algorithms, and system programming.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm passionate about building full-stack web applications using the MERN stack 
                    and exploring AI-powered solutions. I have solved 400+ DSA problems across 
                    various competitive programming platforms.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Seeking opportunities to apply and expand my technical skills by contributing 
                    to innovative and high-impact engineering projects in a collaborative environment.
                  </p>
                </div>
              </GlassCard>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3">
                {["React.js", "Node.js", "MongoDB", "JavaScript", "C++", "Python"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="transition-all duration-500"
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <GlassCard 
                      className="text-center py-8"
                      glowColor={index % 2 === 0 ? "cyan" : "purple"}
                    >
                      <Icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                        className="text-4xl text-gradient block mb-2"
                      />
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </GlassCard>
                  </div>
                );
              })}
            </div>

            {/* Quote card */}
            <div className="mt-4">
              <GlassCard className="border-l-4 border-l-primary">
                <p className="text-muted-foreground italic">
                  "The best way to predict the future is to create it."
                </p>
                <p className="text-primary text-sm mt-2 font-medium">— Peter Drucker</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
