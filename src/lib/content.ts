import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

type ContentKind = "posts" | "projects" | "services";

const ROOT = path.join(process.cwd(), "src", "content");

export type BaseFrontmatter = {
  title: string;
  slug: string;
  description?: string;
  date?: string; // ISO string
  cover?: string; // /images/...
  tags?: string[];
};

export type ContentItem<T extends BaseFrontmatter = BaseFrontmatter> = {
  kind: ContentKind;
  frontmatter: T;
  content: string;
  readingMinutes?: number;
};

function dirFor(kind: ContentKind) {
  return path.join(ROOT, kind);
}

export function getSlugs(kind: ContentKind) {
  return fs
    .readdirSync(dirFor(kind))
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getItem(kind: ContentKind, slug: string): ContentItem {
  const filePath = path.join(dirFor(kind), `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  const fm = parsed.data as BaseFrontmatter;

  const rt = readingTime(parsed.content);
  return {
    kind,
    frontmatter: {
      ...fm,
      slug: fm.slug ?? slug,
    },
    content: parsed.content,
    readingMinutes: Math.max(1, Math.round(rt.minutes)),
  };
}

export function getAll(kind: ContentKind): ContentItem[] {
  const items = getSlugs(kind).map((slug) => getItem(kind, slug));

  // Ordenação padrão (se tiver date)
  return items.sort((a, b) => {
    const ad = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0;
    const bd = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0;
    return bd - ad;
  });
}
