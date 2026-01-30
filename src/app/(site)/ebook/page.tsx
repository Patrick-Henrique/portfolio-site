import Section from "@/components/Section";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "E-book gratuito",
  description: "Baixe um guia prático sobre arquitetura e interiores.",
  openGraph: {
    title: `${site.name} — E-book`,
    description: "Baixe um guia prático sobre arquitetura e interiores.",
    type: "website",
  },
};

export default function EbookPage() {
  return (
    <Section
      title="E-book gratuito"
      subtitle="Um guia prático para criar ambientes mais funcionais e agradáveis."
    >
      <div className="max-w-xl space-y-6">
        <p className="text-zinc-600">
          Neste e-book você vai aprender conceitos essenciais de layout,
          circulação e escolhas conscientes para interiores mais equilibrados.
        </p>

        {/* Formulário visual (sem backend por enquanto) */}
        <form action="/ebook/obrigado" className="space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10"
            required
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10"
            required
          />

          <button
            type="submit"
            className="w-full rounded-md bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Quero receber o e-book
          </button>
        </form>

        <p className="text-xs text-zinc-500">
          Apenas exemplo. Funcionando, ele deve registrar os dados inseridos e abrir uma página para baixar um PDF, pode ser um catálogo ou outro.
        </p>
      </div>
    </Section>
  );
}
