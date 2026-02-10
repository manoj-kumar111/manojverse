import { useInView } from "react-intersection-observer";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const timelineData = [
  {
    type: "education",
    title: "B.E. in Computer Science & Engineering",
    organization: "Chandigarh University, India",
    date: "2022 - Present",
    description: "CGPA: 7.30 | Specializing in software development and algorithms",
    icon: GraduationCap,
  },
  {
    type: "education",
    title: "Class XII (Senior Secondary)",
    organization: "SSD Senior Secondary School, Punjab",
    date: "2021",
    description: "Scored 87.8% in Punjab Board examinations",
    icon: GraduationCap,
  },
  {
    type: "education",
    title: "Class X (Secondary)",
    organization: "SSD Senior Secondary School, Punjab",
    date: "2019",
    description: "Scored 84.8% in Punjab Board examinations",
    icon: GraduationCap,
  },
  {
    type: "achievement",
    title: "5★ in C++ at HackerRank",
    organization: "HackerRank",
    date: "2024",
    description: "Achieved 5-star rating in C++ programming on HackerRank platform",
    icon: Award,
  },
  {
    type: "achievement",
    title: "400+ DSA Problems Solved",
    organization: "Various Platforms",
    date: "2024",
    description: "Solved over 400 Data Structures and Algorithms problems across competitive programming platforms",
    icon: Award,
  },
];

const TimelineSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="container px-6">
        <SectionHeading
          title="Education & Achievements"
          subtitle="My academic journey and notable accomplishments"
        />

        <div ref={ref} className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Content card */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card p-6 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.type === "education" 
                          ? "bg-gradient-to-r from-primary to-accent" 
                          : "bg-gradient-to-r from-secondary to-neon-pink"
                      } text-primary-foreground capitalize`}>
                        {item.type}
                      </span>
                      <span className="text-muted-foreground text-sm font-mono">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {item.organization}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Icon node */}
                <div 
                  className={`absolute left-8 md:left-1/2 w-16 h-16 flex items-center justify-center transform -translate-x-1/2 transition-all duration-500 ${inView ? 'scale-100' : 'scale-0'}`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className={`w-12 h-12 rounded-full ${
                    item.type === "education" 
                      ? "bg-gradient-to-r from-primary to-accent" 
                      : "bg-gradient-to-r from-secondary to-neon-pink"
                  } flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
