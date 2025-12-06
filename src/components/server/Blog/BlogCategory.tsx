import { getPostsByCategory } from "@/lib/posts";
import BlogLink from "./BlogLink";

interface Props {
  category: string;
}

export default function BlogCategory({ category }: Props) {
  const posts = getPostsByCategory(category);

  return (
    <section className="flex flex-col gap-1">
      <h2 className="font-bold">{category}</h2>
      <ul className="flex flex-col gap-1">
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