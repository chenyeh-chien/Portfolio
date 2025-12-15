// app/blog/[slug]/page.tsx
import clsx from "clsx";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { toURLFriendlySlug } from "@/components/utils/utilFunctions";
import {
  getAllPosts,
  getAllPostsByCategoryOrder,
  getPostSource
} from "@/lib/posts"


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
  const fileName = slug[slug.length - 1]
  const { content, meta } = getPostSource(fileName);

  const allPosts = getAllPostsByCategoryOrder();
  const currentIndex = allPosts.findIndex(post => post.slug === fileName);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 flex flex-col gap-4 lg:p-16">
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
      <nav className={clsx(
        "flex flex-col gap-2 lg:flex-row lg:justify-between"
      )}>
        {prevPost && (
          <Link
            className={clsx(
              "w-full flex items-center gap-2 px-4 py-6 rounded-lg",
              "hover:bg-(--primary-color)"
            )}
            href={`/blog/${prevPost.category}/${prevPost.slug}`}>
            <div>
              <FaChevronLeft />
            </div>
            <div className="flex flex-col">
              <span>Previous</span>
              <span>{prevPost.title}</span>
            </div>
          </Link>
        )}
        {nextPost && (
          <Link
            className={clsx(
              "w-full flex items-center gap-2 px-4 py-6 rounded-lg",
              "justify-end text-end hover:bg-(--primary-color)"
            )}
            href={`/blog/${nextPost.category}/${nextPost.slug}`}>
            <div className="flex flex-col">
              <span>Next</span>
              <span>{nextPost.title}</span>
            </div>
            <div>
              <FaChevronRight />
            </div>
          </Link>
        )}
      </nav>
    </main>
  )
}