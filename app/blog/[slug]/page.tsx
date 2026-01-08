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
    <main className="w-full max-w-5xl mx-auto px-6 py-12">
      <ArticleHeader meta={post.meta} />

      <article className="prose prose-lg dark:prose-invert prose-orange mx-auto mt-12 max-w-3xl">
        {post.body}
      </article>

      <ArticleFooter />
    </main>
  );
}
