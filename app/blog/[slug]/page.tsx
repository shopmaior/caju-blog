import { ArticleHeader } from "@/components/ArticleHeader";
import { ArticleFooter } from "@/components/ArticleFooter";
import ArticleBody from "@/components/ArticleBody";
import { getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

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

      <div className="mx-auto mt-8 max-w-3xl">
        <ArticleBody>
          <MDXRemote source={post.body} />
        </ArticleBody>
      </div>

      <ArticleFooter />
    </main>
  );
}
