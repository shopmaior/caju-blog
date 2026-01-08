import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export type ArticleMeta = {
  title: string;
  description: string;
  date: string;
  category?: string;
  author?: string;
  image?: string;
  tags?: string[];
};

export function ArticleHeader({ meta }: { meta: ArticleMeta }) {
  const displayImage = meta.image || "";

  return (
    <header className="mb-10 max-w-4xl mx-auto">
      {/* Breadcrumb / Meta */}
      <nav className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-6 justify-center">
        <Link href="/" className="hover:text-primary transition-colors">
          Blog
        </Link>
        <span className="text-gray-300">/</span>
        {meta.category ? (
          <span className="text-primary">{meta.category}</span>
        ) : (
          <span className="text-primary">Artigo</span>
        )}
      </nav>

      {/* Title & Desc */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
          {meta.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {meta.description}
        </p>
      </div>

      {/* Author & Date */}
      <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 dark:border-white/10 pb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            {meta.author ? meta.author[0] : "C"}
          </div>
          <span className="font-medium text-foreground">
            {meta.author || "Equipe Caju Ofertas"}
          </span>
        </div>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <time dateTime={meta.date}>
          {format(new Date(meta.date), "d 'de' MMMM, yyyy", { locale: ptBR })}
        </time>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-white/5 border border-border shadow-sm">
        <img
          src={displayImage}
          alt={meta.title}
          className="object-cover w-full h-full"
        />
      </div>
    </header>
  );
}
