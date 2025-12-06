import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export type PostMeta = {
  title: string
  date: string
  description?: string
  category?: string
  tags?: string[]
  cover?: string
  slug: string
}

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog")

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""))
}

export function getPostSource(slug: string): { content: string; meta: PostMeta } {
  const full = path.join(BLOG_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(full, "utf-8")
  const { content, data } = matter(raw)

  const meta: PostMeta = {
    title: data.title ?? slug,
    date: data.date ?? new Date().toISOString(),
    description: data.description ?? "",
    category: data.category ?? "Others",
    tags: data.tags ?? [],
    cover: data.cover ?? "",
    slug,
  }

  return { content, meta }
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostSource(slug).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostSource(slug).meta)
    .filter((post) => post.category === category)
    .sort((a, b) => a.title < b.title ? -1 : 1)
}

