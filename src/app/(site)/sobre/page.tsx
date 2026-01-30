import Section from "@/components/Section";

export default function SobrePage() {
  return (
    <div className="space-y-14">
      <section className="pt-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Sobre
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600">
              Aqui entra a história do estúdio/profissional, com foco em como você
              trabalha e no que o cliente ganha com isso (clareza, funcionalidade,
              beleza e tranquilidade).
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Ver projetos
              </a>
              <a
                href="/contato"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Falar sobre um projeto
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">Em resumo</p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                <li>• Atendimento online e presencial</li>
                <li>• Projetos residenciais e comerciais</li>
                <li>• Entregas: layout, 3D, detalhamento</li>
                <li>• Processo claro, com etapas e prazos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Section title="Como funciona" subtitle="Um processo simples, com previsibilidade.">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">1) Briefing</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Entendimento do contexto, necessidades, estilo e prioridades.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">2) Proposta</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Layouts, referências e soluções. Ajustes até alinhar direção.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">3) Entrega</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              3D, documentação e detalhamentos para execução com segurança.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Valores" subtitle="O que guia as decisões em cada projeto.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Funcionalidade</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Layout que respeita circulação, rotina e necessidades reais.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Atemporalidade</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Escolhas consistentes, com beleza que dura e não “cansa”.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Clareza</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Processo com etapas e entregas objetivas, sem adivinhação.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Cuidado</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Atenção aos detalhes e escolhas que valorizam o bem-estar.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Dúvidas rápidas">
        <div className="space-y-3">
          <details className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer text-sm font-semibold text-zinc-900">
              Vocês atendem online?
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Sim. Dá para fazer briefing, reuniões e entregas com acompanhamento remoto.
            </p>
          </details>

          <details className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer text-sm font-semibold text-zinc-900">
              O que eu recebo no final?
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Depende do serviço, mas geralmente inclui layout, 3D e documentação para execução.
            </p>
          </details>
        </div>
      </Section>
    </div>
  );
}
