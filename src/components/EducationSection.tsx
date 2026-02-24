import ScrollReveal from "./ScrollReveal";
import { GraduationCap } from "lucide-react";

const coursework = [
  "Web Development Essentials",
  "Object-Oriented Programming",
  "DBMS",
  "React.js",
  "Firebase Backend Services",
];

const EducationSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Education</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Academic <span className="glow-text">Journey</span>
          </h2>
          <div className="neon-line w-20 mb-12" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass-card p-8 md:p-10 max-w-3xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  B.E. Computer Science Engineering
                </h3>
                <p className="text-primary text-sm font-medium mt-1">Panimalar Engineering College, Chennai</p>
                <p className="text-muted-foreground text-sm">Expected Graduation: May 2027</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3 font-display">
                Concentrations
              </p>
              <ul className="text-muted-foreground text-sm space-y-1 mb-6">
                <li>• Full Stack Web Development</li>
                <li>• Front-End & Back-End Integration</li>
                <li>• Responsive Web Design & Application Deployment</li>
              </ul>

              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3 font-display">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EducationSection;
