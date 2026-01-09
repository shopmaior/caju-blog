import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-gray-50 dark:bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Caju Ofertas</h3>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Sua plataforma de economia inteligente. Encontre as melhores
              ofertas e descontos perto de você.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Links Úteis
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home do Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://cajuofertas.com.br"
                  className="hover:text-primary transition-colors"
                >
                  Voltar para o Site
                </Link>
              </li>
              <li>
                <Link
                  href="https://cajuofertas.com.br/contato"
                  className="hover:text-primary transition-colors"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Social Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-de-uso"
                  className="hover:text-primary transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {currentYear} Caju Ofertas. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Feito com <span className="text-red-500">♥</span> por{" "}
            <span className="font-semibold text-foreground">
              Shopmaior Digital
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
