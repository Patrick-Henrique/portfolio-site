import Link from "next/link";

export default function Card({
  href,
  title,
  description,
  meta,
}: {
  href: string;
  title: string;
  description?: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:bg-zinc-50 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold tracking-tight group-hover:underline">
          {title}
        </h3>
        {meta ? <span className="shrink-0 text-xs text-zinc-500">{meta}</span> : null}
      </div>

      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">{description}</p>
      ) : null}
    </Link>
  );
}
