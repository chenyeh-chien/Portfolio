// app/blog/page.tsx
import BlogCard from "@/components/server/BlogCard"
import { getAllPosts } from "@/lib/posts"

export const dynamic = "force-static" // SSG
export const revalidate = false

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-neutral-500">No posts yet.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </main>
  )
}
