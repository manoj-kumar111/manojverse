import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const ParallaxBackground = () => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(smoothProgress, [0, 1], [0, shouldReduceMotion ? 0 : -300]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, shouldReduceMotion ? 0 : -500]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, shouldReduceMotion ? 0 : -200]);
  const y4 = useTransform(smoothProgress, [0, 1], [0, shouldReduceMotion ? 0 : -400]);
  const rotate1 = useTransform(smoothProgress, [0, 1], [0, shouldReduceMotion ? 0 : 45]);
  const rotate2 = useTransform(smoothProgress, [0, 1], [0, shouldReduceMotion ? 0 : -30]);
  const scale1 = useTransform(smoothProgress, [0, 0.5, 1], [1, shouldReduceMotion ? 1 : 1.2, shouldReduceMotion ? 1 : 0.8]);
  const scale2 = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, shouldReduceMotion ? 1 : 1.3]);
  const opacity1 = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.3, 0.6, 0.4, 0.2]);
  const opacity2 = useTransform(smoothProgress, [0, 0.5, 1], [0.2, 0.5, 0.3]);

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid pattern with parallax */}
      <motion.div
        className="absolute inset-0 grid-pattern"
        style={{ y: y3, opacity: 0.15, willChange: "transform" }}
      />

      {/* Large gradient orbs with different parallax speeds */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          top: "5%",
          left: "-10%",
          y: y1,
          scale: scale1,
          opacity: opacity1,
          willChange: "transform, opacity",
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--secondary) / 0.2) 0%, transparent 70%)",
          top: "30%",
          right: "-5%",
          y: y2,
          scale: scale2,
          rotate: rotate1,
          opacity: opacity2,
          willChange: "transform, opacity",
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 70%)",
          top: "60%",
          left: "20%",
          y: y4,
          rotate: rotate2,
          willChange: "transform",
        }}
      />

      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full blur-[90px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
          top: "80%",
          right: "15%",
          y: y1,
          scale: scale2,
          willChange: "transform",
        }}
      />

      {/* Floating geometric shapes with parallax */}
      <motion.div
        className="absolute w-32 h-32 border border-primary/10 rounded-2xl"
        style={{
          top: "15%",
          right: "20%",
          y: y2,
          rotate: rotate1,
        }}
      />

      <motion.div
        className="absolute w-24 h-24 border border-secondary/10 rounded-full"
        style={{
          top: "45%",
          left: "10%",
          y: y3,
          scale: scale1,
        }}
      />

      <motion.div
        className="absolute w-20 h-20 border border-accent/10"
        style={{
          top: "70%",
          right: "30%",
          y: y4,
          rotate: rotate2,
        }}
      />

      <motion.div
        className="absolute w-16 h-16 bg-primary/5 rounded-lg"
        style={{
          top: "25%",
          left: "30%",
          y: y1,
          rotate: rotate1,
        }}
      />

      <motion.div
        className="absolute w-12 h-12 bg-secondary/5 rounded-full"
        style={{
          top: "55%",
          right: "10%",
          y: y2,
          scale: scale2,
        }}
      />

      {/* Parallax lines */}
      <motion.div
        className="absolute w-px h-[200px] bg-gradient-to-b from-transparent via-primary/20 to-transparent"
        style={{
          top: "20%",
          left: "15%",
          y: y3,
        }}
      />

      <motion.div
        className="absolute w-px h-[150px] bg-gradient-to-b from-transparent via-secondary/15 to-transparent"
        style={{
          top: "40%",
          right: "25%",
          y: y4,
        }}
      />

      <motion.div
        className="absolute h-px w-[100px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        style={{
          top: "65%",
          left: "40%",
          y: y2,
        }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay opacity-30" />

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
    </div>
  );
};

export default ParallaxBackground;
