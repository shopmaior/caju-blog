import { getAllPosts } from "@/lib/posts";

export default function sitemap() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    url: `https://blog.cajuofertas.com.br/blog/${post.slug}`,
    lastModified: post.meta.date,
  }));
}
