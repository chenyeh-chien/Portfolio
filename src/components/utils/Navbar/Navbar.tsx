"use client"

import { clsx } from "clsx";
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={clsx(
      "text-white"
    )}>
      <nav>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  )
}