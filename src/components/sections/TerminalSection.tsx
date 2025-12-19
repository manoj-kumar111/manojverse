import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "@/components/SectionHeading";

const commands = [
  { command: "$ whoami", output: "manoj_kumar", delay: 0 },
  { command: "$ cat current_focus.txt", output: "", delay: 1000 },
  { command: "", output: "🚀 Building: AI-Powered Web Applications", delay: 1500 },
  { command: "", output: "📚 Learning: System Design & DevOps", delay: 2000 },
  { command: "", output: "🎯 Goal: Landing a SDE Role", delay: 2500 },
  { command: "$ cat interests.txt", output: "", delay: 3500 },
  { command: "", output: "- Full-Stack Development", delay: 4000 },
  { command: "", output: "- Data Structures & Algorithms", delay: 4300 },
  { command: "", output: "- AI/ML Integration", delay: 4600 },
  { command: "", output: "- Building Products", delay: 4900 },
  { command: "$ _", output: "", delay: 5500, cursor: true },
];

const TerminalSection = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;

    commands.forEach((cmd, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, cmd.delay);
    });
  }, [inView]);

  return (
    <section id="currently" className="py-24 relative bg-card/30">
      <div className="container px-6">
        <SectionHeading
          title="What I'm Building"
          subtitle="A peek into my current projects and learning journey"
        />

        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="terminal">
            {/* Terminal header */}
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-3 text-muted-foreground text-sm">manoj@portfolio ~ </span>
            </div>

            {/* Terminal content */}
            <div className="space-y-2 min-h-[300px]">
              {commands.map((line, index) => (
                <div
                  key={index}
                  className={`flex transition-all duration-300 ${
                    visibleLines.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}
                >
                  {line.command && (
                    <span className="text-primary font-mono">{line.command}</span>
                  )}
                  {line.output && (
                    <span className="text-foreground font-mono ml-2">
                      {line.output}
                    </span>
                  )}
                  {line.cursor && (
                    <span className="animate-blink text-primary">█</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack currently using */}
          <div className={`mt-8 flex flex-wrap justify-center gap-3 transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
            {["MERN Stack", "Next.js", "Gemini AI", "TypeScript", "DSA"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
