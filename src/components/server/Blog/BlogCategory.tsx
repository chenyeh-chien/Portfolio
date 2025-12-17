import { clsx } from "clsx";
import { getPostsByCategory } from "@/lib/posts";
import BlogLink from "@/components/client/Navbar/BlogLink";

interface Props {
  category: string;
}

export default function BlogCategory({ category }: Props) {
  const posts = getPostsByCategory(category);

  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-bold">{category}</h2>
      <ul
        className={clsx(
          "flex flex-col gap-1",
          "border-l-2 border-gray-400 pl-4"
        )}>
        {posts.map(post => {
          return (
            <BlogLink
              key={post.slug}
              post={post}
            />
          )
        })}
      </ul>
    </section>
  )
}