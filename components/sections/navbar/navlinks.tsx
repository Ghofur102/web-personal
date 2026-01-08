export default function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-12 text-sm">
      <a
        className="hover:text-primary text-muted-foreground transition"
        href="#home"
      >
        Home
      </a>
      <a
        className="hover:text-primary text-muted-foreground transition"
        href="#journey"
      >
        Journey
      </a>
      <a
        className="hover:text-primary text-muted-foreground transition"
        href="#stack"
      >
        Stack
      </a>
      <a
        className="hover:text-primary text-muted-foreground transition"
        href="#contact"
      >
        Contact
      </a>
    </nav>
  );
}
