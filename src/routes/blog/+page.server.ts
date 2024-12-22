import { slugFromPath } from "$lib/slug-from-path";

const MAX_POSTS = 10;

export async function load() {
  const modules = import.meta.glob("/src/posts/*.svx");

  const postPromises = Object.entries(modules).map(([path, resolver]) =>
    resolver().then(
      (post) =>
        ({
          slug: slugFromPath(path),
          ...(post as unknown as App.MdsvexFile).metadata,
        }) as App.BlogPost,
    ),
  );

  const posts = await Promise.all(postPromises);
  const publishedPosts = posts.filter((p) => p.published).slice(0, MAX_POSTS);

  publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  return { posts: publishedPosts };
}
