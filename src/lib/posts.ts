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

export const CATEGORY_LIST = [
  "Interview",
  "Engineering and Ops",
  "React",
  "Vue / React Comparison",
  "Deep Dive and Research",
]
const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog")

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""))
}

export function getPostSource(slug: string): { content: string; meta: PostMeta } {
  const realSlug = decodeURIComponent(slug)
  const full = path.join(BLOG_DIR, `${realSlug}.mdx`)
  const raw = fs.readFileSync(full, "utf-8")
  const { content, data } = matter(raw)

  const meta: PostMeta = {
    title: data.title ?? realSlug,
    date: data.date ?? new Date().toISOString(),
    description: data.description ?? "",
    category: data.category ?? "Others",
    tags: data.tags ?? [],
    cover: data.cover ?? "",
    slug: realSlug,
  }

  return { content, meta }
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostSource(slug).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

function getAllPostsByTitleOrder(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostSource(slug).meta)
    .sort((a, b) => a.title < b.title ? -1 : 1)
}

function getSidebarPostsMap() {
  const posts = getAllPostsByTitleOrder();
  const map = CATEGORY_LIST.reduce((acc, category) => {
    return {
      ...acc,
      [category]: []
    }
  }, {} as Record<string, PostMeta[]>);

  posts.forEach((post) => {
    if (!post.category) return;

    map[post.category].push(post);
  })

  return map;
}

export function getAllPostsByCategoryOrder(): PostMeta[] {
  const map = getSidebarPostsMap();

  return CATEGORY_LIST.reduce((acc, category) => {
    return [
      ...acc,
      ...map[category]
    ]
  }, [] as PostMeta[])
}

export function getPostsByCategory(category: string): PostMeta[] {
  const map = getSidebarPostsMap();
  if (!map[category]) return [];
  
  return map[category];
}


