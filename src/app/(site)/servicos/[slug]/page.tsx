import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CopyLinkButton from "@/components/CopyLinkButton";
import EndCTA from "@/components/EndCTA";
import Gallery from "@/components/Gallery";
import Prose from "@/components/Prose";
//import ServiceBodyMDX from "@/components/ServiceBodyMDX";
import { loadMDX } from "@/lib/load-mdx";
import TagChips from "@/components/TagChips";
import { getItem, getSlugs } from "@/lib/content";

export const dynamicParams = false;
export const dynamic = "force-static";


const serviceGalleries: Record<string, { src: string; alt: string }[]> = {
  pocket: [
    { src: "/images/servicos/pocket/1.jpg", alt: "Imagem de exemplo 1" },
    { src: "/images/servicos/pocket/2.jpg", alt: "Imagem de exemplo 2" },
  ],
  total: [
    { src: "/images/servicos/total/1.jpg", alt: "Imagem de exemplo 1" },
    { src: "/images/servicos/total/2.jpg", alt: "Imagem de exemplo 2" },
  ],
};

export function generateStaticParams() {
  return getSlugs("services").map((slug) => ({ slug }));
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  //const slugs = new Set(getSlugs("services"));
  //if (!slugs.has(slug)) return notFound();

  const service = getItem("services", slug);

  const Body = await loadMDX("services", slug);
  if (!Body) return notFound();

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs
        items={[
          { href: "/", label: "Início" },
          { href: "/servicos", label: "Serviços" },
          { href: `/servicos/${slug}`, label: service.frontmatter.title },
        ]}
      />

      <div className="mb-8 flex items-center justify-between gap-4">
        <a
          href="/servicos"
          className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
        >
          ← Voltar para Serviços
        </a>

        <CopyLinkButton />
      </div>

      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {service.frontmatter.title}
        </h1>

        <TagChips tags={service.frontmatter.tags ?? []} />

        {service.frontmatter.description ? (
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            {service.frontmatter.description}
          </p>
        ) : null}

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">O que inclui</p>
            <ul className="mt-3 space-y-1 text-sm text-zinc-600">
              <li>• Briefing e direcionamento</li>
              <li>• Layout / organização</li>
              <li>• Recomendações práticas</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Ideal para</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Quem quer clareza e decisões seguras, com um caminho objetivo.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Prazo</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Ajuste aqui conforme o serviço (ex.: 7–15 dias úteis).
            </p>
          </div>
        </div>
      </header>

      <Prose>
        <Body slug={slug} />
      </Prose>
      <Gallery images={serviceGalleries[slug] ?? []} />

      <EndCTA
        title="Quer saber qual serviço encaixa melhor?"
        subtitle="Me conte seu objetivo e eu te ajudo a escolher o formato ideal."
      />
    </div>
  );
}
