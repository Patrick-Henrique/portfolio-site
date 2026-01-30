import Section from "@/components/Section";

export default function EbookObrigadoPage() {
  return (
    <Section title="Tudo certo!">
      <div className="max-w-xl space-y-6">
        <p className="text-zinc-600">
          Obrigado por se inscrever!  
          Você pode baixar o e-book no link abaixo.
        </p>

        <a
          href="/ebook.pdf"
          className="inline-block rounded-md bg-zinc-900 px-5 py-3 text-sm text-white hover:bg-zinc-800"
        >
          Baixar e-book
        </a>

        <p className="text-sm text-zinc-500">
          Se o download não iniciar, verifique se o bloqueador de pop-ups está ativo.
        </p>
      </div>
    </Section>
  );
}
