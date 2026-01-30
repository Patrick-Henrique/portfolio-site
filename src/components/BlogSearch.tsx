"use client";

import { useMemo, useState } from "react";
import Card from "@/components/Card";

type PostCard = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
};

export default function BlogSearch({ posts }: { posts: PostCard[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return posts;

    return posts.filter((p) => {
      const hay = `${p.title} ${p.description ?? ""}`.toLowerCase();
      return hay.includes(query);
    });
  }, [posts, q]);

  return (
    <div className="space-y-6">
      <div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar no blog..."
          className="w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10"
        />
        <p className="mt-2 text-xs text-zinc-500">
          {filtered.length} resultado(s)
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <Card
            key={p.slug}
            href={`/blog/${p.slug}`}
            title={p.title}
            description={p.description}
            meta={p.date}
          />
        ))}
      </div>
    </div>
  );
}
