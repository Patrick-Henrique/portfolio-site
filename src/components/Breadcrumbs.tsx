import Link from "next/link";

type Crumb = { href: string; label: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-zinc-600">
      {items.map((c, idx) => {
        const last = idx === items.length - 1;
        return (
          <span key={c.href} className="flex items-center gap-2">
            {idx > 0 ? <span className="text-zinc-300">/</span> : null}
            {last ? (
              <span className="text-zinc-900">{c.label}</span>
            ) : (
              <Link href={c.href} className="hover:text-zinc-900">
                {c.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
