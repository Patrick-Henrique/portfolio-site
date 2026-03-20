/*export async function loadMDX(
  collection: "services" | "projects",
  slug: string
) {
  const safeSlug = slug.toLowerCase();
  try {
    if (collection === "services") {
      const mod = await import(
        `../content/services/${safeSlug}.mdx`
      );
      return mod.default;
    }

    if (collection === "projects") {
      const mod = await import(
        `../content/projects/${slug}.mdx`
      );
      return mod.default;
    }

    return null;
  } catch {
    return null;
  }
}
*/
import Pocket from "../content/services/pocket.mdx";
import Total from "../content/services/total.mdx";

import ApAurora from "../content/projects/ap-aurora.mdx";
import ProjetoNeutro from "../content/projects/projeto-neutro.mdx";
import StudioCastanha from "../content/projects/studio-castanha.mdx";

const servicesMap: Record<string, React.ComponentType> = {
  "pocket": Pocket,
  "total": Total,
};

const projectsMap: Record<string, React.ComponentType> = {
  "ap-aurora": ApAurora,
  "projeto-neutro": ProjetoNeutro,
  "studio-castanha": StudioCastanha,
};

export async function loadMDX(
  collection: "services" | "projects",
  slug: string
) {
  const key = slug.toLowerCase();

  if (collection === "services") return servicesMap[key] ?? null;
  if (collection === "projects") return projectsMap[key] ?? null;

  return null;
}
