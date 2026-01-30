import Section from "@/components/Section";
import Card from "@/components/Card";
import { getAll } from "@/lib/content";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Serviços de arquitetura e interiores pensados para diferentes necessidades.",
  openGraph: {
    title: `${site.name} — Serviços`,
    description:
      "Serviços de arquitetura e interiores pensados para diferentes necessidades.",
    type: "website",
  },
};

export default function ServicosIndex() {
  const services = getAll("services").map((s) => ({
    slug: s.frontmatter.slug,
    title: s.frontmatter.title,
    description: s.frontmatter.description,
  }));

  return (
    <div className="space-y-14">
      <section className="pt-10">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Serviços
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600">
          Dois formatos para necessidades diferentes — do direcionamento rápido
          ao acompanhamento mais completo.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Pedir orçamento
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Ver projetos
          </a>
        </div>
      </section>

      <Section
        title="Escolha seu formato"
        subtitle="Pocket e Total — ambos com entregas claras."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.slug}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div>
                <h2 className="text-xl font-semibold tracking-tight">
                  {s.title}
                </h2>
                {s.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {s.description}
                  </p>
                ) : null}
              </div>

              {/* Blocos fixos (você ajusta depois com o conteúdo real) */}
              <div className="mt-5 grid gap-3 text-sm text-zinc-600">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="font-semibold text-zinc-900">O que inclui</p>
                  <ul className="mt-2 space-y-1">
                    <li>• Briefing e direcionamento</li>
                    <li>• Layout / organização do espaço</li>
                    <li>• Referências e recomendações</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="font-semibold text-zinc-900">Ideal para</p>
                  <p className="mt-2">
                    Quem quer clareza e decisões mais seguras, com um caminho
                    objetivo.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`/servicos/${s.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Ver detalhes do {s.title}
                </a>
                <a
                  href="/contato"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                >
                  Tirar dúvidas
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Perguntas comuns">
        <div className="space-y-3">
          <details className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer text-sm font-semibold text-zinc-900">
              Posso contratar Pocket e depois evoluir para Total?
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Sim — dá para começar com um direcionamento e evoluir conforme a
              necessidade.
            </p>
          </details>

          <details className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer text-sm font-semibold text-zinc-900">
              O atendimento pode ser online?
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Pode. Briefing, alinhamentos e entregas funcionam muito bem de
              forma remota.
            </p>
          </details>
        </div>
      </Section>

      <Section title="Mais conteúdo">
        <div className="grid gap-4 md:grid-cols-2">
          <Card
            href="/ebook"
            title="E-book gratuito"
            description="Um guia rápido e aplicável para melhorar seu ambiente."
          />
          <Card
            href="/contato"
            title="Vamos conversar"
            description="Me conte sobre seu espaço e eu te digo o melhor caminho."
          />
        </div>
      </Section>
    </div>
  );
}
