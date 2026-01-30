import Section from "@/components/Section";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato para conversar sobre seu projeto.",
  openGraph: {
    title: `${site.name} — Contato`,
    description: "Entre em contato para conversar sobre seu projeto.",
    type: "website",
  },
};

export default function ContatoPage() {
  return (
    <Section
      title="Contato"
      subtitle="Me conte sobre seu projeto e eu retorno."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-zinc-600">
            Se preferir, fale direto no WhatsApp. Se quiser deixar uma mensagem,
            preencha o formulário.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-md bg-zinc-900 px-5 py-3 text-sm text-white hover:bg-zinc-800"
              href={site.social.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp
            </a>

            <a
              className="rounded-md border px-5 py-3 text-sm hover:bg-zinc-50"
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>

          <div className="text-sm text-zinc-500">
            <p>Horário de atendimento: seg–sex, 8h–17h</p>
            <p>Cidade/UF: (Rio de Janeiro/RJ)</p>
          </div>
        </div>

        {/* Form visual (sem backend por enquanto) */}
        <form className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
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
          <input
            type="text"
            placeholder="WhatsApp (opcional)"
            className="w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10"
          />
          <textarea
            placeholder="Conte um pouco sobre o que você precisa..."
            className="h-32 w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10"
            required
          />

          <button
            type="submit"
            className="w-full rounded-md bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Enviar mensagem
          </button>

          <p className="text-xs text-zinc-500">
            (Formulário para exemplo)
          </p>
        </form>
      </div>
    </Section>
  );
}
