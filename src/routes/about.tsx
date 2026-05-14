import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AUTHOR } from "@/data/articles";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang Penulis — Lentera Digital" },
      { name: "description", content: `Profil singkat ${AUTHOR.name}, mahasiswa Sistem Informasi Universitas AMIKOM Yogyakarta.` },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Tentang Penulis</p>
        <h1 className="font-serif text-5xl text-primary leading-tight">{AUTHOR.name}</h1>
        <p className="mt-3 text-lg text-muted-foreground">NIM {AUTHOR.nim} · {AUTHOR.program}</p>

        <div className="mt-10 space-y-5 text-foreground/90 leading-relaxed">
          <p>
            Halo, saya {AUTHOR.name}, mahasiswa program studi Sistem Informasi di Universitas
            AMIKOM Yogyakarta. Blog ini saya buat untuk memenuhi tugas Ujian Tengah Semester
            mata kuliah <strong>Lingkungan Bisnis (SI012)</strong> tahun akademik 2025/2026.
          </p>
          <p>
            Fokus tulisan saya berkisar pada irisan antara teknologi, bisnis digital, dan
            pendidikan — tiga area yang saling memengaruhi dalam membentuk wajah ekonomi modern.
            Saya percaya bahwa mahasiswa Sistem Informasi memiliki posisi strategis untuk menjadi
            jembatan antara kompleksitas teknologi dan kebutuhan nyata dunia usaha.
          </p>
          <p>
            Setiap artikel disusun mengikuti struktur karya ilmiah dengan abstrak, pembahasan,
            dan daftar referensi agar dapat dipertanggungjawabkan secara akademik.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-border p-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Institusi</p>
            <a
              href="https://www.amikom.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block font-serif text-xl text-primary hover:text-accent"
            >
              Universitas AMIKOM Yogyakarta ↗
            </a>
            <p className="text-sm text-muted-foreground mt-1">www.amikom.ac.id</p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Mata Kuliah</p>
            <p className="mt-2 font-serif text-xl text-primary">Lingkungan Bisnis</p>
            <p className="text-sm text-muted-foreground mt-1">SI012 · 2 SKS · Semester Genap 2025/2026</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
