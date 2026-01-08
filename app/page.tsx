import { getAllPosts } from "@/lib/posts";

export default function BlogHome() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Blog Caju Ofertas</h1>
      <p className="mt-2 text-gray-600">
        Economia real no dia a dia. Curadoria, não spam.
      </p>

      <ul className="mt-8 space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`} className="text-xl font-semibold">
              {post.meta.title}
            </a>
            <p className="text-gray-600">{post.meta.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
