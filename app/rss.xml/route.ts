import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const posts = getAllPosts();

  const siteUrl = "https://blog.cajuofertas.com.br";

  const items = posts
    .map((post) => {
      return `
        <item>
          <title><![CDATA[${post.meta.title}]]></title>
          <description><![CDATA[${post.meta.description}]]></description>
          <link>${siteUrl}/blog/${post.slug}</link>
          <guid>${siteUrl}/blog/${post.slug}</guid>
          <pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
        </item>
      `;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Caju Ofertas – Blog</title>
    <link>${siteUrl}</link>
    <description>Economia real no dia a dia. Curadoria, não spam.</description>
    <language>pt-BR</language>
    ${items}
  </channel>
</rss>`.trim();

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=UTF-8",
    },
  });
}
