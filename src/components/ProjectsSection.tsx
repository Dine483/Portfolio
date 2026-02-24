import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Storytelling AI Chatbot",
    desc: "AI-powered chatbot that generates and narrates cinematic stories, designed to support visually impaired film directors and writers.",
    tech: ["Python", "Audio Processing", "Assistive Tech", "Screen Readers"],
    features: ["AI storytelling", "Audio narration", "Accessibility-first design"],
  },
  {
    title: "AI Travel Reservation System",
    desc: "Voice-enabled airline ticket booking system with travel comparison based on cost, availability, and alternatives.",
    tech: ["Python", "Voice AI", "Travel APIs", "Firebase"],
    features: ["Voice-based booking", "Real-time availability", "Hands-free interaction"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="glow-text">Work</span>
          </h2>
          <div className="neon-line w-20 mb-12" />
        </ScrollReveal>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.2} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="glass-card p-8 md:p-10 hover:border-primary/30 transition-all duration-500 group">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-primary/40 font-display text-5xl font-bold">0{i + 1}</span>
                      <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{project.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-1">
                      {project.features.map((f) => (
                        <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 shrink-0">
                    <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
