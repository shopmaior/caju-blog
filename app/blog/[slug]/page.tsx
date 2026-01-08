import { ArticleHeader } from "@/components/ArticleHeader";
import { ArticleFooter } from "@/components/ArticleFooter";
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
      <ArticleHeader meta={post.meta} />

      <article className="prose mt-8">{post.body}</article>

      <ArticleFooter />
    </main>
  );
}
