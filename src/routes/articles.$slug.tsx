import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getArticle, AUTHOR, articles, type Article } from "@/data/articles";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — Lentera Digital` },
          { name: "description", content: loaderData.article.abstract.slice(0, 160) },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.abstract.slice(0, 160) },
        ]
      : [],
  }),
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-primary">Artikel tidak ditemukan</h1>
        <Link to="/" className="mt-4 inline-block text-accent underline">Kembali ke beranda</Link>
      </div>
    </div>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData() as { article: Article };
  const otherArticles = articles.filter((a) => a.slug !== article.slug);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 pt-12 pb-16">
          <Link to="/" className="text-sm text-muted-foreground hover:text-accent">
            ← Semua artikel
          </Link>

          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-accent">
            {article.category}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary leading-[1.1] mt-3">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground border-y border-border py-4">
            <span>
              Oleh <strong className="text-foreground">{AUTHOR.name}</strong>
            </span>
            <span>·</span>
            <span>NIM {AUTHOR.nim}</span>
            <span>·</span>
            <span>{article.publishedAt}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          {/* Abstract */}
          <section className="mt-10 rounded-lg bg-secondary/60 border border-border p-6">
            <h2 className="font-serif text-xl text-primary mb-3">Abstrak</h2>
            <p className="text-foreground/90 leading-relaxed italic">{article.abstract}</p>
          </section>

          {/* Body */}
          <section className="mt-12 prose-article">
            <h2 className="font-serif text-2xl text-primary mb-2">Pembahasan</h2>
            {article.sections.map((s) => (
              <div key={s.heading}>
                <h3>{s.heading}</h3>
                {s.body.map((b, i) =>
                  typeof b === "string" ? (
                    <p key={i}>{b}</p>
                  ) : (
                    <ul key={i}>
                      {b.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            ))}

            {article.conclusion && (
              <div>
                <h3>{article.conclusion.heading}</h3>
                {article.conclusion.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </section>

          {/* References */}
          <section className="mt-12 border-t border-border pt-8">
            <h2 className="font-serif text-2xl text-primary mb-4">Daftar Referensi</h2>
            <ol className="space-y-3 text-sm">
              {article.references.map((r, i) => (
                <li key={r.url} className="flex gap-3">
                  <span className="text-muted-foreground tabular-nums">{i + 1}.</span>
                  <div>
                    <p className="text-foreground">{r.title}</p>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline break-all"
                    >
                      {r.url}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* AMIKOM link */}
          <section className="mt-12 rounded-lg border border-accent/30 bg-accent/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">Dipublikasikan untuk memenuhi tugas UTS</p>
            <p className="mt-1 font-serif text-lg text-primary">Mata Kuliah Lingkungan Bisnis</p>
            <a
              href="https://www.amikom.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-accent font-medium hover:underline"
            >
              Universitas AMIKOM Yogyakarta — www.amikom.ac.id ↗
            </a>
          </section>

          {/* Other articles */}
          <section className="mt-16">
            <h2 className="font-serif text-xl text-primary mb-4">Baca juga</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherArticles.map((a) => (
                <Link
                  key={a.slug}
                  to="/articles/$slug"
                  params={{ slug: a.slug }}
                  className="block rounded-lg border border-border p-4 hover:border-accent transition-colors"
                >
                  <p className="text-xs uppercase tracking-widest text-accent">{a.category}</p>
                  <p className="mt-2 font-serif text-lg text-primary leading-snug">{a.title}</p>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
