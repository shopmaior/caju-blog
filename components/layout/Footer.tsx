export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col md:flex-row h-16 items-center w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-3 justify-between w-full text-center md:text-left py-2 px-4">
          <p className="text-sm md:text-base">
            © {2026} Caju Ofertas. Todos os direitos e esquerdos reservados.
          </p>
          <p className="text-sm md:text-base">Shopmaior Digital</p>
        </div>
      </div>
    </footer>
  );
}
