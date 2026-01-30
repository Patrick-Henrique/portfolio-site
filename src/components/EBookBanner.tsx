export default function EbookBanner() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-zinc-900">E-book gratuito</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight">
            Guia prático para melhorar seu ambiente com clareza e intenção
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            Receba um material rápido e aplicável sobre layout, circulação e escolhas conscientes.
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href="/ebook"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Baixar e-book
          </a>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Falar sobre projeto
          </a>
        </div>
      </div>
    </section>
  );
}
