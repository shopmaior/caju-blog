import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  meta: {
    title: string;
    description: string;
    date: string;
    category?: string;
    author?: string;
    image?: string;
    imageAlt?: string;
    tags?: string[];
  };
  body: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const content = fs.readFileSync(path.join(postsDirectory, file), "utf8");
    const { data, content: body } = matter(content);

    return {
      slug,
      meta: {
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        author: data.author,
        image: data.image,
        imageAlt: data.imageAlt,
        tags: data.tags,
      },
      body,
    };
  });
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const content = fs.readFileSync(filePath, "utf8");
  const { data, content: body } = matter(content);

  return {
    slug,
    meta: {
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      author: data.author,
      image: data.image,
      imageAlt: data.imageAlt,
      tags: data.tags,
    },
    body,
  };
}
export function getRandomPost(): Post | null {
  const posts = getAllPosts();
  if (posts.length === 0) return null;
  return posts[Math.floor(Math.random() * posts.length)];
}
