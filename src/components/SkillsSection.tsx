import ScrollReveal from "./ScrollReveal";

const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C"],
  },
  {
    title: "Front-End",
    skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS"],
  },
  {
    title: "Back-End & Cloud",
    skills: ["Node.js", "Firebase", "MySQL", "Oracle Cloud"],
  },
  {
    title: "Other",
    skills: ["Data Structures", "Git", "REST APIs", "Accessibility"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Tech <span className="glow-text">Stack</span>
          </h2>
          <div className="neon-line w-20 mb-12" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.title} delay={i * 0.15} direction="scale">
              <div className="glass-card p-6 h-full hover:border-primary/30 transition-all duration-300 group">
                <h3 className="font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {group.title}
                </h3>
                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
