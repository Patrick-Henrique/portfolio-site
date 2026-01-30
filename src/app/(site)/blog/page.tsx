import type { Metadata } from "next";
import Section from "@/components/Section";
import { getAll } from "@/lib/content";
import BlogSearch from "@/components/BlogSearch";
import EbookBanner from "@/components/EBookBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos, ideias e reflexões sobre arquitetura e interiores.",
  openGraph: {
    title: `${site.name} — Blog`,
    description: "Artigos, ideias e reflexões sobre arquitetura e interiores.",
    type: "website",
  },
};

export default function BlogIndex() {
  const posts = getAll("posts").map((p) => ({
    slug: p.frontmatter.slug,
    title: p.frontmatter.title,
    description: p.frontmatter.description,
    date: p.frontmatter.date,
  }));

  return (
    <Section
      title="Blog"
      subtitle="Artigos, ideias e reflexões sobre arquitetura e interiores."
    >
      <div className="space-y-6">
        <EbookBanner />
        <BlogSearch posts={posts} />
      </div>
    </Section>
  );
}
