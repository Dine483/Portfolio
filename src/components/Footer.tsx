const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          C
        </p>
        <p className="text-xs text-muted-foreground/60">
          Built with React • Tailwind CSS • Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
