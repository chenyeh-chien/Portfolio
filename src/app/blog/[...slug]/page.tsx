// app/blog/[slug]/page.tsx
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";
import { toURLFriendlySlug } from "@/components/utils/utilFunctions";
import { getAllPosts, getPostSource } from "@/lib/posts"

export const dynamic = "force-static" // SSG
export const revalidate = false

// 讓 Next 在 build 時產出 SSG 靜態路徑
export function generateStaticParams() {
  const allPosts = getAllPosts();

  return allPosts.map(post => {
    const category = post.category || "Others";
    const categorySlug = toURLFriendlySlug(category);

    return {
      slug: [categorySlug, post.slug],
    };
  });
}

// 文章內可用的客製元件（需要時再加）
const mdxComponents = {
  // Example: code snippet wrapper, custom alert, etc.
}

export default async function BlogPostPage({ params }:
  { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params
  const { content, meta } = getPostSource(slug[slug.length - 1])

  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <article className="prose-blog">
        <h1 className="mb-2">{meta.title}</h1>
        <p className="mt-0 text-sm text-neutral-500">
          {new Date(meta.date).toLocaleDateString()}
        </p>
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                [rehypeShiki, { theme: "github-dark" }] // 可以換 theme ex: "vitesse-dark"
              ],
            },
          }}
        />
      </article>
    </main>
  )
}

// bg-[#242222]