import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a className="hover:text-zinc-900" href={site.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a className="hover:text-zinc-900" href={site.social.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
