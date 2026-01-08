import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

type NavLinksMobileProps = {
  onNavigate: () => void;
};

export default function NavLinks_Mobile({ onNavigate }: NavLinksMobileProps) {
  return (
    <nav className="flex flex-col text-center gap-4 md:hidden text-sm">
      <a
        className="hover:text-primary text-muted-foreground transition"
        href="#home"
        onClick={onNavigate}
      >
        Home
      </a>
      <a
        className="hover:text-primary text-muted-foreground transition"
        href="#journey"
        onClick={onNavigate}
      >
        Journey
      </a>
      <a
        className="hover:text-primary text-muted-foreground transition"
        href="#stack"
        onClick={onNavigate}
      >
        Stack
      </a>
      <a
        className="hover:text-primary text-muted-foreground transition"
        href="#contact"
        onClick={onNavigate}
      >
        Contact
      </a>
      <div className="w-full flex flex-row gap-2 justify-center">
        <Button
          variant="default"
          size="icon"
          className="rounded-full text-black bg-white "
        >
          <Github className="w-5 h-5" />
        </Button>

        <Button variant="outline" size="default" className="rounded-full px-4">
          NIGHT
        </Button>
      </div>
    </nav>
  );
}
