"use client";

export default function PostBodyMDX({ slug }: { slug: string }) {
  // Webpack: cria um "context" com todos os .mdx da pasta
  const ctx = (require as any).context("../content/posts", false, /\.mdx$/);

  let Comp: React.ComponentType | null = null;

  try {
    // Ex: slug "a-importancia..." -> "./a-importancia....mdx"
    Comp = ctx(`./${slug}.mdx`).default;
  } catch {
    Comp = null;
  }

  if (!Comp) return <p>Post não encontrado.</p>;

  return <Comp />;
}
