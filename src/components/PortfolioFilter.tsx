"use client";

import { useMemo, useState } from "react";
import Card from "@/components/Card";

type ProjectCard = {
  slug: string;
  title: string;
  description?: string;
  tags?: string[];
};

export default function PortfolioFilter({ projects }: { projects: ProjectCard[] }) {
  const [activeTag, setActiveTag] = useState<string>("Todos");

  const tags = useMemo(() => {
    const all = new Set<string>();
    for (const p of projects) {
      for (const t of p.tags ?? []) all.add(t);
    }
    return ["Todos", ...Array.from(all).sort((a, b) => a.localeCompare(b))];
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeTag === "Todos") return projects;
    return projects.filter((p) => (p.tags ?? []).includes(activeTag));
  }, [projects, activeTag]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const active = tag === activeTag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={[
                "rounded-full px-4 py-2 text-sm font-medium transition",
                active
                  ? "bg-zinc-900 text-white"
                  : "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50",
              ].join(" ")}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <Card
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            title={p.title}
            description={p.description}
            meta={p.tags?.join(" · ")}
          />
        ))}
      </div>
    </div>
  );
}
