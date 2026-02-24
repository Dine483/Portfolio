import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles, Globe, Cpu } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile.jpg";

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/30"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.3, 1],
    }}
    transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay }}
  />
);

const OrbitRing = ({ size, duration, delay }: { size: number; duration: number; delay: number }) => (
  <motion.div
    className="absolute rounded-full border border-primary/10"
    style={{ width: size, height: size, left: "50%", top: "50%", marginLeft: -size / 2, marginTop: -size / 2 }}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear", delay }}
  >
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-primary/50"
      style={{ top: -4, left: "50%", marginLeft: -4 }}
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.div>
);

const letterVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: 0.4 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const name = "Dinesh S";

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const particles = [
    { delay: 0, x: "10%", y: "20%", size: 4 },
    { delay: 1.2, x: "85%", y: "15%", size: 3 },
    { delay: 0.5, x: "70%", y: "70%", size: 5 },
    { delay: 2, x: "20%", y: "80%", size: 3 },
    { delay: 1.5, x: "90%", y: "50%", size: 4 },
    { delay: 0.8, x: "40%", y: "10%", size: 3 },
    { delay: 2.5, x: "60%", y: "85%", size: 4 },
    { delay: 1, x: "5%", y: "55%", size: 3 },
  ];

  const statBadges = [
    { icon: Sparkles, label: "AI Enthusiast" },
    { icon: Globe, label: "Accessibility First" },
    { icon: Cpu, label: "Full Stack" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0"
        style={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }}
      >
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30 scale-110" />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      {/* Glowing orb (top right) */}
      <motion.div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          x: mousePos.x * -0.5,
          y: mousePos.y * -0.5,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-display text-primary tracking-wider uppercase">
                Available for opportunities
              </span>
            </motion.div>

            {/* Animated name */}
            <div className="overflow-hidden mb-2">
              <h1 className="text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-display font-bold leading-[0.9] tracking-tight">
                {name.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block ${char === " " ? "w-4 md:w-6" : ""} ${
                      i >= name.indexOf("S") ? "glow-text" : "text-foreground"
                    }`}
                    style={{ perspective: 500 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Role with animated line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
                className="neon-line w-12 origin-left"
              />
              <p className="text-primary/80 font-display text-sm md:text-base tracking-[0.15em] uppercase">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
            >
              Crafting <span className="text-foreground font-medium">accessible</span>, innovative web experiences at the intersection of{" "}
              <span className="text-foreground font-medium">AI</span> &{" "}
              <span className="text-foreground font-medium">emerging technology</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-xl hover:shadow-[0_0_40px_hsl(185_80%_55%/0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 border border-border/60 text-foreground font-display font-medium text-sm rounded-xl hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Mini badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {statBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + i * 0.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/80 border border-border/40 backdrop-blur-sm"
                >
                  <badge.icon className="w-3.5 h-3.5 text-primary/70" />
                  <span className="text-xs text-muted-foreground">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Interactive visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[380px] h-[380px] xl:w-[440px] xl:h-[440px]">
              {/* Orbiting rings */}
              <OrbitRing size={380} duration={25} delay={0} />
              <OrbitRing size={300} duration={18} delay={0.5} />
              <OrbitRing size={220} duration={12} delay={1} />

              {/* Central element */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ x: mousePos.x * 0.2, y: mousePos.y * 0.2 }}
              >
                <div className="relative">
                  {/* Glow backdrop */}
                  <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl scale-150" />

                  {/* Main card */}
                  <motion.div
                    className="relative w-44 h-47 xl:w-52 xl:h-55 rounded-3xl bg-gradient-to-br from-surface via-card to-surface border border-primary/20 flex items-center justify-center overflow-hidden"
                    animate={{ rotateY: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    style={{ perspective: 800 }}
                  >
                    {/* Inner pattern */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)",
                      backgroundSize: "16px 16px",
                    }} />

                    <div className="relative text-center">
                      <img
                       src={profilePhoto}
                             alt="Dinesh profile"
                                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-6 border-4 border-primary shadow-lg"
                                  />
                      <span className="text-7xl xl:text-8xl font-display font-bold glow-text"></span>
                      <motion.div
                        className="neon-line w-10 mx-auto mt-2"
                        animate={{ scaleX: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>

                  {/* Floating mini cards */}
                  <motion.div
                    className="absolute -top-6 -right-8 px-3 py-2 rounded-lg bg-card/90 border border-border/50 backdrop-blur-xl shadow-lg"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary/80" />
                      <span className="text-[10px] text-muted-foreground font-display">React.js</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-10 px-3 py-2 rounded-lg bg-card/90 border border-border/50 backdrop-blur-xl shadow-lg"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-[10px] text-muted-foreground font-display">Python AI</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -right-14 px-3 py-2 rounded-lg bg-card/90 border border-border/50 backdrop-blur-xl shadow-lg"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary/60" />
                      <span className="text-[10px] text-muted-foreground font-display">Firebase</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.3em] font-display">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5 text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
