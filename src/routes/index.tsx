import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { articles, AUTHOR } from "@/data/articles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lentera Digital — Jurnal Mahasiswa AMIKOM" },
      { name: "description", content: "Kumpulan karya ilmiah mahasiswa Sistem Informasi AMIKOM mengenai pendidikan, bisnis digital, dan teknologi AI." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            UTS Lingkungan Bisnis · 2025/2026
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-primary max-w-3xl">
            Menelaah dunia melalui lensa{" "}
            <em className="text-accent not-italic">bisnis, teknologi, dan pendidikan.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Karya ilmiah ringkas oleh {AUTHOR.name} ({AUTHOR.nim}), mahasiswa Sistem Informasi
            Universitas{" "}
            <a
              href="https://www.amikom.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 hover:text-primary"
            >
              AMIKOM Yogyakarta
            </a>
            .
          </p>
        </section>

        {/* Articles list */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="flex items-baseline justify-between mb-8 border-b border-border pb-4">
            <h2 className="font-serif text-2xl text-primary">Artikel Terbaru</h2>
            <span className="text-sm text-muted-foreground">{articles.length} tulisan</span>
          </div>

          <div className="divide-y divide-border">
            {articles.map((a, i) => (
              <article key={a.slug} className="py-8 group">
                <Link
                  to="/articles/$slug"
                  params={{ slug: a.slug }}
                  className="grid md:grid-cols-[80px_1fr_auto] gap-6 items-start"
                >
                  <div className="font-serif text-3xl text-muted-foreground/60 group-hover:text-accent transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent mb-2">
                      {a.category}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl text-primary leading-tight group-hover:text-accent transition-colors">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-2">
                      {a.abstract}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{a.publishedAt}</span>
                      <span>·</span>
                      <span>{a.readTime}</span>
                    </div>
                  </div>
                  <span className="text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                    Baca →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
