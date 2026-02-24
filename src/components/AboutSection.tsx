import ScrollReveal from "./ScrollReveal";
import { Code, Brain, Rocket } from "lucide-react";

const highlights = [
  { icon: Code, label: "Full Stack Dev", desc: "React, Node.js, Firebase" },
  { icon: Brain, label: "AI & ML", desc: "Python, Machine Learning" },
  { icon: Rocket, label: "Space Tech", desc: "Aviation & Astronomy" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Crafting the <span className="glow-text">Future</span>
          </h2>
          <div className="neon-line w-20 mb-8" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Passionate web developer with a strong foundation in Python, AI, Java, HTML5, CSS3, JavaScript, React.js, and MySQL, along with solid knowledge of data structures. Experienced in building responsive, user-centric web applications using Firebase for backend integration.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Actively exploring AI, machine learning, and their applications in space and aviation domains. I believe in creating technology that is both innovative and accessible to everyone.
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.label} delay={0.3 + i * 0.15} direction="right">
                <div className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
