import Link from "next/link";

export function ArticleFooter() {
  return (
    <footer className="mt-16 border-t pt-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <p className="text-base font-medium">
          Este conteúdo faz parte do compromisso do Caju Ofertas com
          transparência, curadoria e economia real.
        </p>

        <p className="mt-3 text-sm text-gray-600">
          Se fizer sentido para você, confira as ofertas disponíveis na
          plataforma.
        </p>

        <Link
          href="https://cajuofertas.com.br"
          className="inline-block mt-4 text-sm font-semibold text-red-600 hover:underline"
        >
          Acessar o Caju Ofertas
        </Link>
      </div>
    </footer>
  );
}
