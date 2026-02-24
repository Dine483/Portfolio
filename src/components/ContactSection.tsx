import ScrollReveal from "./ScrollReveal";
import { Mail, Phone, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";
const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      e.currentTarget,
      "YOUR_PUBLIC_KEY"
    )
    .then(
      () => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message");
        console.error(error);
      }
    );

  e.currentTarget.reset();
};

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's <span className="glow-text">Connect</span>
          </h2>
          <div className="neon-line w-20 mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I'm always open to new opportunities, collaborations, and conversations about tech, AI, and space. Feel free to reach out!
            </p>

            <div className="space-y-5">
              <a href="mailto:dineshshankarmpm@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">dineshshankarmpm@gmail.com</p>
                </div>
              </a>

              <a href="tel:7904010216" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">7904010216</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/dinesh-s-b99b732a3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">Dinesh S</p>
                </div>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3.5 bg-primary text-primary-foreground font-display font-medium text-sm rounded-lg hover:shadow-[0_0_30px_hsl(185_80%_55%/0.3)] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
