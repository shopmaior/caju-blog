import { getPostBySlug } from "@/lib/posts";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.meta.title}</h1>
      <p className="text-gray-600">{post.meta.description}</p>

      <article className="prose mt-8 whitespace-pre-wrap">{post.body}</article>
    </main>
  );
}
