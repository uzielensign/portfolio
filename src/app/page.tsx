"use client";
import Link from "next/link";
import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import useTheme from "../hooks/useTheme";

export default function Home() {
  const { isDark, toggleTheme } = useTheme();

  // Don't render until theme is determined to avoid mismatch
  if (isDark === null) return null;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4 transition-colors duration-300 relative">
      <ThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
      <section className="max-w-2xl w-full text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Hi, I&apos;m Uziel Ensign
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Welcome to my portfolio! I&apos;m a React and TypeScript developer
          passionate about building modern web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://github.com/uzielensign?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          >
            View My Projects
          </a>
          <Link
            href="/about"
            className="inline-block bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            About Me
          </Link>
        </div>
      </section>
    </main>
  );
}
