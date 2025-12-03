// app/blog/page.tsx
import BlogCard from "@/components/server/BlogCard"
import { getAllPosts } from "@/lib/posts"

export const dynamic = "force-static" // SSG
export const revalidate = false

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main className="p-4 flex flex-col gap-4">
      {posts.map((p) => (
        <BlogCard
          key={p.slug}
          post={p} />
      ))}
    </main>
  )
}
