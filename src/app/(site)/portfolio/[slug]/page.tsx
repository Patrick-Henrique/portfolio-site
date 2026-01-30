import { getAll, getItem, getSlugs } from "@/lib/content";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CopyLinkButton from "@/components/CopyLinkButton";
import EndCTA from "@/components/EndCTA";
import Gallery from "@/components/Gallery";
//import ProjectBodyMDX from "@/components/ProjectBodyMDX";
import { loadMDX } from "@/lib/load-mdx";
import Prose from "@/components/Prose";
import RelatedProjects from "@/components/RelatedProjects";
import TagChips from "@/components/TagChips";

export const dynamicParams = false;
export const dynamic = "force-static";


const portfolioGalleries: Record<string, { src: string; alt: string }[]> = {
  "ap-aurora": [
    { src: "/images/portfolio/ap-aurora/3.jpg", alt: "Exemplo imagem 1" },
    { src: "/images/portfolio/ap-aurora/4.jpg", alt: "Exemplo imagem 2" },
    { src: "/images/portfolio/ap-aurora/5.jpg", alt: "Exemplo imagem 3" },
  ],
  "projeto-neutro": [
    { src: "/images/portfolio/projeto-neutro/3.jpg", alt: "Exemplo imagem 1" },
    { src: "/images/portfolio/projeto-neutro/4.jpg", alt: "Exemplo imagem 2" },
    { src: "/images/portfolio/projeto-neutro/5.jpg", alt: "Exemplo imagem 3" },
  ],
  "studio-castanha": [
    { src: "/images/portfolio/studio-castanha/3.jpg", alt: "Exemplo imagem 1" },
    { src: "/images/portfolio/studio-castanha/4.jpg", alt: "Exemplo imagem 2" },
    { src: "/images/portfolio/studio-castanha/5.jpg", alt: "Exemplo imagem 3" },
  ],
};

export function generateStaticParams() {
  return getSlugs("projects").map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  //const slugs = new Set(getSlugs("projects"));
  //if (!slugs.has(slug)) return notFound();

  const project = getItem("projects", slug);

  const Body = await loadMDX("projects", slug);
  if (!Body) return notFound();

  const allProjects = getAll("projects").map((p) => ({
    slug: p.frontmatter.slug,
    title: p.frontmatter.title,
    description: p.frontmatter.description,
    tags: p.frontmatter.tags ?? [],
  }));

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs
        items={[
          { href: "/", label: "Início" },
          { href: "/portfolio", label: "Portfólio" },
          { href: `/portfolio/${slug}`, label: project.frontmatter.title },
        ]}
      />

      <div className="mb-8 flex items-center justify-between gap-4">
        <a
          href="/portfolio"
          className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
        >
          ← Voltar para Portfólio
        </a>

        <CopyLinkButton />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          {project.frontmatter.title}
        </h1>
        <TagChips tags={project.frontmatter.tags ?? []} />
        {project.frontmatter.description ? (
          <p className="mt-4 text-zinc-600">
            {project.frontmatter.description}
          </p>
        ) : null}
      </div>

      <Prose>
        <Body slug={slug} />
      </Prose>
      <Gallery images={portfolioGalleries[slug] ?? []} />
      <EndCTA
        title="Quer um projeto nesse estilo?"
        subtitle="Me conte sobre seu espaço e eu preparo um caminho de solução."
      />

      <RelatedProjects
        currentSlug={slug}
        currentTags={project.frontmatter.tags ?? []}
        projects={allProjects}
      />
    </div>
  );
}
