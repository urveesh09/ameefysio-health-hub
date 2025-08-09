export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dr. Amee Shah. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a href="/#about" className="hover:underline">About</a>
          <a href="/#services" className="hover:underline">Services</a>
          <a href="/#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
