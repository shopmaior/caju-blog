import Link from "next/link";

export function ArticleFooter() {
  return (
    <footer className="mt-16 border-t border-border pt-10">
      <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-gray-100 dark:border-white/5 text-center max-w-3xl mx-auto">
        <p className="text-lg font-semibold text-foreground mb-2">
          Gostou dessa dica?
        </p>
        <p className="text-muted-foreground mb-6">
          Esse conteúdo faz parte do compromisso do{" "}
          <strong className="text-primary">Caju Ofertas</strong> com
          transparência, curadoria e economia real.
        </p>

        <Link
          href="https://cajuofertas.com.br"
          target="_blank"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all bg-primary rounded-full hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
        >
          Acessar o Caju Ofertas
        </Link>
      </div>
    </footer>
  );
}
