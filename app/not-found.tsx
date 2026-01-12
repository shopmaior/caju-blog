import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
      {/* Background patterns/effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="mb-1 relative inline-block backdrop-blur-sm cajuzim-404 w-64 h-64 md:w-88 md:h-88">
          <Image
            src="/cajuzim-404-1.png"
            alt="Cajuzim perdido"
            width={280}
            height={280}
            className="absolute top-0 left-0 block w-64 h-64 md:w-88 md:h-88 object-contain"
            aria-hidden="true"
            priority
          />
          <Image
            src="/cajuzim-404-2.png"
            alt="Cajuzim perdido"
            width={280}
            height={280}
            className="absolute top-0 left-0 block w-64 h-64 md:w-88 md:h-88 object-contain"
            aria-hidden="true"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
          404: Ops!
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
          Você se perdeu no pomar?
        </h2>

        <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
          Não conseguimos encontrar o caju (ou a página) que você estava
          procurando. Talvez ele tenha caído do pé ou já tenha virado suco!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg shadow-primary/25 w-full sm:w-auto"
          >
            Voltar para o Início
          </Link>
          <Link
            href="/blog"
            className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-2xl hover:bg-secondary/90 transition-all transform hover:scale-105 shadow-lg shadow-secondary/25 w-full sm:w-auto"
          >
            Explorar o Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
