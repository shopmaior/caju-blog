import { getPostBySlug } from "@/lib/posts";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.meta.title}</h1>
      <p className="text-gray-600">{post.meta.description}</p>

      <article className="prose mt-8">{post.body}</article>
    </main>
  );
}
