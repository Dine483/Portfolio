import ScrollReveal from "./ScrollReveal";
import { Award, Users, BookOpen } from "lucide-react";

const achievements = [
  {
    icon: Users,
    title: "Astronomy Education in Rural India",
    desc: "Presented at Youth Astronomy Space Society, Tamil Nadu.",
  },
  {
    icon: Award,
    title: "Deloitte & Google Certifications",
    desc: "Completed Deloitte Data Analytics Simulation (Forage) and Google × Kaggle AI Agents Intensive Course.",
  },
  {
    icon: BookOpen,
    title: "Space Science Community",
    desc: "Active member contributing to space science education and outreach.",
  },
];

const AchievementsSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Achievements</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Milestones <span className="glow-text">& Leadership</span>
          </h2>
          <div className="neon-line w-20 mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.15} direction="scale">
              <div className="glass-card p-7 h-full hover:border-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <a.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
