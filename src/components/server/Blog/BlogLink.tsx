"use client"

import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PostMeta } from "@/lib/posts";
import { toURLFriendlySlug } from "../utils/utilFunctions";
import { useSidebar } from "@/context/SidebarContext";

interface Props {
  post: PostMeta;
}

export default function BlogLink({ post }: Props) {
  const pathname = usePathname();
  const sidebar = useSidebar();
  const href = `/blog/${toURLFriendlySlug(post.category ?? "Others")}/${post.slug}`;

  return (
    <li
      className={clsx(
        "py-2",
        pathname === href && "font-bold text-green-800",
        "hover:font-bold"
      )}
      onClick={() => sidebar?.setShowSidebar(false)}
      key={post.slug}>
      <Link
        href={href}>{post.title}</Link>
    </li>
  )
}