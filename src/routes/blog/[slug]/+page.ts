import { slugFromPath } from "$lib/slug-from-path";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const modules = import.meta.glob("/src/posts/*.svx");

  let match: { path?: string; resolver: App.MdsvexResolver } | undefined =
    undefined;
  for (const [path, resolver] of Object.entries(modules)) {
    if (slugFromPath(path) === params.slug) {
      match = { path, resolver: resolver as unknown as App.MdsvexResolver };
      break;
    }
  }

  const post = await match?.resolver?.();

  if (!post || !post.metadata.published) {
    error(404, "Not found");
  }

  return {
    component: post.default,
    frontmatter: post.metadata,
  };
}
