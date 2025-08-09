import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";

const navLink = "text-sm text-foreground/80 hover:text-foreground transition-colors";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="font-semibold text-lg">
          <span className="text-primary">Dr.</span> Amee Shah
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="/#about" className={navLink}>About</a>
          <a href="/#services" className={navLink}>Services</a>
          <a href="/#testimonials" className={navLink}>Testimonials</a>
          <a href="/#contact" className={navLink}>Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/dr-amee-shah-7bb66940/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-foreground/70 hover:text-primary"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/dr.amee_physio.at.home/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            className="text-foreground/70 hover:text-primary"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <Link to="/#contact">
            <Button size="sm" className="hidden sm:inline-flex">Book Consultation</Button>
          </Link>
        </div>
      </div>
      <div className="bg-secondary/60">
        <div className="container mx-auto flex items-center gap-3 py-2 text-xs md:text-sm">
          <span className="text-muted-foreground">Design variations:</span>
          <Link to="/" className="text-primary hover:underline">Serene</Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/design/minimal" className="text-primary hover:underline">Minimal</Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/design/elevated" className="text-primary hover:underline">Elevated</Link>
        </div>
      </div>
    </header>
  );
}
