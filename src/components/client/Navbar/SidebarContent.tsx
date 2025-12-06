"use client"

import { clsx } from "clsx";
import { ReactNode } from "react";
import Link from "next/link";
import type { NavLink } from "@/types/common";


interface Props {
  links: NavLink[];
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
  pathname: string;
  blogMenu: ReactNode;
}

export default function SidebarContent({
  links,
  showSidebar,
  setShowSidebar,
  pathname,
  blogMenu
}: Props) {
  const showBlogMenu = pathname === "/blog" || pathname.startsWith("/blog/");

  return (
    <aside
      className={clsx(
        'fixed left-0 top-14 h-full p-5',
        'opacity-0 duration-300 ease-in-out -translate-x-full',
        showSidebar && 'opacity-100 translate-x-0',
        'bg-white w-full overflow-y-auto',
      )}
      aria-label="Mobile navigation menu">
      <nav>
        <ul
          className={clsx(
            "flex gap-2 justify-between",
            "border-b border-b-[#EBE8E8]"
          )}>
          {links.map(link => {
            return (
              <li
                className={clsx(
                  "px-3 py-2",
                  link.href === pathname && "font-bold"
                )}
                key={link.href}
                onClick={() => setShowSidebar(false)}>
                <Link href={link.href}>
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      {showBlogMenu && blogMenu}
    </aside>
  )
}