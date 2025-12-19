import { useInView } from "react-intersection-observer";
import { Code, Trophy, Star, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import AnimatedCounter from "@/components/AnimatedCounter";

const platforms = [
  {
    name: "HackerRank",
    username: "5★ C++",
    stats: [
      { label: "C++ Rating", value: 5, suffix: "★", icon: Star },
      { label: "Problems Solved", value: 100, suffix: "+", icon: Code },
    ],
    badges: ["5 Star C++", "Problem Solving"],
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "LeetCode",
    username: "@manojkumar",
    stats: [
      { label: "Problems Solved", value: 200, suffix: "+", icon: Code },
      { label: "Contest Participated", value: 10, suffix: "+", icon: Trophy },
    ],
    badges: ["DSA Expert", "Consistent Solver"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Other Platforms",
    username: "Various",
    stats: [
      { label: "Total Problems", value: 100, suffix: "+", icon: Code },
      { label: "Platforms Used", value: 5, suffix: "+", icon: Star },
    ],
    badges: ["CodeChef", "GeeksforGeeks", "Codeforces"],
    color: "from-blue-500 to-purple-500",
  },
];

const achievements = [
  { icon: Star, label: "5★ C++ HackerRank", year: "2024" },
  { icon: Code, label: "400+ DSA Problems Solved", year: "2024" },
  { icon: Trophy, label: "CGPA 7.27 at CU", year: "2024" },
  { icon: Award, label: "Full-Stack MERN Projects", year: "2024" },
];

const AchievementsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container px-6">
        <SectionHeading
          title="DSA & Achievements"
          subtitle="My competitive programming journey and notable accomplishments"
        />

        {/* Platform stats */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform, platformIndex) => (
            <div
              key={platform.name}
              className={`transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${platformIndex * 100}ms` }}
            >
              <GlassCard className="h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-display font-bold">{platform.name}</h3>
                    <p className="text-muted-foreground text-sm font-mono">
                      {platform.username}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center`}>
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-4 mb-6">
                  {platform.stats.map((stat) => {
                    const StatIcon = stat.icon;
                    return (
                      <div key={stat.label} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <StatIcon className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{stat.label}</span>
                        </div>
                        <AnimatedCounter
                          target={stat.value}
                          suffix={stat.suffix}
                          className="text-lg text-primary font-bold"
                          duration={1.5}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {platform.badges.map((badge) => (
                    <span
                      key={badge}
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${platform.color} text-white`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Key achievements */}
        <div className={`transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <GlassCard>
            <h3 className="text-2xl font-display font-bold mb-6 text-center text-gradient">
              Notable Achievements
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => {
                const AchIcon = achievement.icon;
                return (
                  <div
                    key={achievement.label}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <AchIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{achievement.label}</p>
                      <p className="text-muted-foreground text-xs">{achievement.year}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
