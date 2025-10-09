"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const pathname = usePathname();

  const isAbout = pathname === "/about";

  return (
    <header className="w-full border-b bg-white/50 dark:bg-black/50 sticky top-0 z-40">
      <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          {/* Render plain text "About" on the /about page, otherwise a link to home */}
          {isAbout ? (
            <span className="font-semibold text-black dark:text-gray-100">About</span>
          ) : (
            <Link href="/" className="font-semibold text-black dark:text-gray-100">
              Go to Homepage
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/projects" className="text-sm text-black dark:text-gray-100">
            Projects
          </Link>
          <Link href="/about" className="text-sm text-black dark:text-gray-100">
            About
          </Link>
          <Link href="/contact" className="text-sm text-black dark:text-gray-100">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

