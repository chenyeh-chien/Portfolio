"use client"

import { clsx } from "clsx";
import Link from 'next/link';
import { FaBars } from "react-icons/fa6";
import BaseButton from "../buttons/BaseButton";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={clsx(
      "fixed top-0 z-9 w-full bg-(--navbar-bg)",
      "text-(--navbar-color) px-5 py-3 flex justify-between"
    )}>
      <button>
        <FaBars className="md:hidden hover:cursor-pointer" />
      </button>
      <h1></h1>
      <nav
        className="gap-10 hidden md:flex">
        <ul className="flex gap-10">
          {links.map(link => {
            return (
              <li className="flex justify-center items-center">
                <Link
                  href={link.href}
                  key={link.href}>
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
    </header>
  )
}