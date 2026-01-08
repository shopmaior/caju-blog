import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostMeta {
  title: string;
  description: string;
  date: string;
  image?: string;
  tags?: string[];
  author?: string;
}

interface ArticleCardProps {
  slug: string;
  meta: PostMeta;
}

export default function ArticleCard({ slug, meta }: ArticleCardProps) {
  // Fallback for image until we have real ones mapped
  const displayImage = meta.image || "/og/article-cover.png";

  return (
    <Link href={`/blog/${slug}`} className="group block h-full">
      <article className="flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 dark:bg-card dark:border-white/5">
        {/* Image Container with Overflow Hidden for Zoom Effect */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-white/5">
          {/* We can use next/image here later with proper config, using standard img for now to avoid domain issues immediately */}
          <Image
            src={displayImage}
            alt={meta.title}
            width={1440 / 2}
            height={603 / 2}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
          <div className="flex items-center gap-2 mb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {meta.tags && meta.tags.length > 0 ? (
              <span className="text-primary">{meta.tags[0]}</span>
            ) : (
              <span className="text-primary">Blog</span>
            )}
            <span>•</span>
            <time dateTime={meta.date}>
              {format(new Date(meta.date), "d 'de' MMMM, yyyy", {
                locale: ptBR,
              })}
            </time>
          </div>

          <h3 className="text-xl font-bold leading-tight mb-2 text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {meta.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
            {meta.description}
          </p>

          <div className="flex items-center text-sm font-semibold text-primary mt-auto">
            Ler artigo
            <svg
              className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
