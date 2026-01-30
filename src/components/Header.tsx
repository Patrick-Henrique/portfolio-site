import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-zinc-700 hover:text-zinc-900"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/ebook"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            E-book
          </Link>
          <a
            href={site.social.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
