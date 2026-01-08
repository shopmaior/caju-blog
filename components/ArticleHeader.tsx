import Link from "next/link";

export type ArticleMeta = {
  title: string;
  description: string;
  date: string;
  category?: string;
  author?: string;
};

export function ArticleHeader({ meta }: { meta: ArticleMeta }) {
  return (
    <header className="mb-10">
      <nav className="text-sm text-gray-500 mb-2">
        <Link href="/">Blog</Link>
        {meta.category && (
          <>
            <span className="mx-2">/</span>
            <span>{meta.category}</span>
          </>
        )}
      </nav>

      <h1 className="text-4xl font-bold leading-tight">{meta.title}</h1>

      <p className="mt-4 text-lg text-gray-600">{meta.description}</p>

      <div className="mt-6 text-sm text-gray-500">
        <time dateTime={meta.date}>
          {new Date(meta.date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </time>
        {meta.author && <span> · {meta.author}</span>}
      </div>
    </header>
  );
}
