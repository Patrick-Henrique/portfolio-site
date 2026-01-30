import Section from "@/components/Section";
import Card from "@/components/Card";
import { getAll } from "@/lib/content";
import Image from "next/image";

export default function HomePage() {
  const projects = getAll("projects").slice(0, 4);
  const posts = getAll("posts").slice(0, 3);
  const services = getAll("services").slice(0, 2);

  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="pt-10">
        <div className="grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Interiores com personalidade, leveza e intenção.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600">
              Projetos de arquitetura e interiores com foco em funcionalidade,
              conforto e estética atemporal — do estudo inicial ao detalhamento.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                href="/portfolio"
              >
                Ver portfólio
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                href="/contato"
              >
                Pedir orçamento
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-600">
              <div>
                <p className="font-semibold text-zinc-900">Projetos</p>
                <p>Residencial e comercial</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-900">Entregas</p>
                <p>Plantas, 3D, detalhamentos</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-900">Atendimento</p>
                <p>Online e presencial</p>
              </div>
            </div>
          </div>

          {/* “Imagem” placeholder (depois você troca por foto real) */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm">
              <Image
                src="/hero.jpg"
                alt="Ambiente de interiores"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* 
            <p className="mt-3 text-xs text-zinc-500">
              Troque a imagem em <code>public/hero.jpg</code>.
            </p>*/}
          </div>
        </div>
      </section>

      {/* SERVIÇOS EM DESTAQUE */}
      <Section
        title="Serviços"
        subtitle="Escolha o formato ideal para sua necessidade."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <Card
              key={s.frontmatter.slug}
              href={`/servicos/${s.frontmatter.slug}`}
              title={s.frontmatter.title}
              description={s.frontmatter.description}
            />
          ))}
        </div>

        <div className="mt-6">
          <a
            href="/servicos"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Ver todos os serviços
          </a>
        </div>
      </Section>

      {/* PROJETOS */}
      <Section
        title="Projetos em destaque"
        subtitle="Alguns trabalhos recentes."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <Card
              key={p.frontmatter.slug}
              href={`/portfolio/${p.frontmatter.slug}`}
              title={p.frontmatter.title}
              description={p.frontmatter.description}
            />
          ))}
        </div>
      </Section>

      {/* BLOG */}
      <Section title="Conteúdo do blog" subtitle="Textos curtos e práticos.">
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <Card
              key={p.frontmatter.slug}
              href={`/blog/${p.frontmatter.slug}`}
              title={p.frontmatter.title}
              description={p.frontmatter.description}
              meta={p.frontmatter.date}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
