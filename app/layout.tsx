import "@/styles/globals.css";

export const metadata = {
  title: "Blog Caju Ofertas",
  description: "Ofertas e descontos perto de você.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
