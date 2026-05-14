import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl font-medium text-primary group-hover:text-accent transition-colors">
            Lentera Digital
          </span>
          <span className="text-xs uppercase tracking-widest text-muted-foreground hidden sm:inline">
            Jurnal Mahasiswa
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            to="/"
            activeProps={{ className: "text-primary font-medium" }}
            activeOptions={{ exact: true }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Beranda
          </Link>
          <Link
            to="/about"
            activeProps={{ className: "text-primary font-medium" }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Tentang
          </Link>
          <a
            href="https://www.amikom.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent/40 px-4 py-1.5 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            amikom.ac.id ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
