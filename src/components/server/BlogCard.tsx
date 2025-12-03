// components/BlogCard.tsx
import { clsx } from "clsx"
import Link from "next/link"
import type { PostMeta } from "@/lib/posts"

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <article
      className={clsx(
        "bg-[#1F1D1D] p-4 rounded-lg"
      )}
    >
      <header className="mb-4">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {new Date(post.date).toLocaleDateString()}
        </p>
      </header>

      {post.description ? (
        <p className="text-neutral-700 dark:text-neutral-300">{post.description}</p>
      ) : null}

      {post.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border px-2 py-1 text-xs text-neutral-600 dark:text-neutral-300"
            >
              #{t}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  )
}
