import { clsx } from "clsx"
import BlogCategory from "./BlogCategory"

export const dynamic = "force-static" // SSG
export const revalidate = false

const CATEGORY_LIST = [
  "Engineering and Ops",
  "Deep Dive and Research",
  "React"
]

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
