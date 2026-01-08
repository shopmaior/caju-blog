import { getAllPosts } from "@/lib/posts";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return posts.map((post) => ({
    url: `https://blog.cajuofertas.com.br/blog/${post.slug}`,
    lastModified: new Date(post.meta.date),
  }));
}
