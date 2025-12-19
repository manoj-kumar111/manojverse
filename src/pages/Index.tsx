import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import TerminalSection from "@/components/sections/TerminalSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <ParallaxBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <AchievementsSection />
      <TerminalSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
