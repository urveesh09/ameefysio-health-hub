import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";

const navLink = "text-sm text-foreground/80 hover:text-foreground transition-colors";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/design/elevated" className="font-semibold text-lg">
          <span className="text-primary">Dr.</span> Amee Shah
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/design/elevated#about" className={navLink}>About</Link>
          <Link to="/design/elevated#services" className={navLink}>Services</Link>
          <Link to="/design/elevated#testimonials" className={navLink}>Testimonials</Link>
          <Link to="/design/elevated#contact" className={navLink}>Contact</Link>
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
          <Link to="/design/elevated#contact">
            <Button size="sm" className="hidden sm:inline-flex">Book Consultation</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
