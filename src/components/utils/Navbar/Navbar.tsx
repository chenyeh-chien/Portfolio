"use client"

import { clsx } from "clsx";
import Link from 'next/link';

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
      "text-white p-4 flex justify-between"
    )}>
      <h1></h1>
      <nav className={clsx(
        "flex gap-4"
      )}>
        {links.map(link => {
          return (
            <Link
              href={link.href}
              key={link.href}>
              {link.label}
            </Link>
          )
        })}
      </nav>
      <div>
        <span>Download CV</span>
      </div>
    </header>
  )
}