export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <article
      className={[
        "prose prose-zinc max-w-none",
        // Títulos mais elegantes
        "prose-headings:tracking-tight prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl",
        // Links discretos
        "prose-a:font-medium prose-a:text-zinc-900 prose-a:underline-offset-4 hover:prose-a:underline",
        // Listas e parágrafos mais confortáveis
        "prose-p:leading-relaxed prose-li:leading-relaxed",
        // Imagens e separadores
        "prose-img:rounded-xl",
        "prose-hr:border-zinc-200",
        // Blockquote
        "prose-blockquote:border-zinc-200 prose-blockquote:text-zinc-700",
        // Código inline
        "prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:text-zinc-900",
        "prose-pre:rounded-xl prose-pre:border prose-pre:border-zinc-200 prose-pre:bg-zinc-950 prose-pre:text-zinc-50",
      ].join(" ")}
    >
      {children}
    </article>
  );
}
