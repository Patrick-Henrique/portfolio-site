"use client";

import Demo from "@/content/posts/a-importancia-dos-espacos-vazios.mdx";

export default function TesteMDXPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-semibold">Teste MDX</h1>
      <div className="prose prose-zinc mt-6 max-w-none">
        <Demo />
      </div>
    </div>
  );
}
