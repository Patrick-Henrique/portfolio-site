import { site } from "@/lib/site";

export default function EndCTA({
  title = "Quer tirar sua ideia do papel?",
  subtitle = "Me conte sobre seu espaço e eu te digo o melhor caminho.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="mt-12 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{subtitle}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={site.social.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Falar no WhatsApp
        </a>
        <a
          href="/contato"
          className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
        >
          Ir para contato
        </a>
      </div>
    </section>
  );
}
