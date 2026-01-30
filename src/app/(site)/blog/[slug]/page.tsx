import { notFound } from "next/navigation";
import { getItem, getSlugs } from "@/lib/content";
import Breadcrumbs from "@/components/Breadcrumbs";
import CopyLinkButton from "@/components/CopyLinkButton";
import EndCTA from "@/components/EndCTA";
import PostBodyMDX from "@/components/PostBodyMDX";
import Prose from "@/components/Prose";
import TagChips from "@/components/TagChips";

export function generateStaticParams() {
  return getSlugs("posts").map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const slugs = new Set(getSlugs("posts"));
  if (!slugs.has(slug)) return notFound();

  const post = getItem("posts", slug);

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs
        items={[
          { href: "/", label: "Início" },
          { href: "/blog", label: "Blog" },
          { href: `/blog/${slug}`, label: post.frontmatter.title },
        ]}
      />

      <div className="mb-8 flex items-center justify-between gap-4">
        <a
          href="/blog"
          className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
        >
          ← Voltar para Blog
        </a>

        <CopyLinkButton />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          {post.frontmatter.title}
        </h1>
        <TagChips tags={post.frontmatter.tags ?? []} />
        <p className="mt-2 text-sm text-zinc-600">
          {post.frontmatter.date} · {post.readingMinutes} min de leitura
        </p>
        {post.frontmatter.description ? (
          <p className="mt-4 text-zinc-600">{post.frontmatter.description}</p>
        ) : null}
      </div>

      <Prose>
        <PostBodyMDX slug={slug} />
      </Prose>
      <EndCTA
        title="Gostou do conteúdo?"
        subtitle="Se você quer aplicar isso no seu espaço com segurança, me chama."
      />
    </div>
  );
}
