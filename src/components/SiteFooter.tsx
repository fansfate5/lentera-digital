import { AUTHOR } from "@/data/articles";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-5xl px-6 py-10 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <h3 className="font-serif text-xl text-primary mb-2">Lentera Digital</h3>
          <p className="text-muted-foreground leading-relaxed">
            Jurnal mahasiswa untuk tugas Ujian Tengah Semester mata kuliah Lingkungan Bisnis.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2 text-foreground">Penulis</h4>
          <p className="text-muted-foreground">{AUTHOR.name}</p>
          <p className="text-muted-foreground">NIM: {AUTHOR.nim}</p>
          <p className="text-muted-foreground">{AUTHOR.program}</p>
        </div>
        <div>
          <h4 className="font-medium mb-2 text-foreground">Tautan</h4>
          <a
            href="https://www.amikom.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-accent hover:underline"
          >
            www.amikom.ac.id ↗
          </a>
          <a
            href="https://amikom.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-muted-foreground hover:text-foreground"
          >
            Universitas AMIKOM Yogyakarta
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © 2026 {AUTHOR.name} · UTS Lingkungan Bisnis
      </div>
    </footer>
  );
}
