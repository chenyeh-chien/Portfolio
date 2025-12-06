"use client"

import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PostMeta } from "@/lib/posts";
import { toURLFriendlySlug } from "../utils/utilFunctions";

interface Props {
  post: PostMeta;
}

export default function BlogLink({ post }: Props) {
  const pathname = usePathname();
  const href = `/blog/${toURLFriendlySlug(post.category ?? "Others")}/${post.slug}`;

  return (
    <li
      className={clsx(
        pathname === href && "font-bold text-green-800",
        "hover:font-bold"
      )}
      key={post.slug}>
      <Link
        href={href}>{post.title}</Link>
    </li>
  )
}