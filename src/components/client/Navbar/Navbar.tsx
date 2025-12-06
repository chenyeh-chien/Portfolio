"use client"

import { clsx } from "clsx";
import { useEffect, ReactNode } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useOverflowHidden } from "../utils/hooks";
import BaseButton from "../../utils/buttons/BaseButton";
import SidebarContent from "./SidebarContent";

interface Props {
  blogMenu: ReactNode;
}

export default function Navbar({ blogMenu }: Props) {
  const [showSidebar, setShowSidebar] = useOverflowHidden();
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <header
      className={clsx(
        "fixed top-0 z-9 w-full bg-(--navbar-bg)",
        "text-(--navbar-color) px-5 py-3 flex justify-between"
      )}>
      <button
        className="md:hidden hover:cursor-pointer"
        onClick={handleShowSidebar}>
        {showSidebar ? (
          <RxCross1 />
        ) : (
          <FaBars />
        )}
      </button>
      <h1></h1>
      <nav
        className="gap-10 hidden md:flex">
        <ul className="flex gap-10">
          {links.map(link => {
            return (
              <li
                className="flex justify-center items-center"
                key={link.href}>
                <Link href={link.href}>
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <BaseButton>
        <span>Download CV</span>
      </BaseButton>
      <SidebarContent
        links={links}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        pathname={pathname}
        blogMenu={blogMenu}
      />
    </header>
  )
}