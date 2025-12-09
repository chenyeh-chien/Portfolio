import { clsx } from "clsx"
import BlogCategory from "./BlogCategory"
import { CATEGORY_LIST } from "@/lib/posts"

export const dynamic = "force-static" // SSG
export const revalidate = false

export default function BlogMenu() {
  return (
    <nav
      className={clsx(
        "px-3 py-5 min-h-screen flex flex-col gap-10"
      )}>
      {CATEGORY_LIST.map(category => {
        return (
          <BlogCategory
            key={category}
            category={category} />
        )
      })}
    </nav>
  )
}
