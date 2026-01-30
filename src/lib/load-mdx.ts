export async function loadMDX(
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
