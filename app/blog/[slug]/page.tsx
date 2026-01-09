import { ArticleHeader } from "@/components/ArticleHeader";
import { ArticleFooter } from "@/components/ArticleFooter";
import ArticleBody from "@/components/ArticleBody";
import { getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <main id="main-content" className="w-full max-w-5xl mx-auto px-6 py-12">
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const ogImage = post.meta.image ? [post.meta.image] : ["/og/og-image.png"];

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
      authors: post.meta.author ? [post.meta.author] : undefined,
      images: ogImage.map((url) => ({
        url,
        alt: post.meta.imageAlt || post.meta.title,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
      images: ogImage,
    },
  };
}
