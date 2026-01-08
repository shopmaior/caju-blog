import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/logo-s.png"
              alt="Cajuzim Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              Blog Caju
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Dicas & Ofertas
            </span>
          </div>
        </Link>

        {/* Navigation / CTA */}
        <div className="flex items-center gap-4">
          {/* Mobile view could have a menu here, keeping it simple for now */}
          <Link
            href="https://cajuofertas.com.br"
            target="_blank"
            className="hidden md:inline-flex items-center justify-center h-9 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-full shadow hover:bg-primary/90 hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Ir para o App
          </Link>
        </div>
      </div>
    </header>
  );
}
