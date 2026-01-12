import { getAllPosts } from "@/lib/posts";
import ArticleCard from "@/components/ArticleCard";
import { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE_NAME} | Ofertas e Descontos Exclusivos`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Ofertas e Descontos Exclusivos`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `/og/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Ofertas e Descontos Exclusivos`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Ofertas e Descontos Exclusivos`,
    description: SITE_DESCRIPTION,
    images: [`/og/og-image.png`],
  },
};

export default function BlogHome() {
  const posts = getAllPosts();

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });

  // Optional: Highlight the newest post if we want a featured one
  // const featuredPost = sortedPosts[0];
  // const standardPosts = sortedPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-background pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide mb-4">
            BLOG CAJU OFERTAS
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Ofertas, dicas e economia <br className="hidden md:block" />
            <span className="text-primary">inteligente para você</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Descubra como aproveitar melhor as promoções ao seu redor. Notícias,
            guias e novidades exclusivas da plataforma Caju Ofertas.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
            <ArticleCard key={post.slug} slug={post.slug} meta={post.meta} />
          ))}
        </div>
      </main>
    </div>
  );
}
