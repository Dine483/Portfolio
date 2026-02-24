import ScrollReveal from "./ScrollReveal";
import { Monitor, Paintbrush, Zap } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Front-End Development",
    desc: "Building responsive, accessible, and modern user interfaces with clean code and pixel-perfect design.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Focus",
    desc: "Crafting intuitive user experiences with attention to performance, usability, and accessibility.",
  },
  {
    icon: Zap,
    title: "Modern Frameworks",
    desc: "Experience with React.js, Tailwind CSS, and modern UI libraries for rapid, scalable development.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Services</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What I <span className="glow-text">Do</span>
          </h2>
          <div className="neon-line w-20 mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.15}>
              <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
