export async function loadMDX(
  collection: "services" | "projects",
  slug: string
) {
  try {
    if (collection === "services") {
      const mod = await import(
        `../content/services/${slug}.mdx`
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
