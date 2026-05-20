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
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-20 md:pt-28 md:pb-28">
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

          <div className="flex flex-col gap-5">
            {articles.map((a) => (
              <article
                key={a.slug}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1"
              >
                <Link
                  to="/articles/$slug"
                  params={{ slug: a.slug }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary text-accent text-xs font-semibold uppercase tracking-wider">
                      {a.category}
                    </span>
                    <span className="text-muted-foreground text-xs font-medium">
                      {a.publishedAt}
                    </span>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-serif text-xl md:text-2xl text-primary leading-tight group-hover:text-accent transition-colors">
                      {a.title}
                    </h3>
                    <ArrowRight
                      strokeWidth={2.5}
                      className="w-5 h-5 text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {a.abstract}
                  </p>
                  <div className="pt-1 flex items-center text-xs text-muted-foreground">
                    <span>{a.readTime} baca</span>
                  </div>
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
