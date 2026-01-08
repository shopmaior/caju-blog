import "@/styles/globals.css";

export const metadata = {
  title: "Blog Caju Ofertas",
  description: "Economia real no dia a dia.",
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
