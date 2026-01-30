import Card from "@/components/Card";

type RelatedProject = {
  slug: string;
  title: string;
  description?: string;
  tags?: string[];
};

export default function RelatedProjects({
  currentSlug,
  currentTags,
  projects,
  limit = 4,
}: {
  currentSlug: string;
  currentTags: string[];
  projects: RelatedProject[];
  limit?: number;
}) {
  const currentSet = new Set(currentTags);

  const scored = projects
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      const tags = p.tags ?? [];
      let score = 0;
      for (const t of tags) if (currentSet.has(t)) score++;
      return { p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  const top = scored.slice(0, limit).map((x) => x.p);

  if (top.length === 0) return null;

  return (
    <section className="mt-12">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Projetos relacionados</h2>
        <a
          href="/portfolio"
          className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
        >
          Ver todos →
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {top.map((p) => (
          <Card
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            title={p.title}
            description={p.description}
            meta={p.tags?.join(" · ")}
          />
        ))}
      </div>
    </section>
  );
}
