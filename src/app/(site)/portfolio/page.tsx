import Section from "@/components/Section";
import { getAll } from "@/lib/content";
import PortfolioFilter from "@/components/PortfolioFilter";

export default function PortfolioIndex() {
  const projects = getAll("projects").map((p) => ({
    slug: p.frontmatter.slug,
    title: p.frontmatter.title,
    description: p.frontmatter.description,
    tags: p.frontmatter.tags ?? [],
  }));

  return (
    <Section title="Portfólio" subtitle="Seleção de projetos.">
      <PortfolioFilter projects={projects} />
    </Section>
  );
}
