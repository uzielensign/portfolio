"use client";
import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import useTheme from "@/hooks/useTheme";

export default function Projects() {
  const { isDark } = useTheme();
  if (isDark === null) return null;
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center px-4 pt-12 transition-colors duration-300 relative overflow-hidden font-sans">
      {/* Animated background only in dark mode */}
      <div className="absolute inset-0 z-0 pointer-events-none dark:block hidden">
        <div className="hero-gradient-bg"></div>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute animate-blob1 -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-800/40 via-purple-800/30 to-pink-800/30 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute animate-blob2 top-40 right-[-200px] w-[400px] h-[400px] bg-gradient-to-br from-pink-800/30 via-blue-800/20 to-purple-800/20 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute animate-blob3 bottom-[-150px] left-[-150px] w-[350px] h-[350px] bg-gradient-to-tl from-purple-800/30 via-blue-800/20 to-pink-800/20 rounded-full blur-2xl opacity-50"></div>
        </div>
      </div>
      <section className="max-w-4xl w-full relative z-10 font-sans pt-8">
        <h1 className="page-title text-4xl font-extrabold text-center mb-6">
          Projects
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2 text-black dark:text-gray-100">{p.title}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{p.summary}</p>
              <div className="flex items-center gap-3">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400">Source</a>
                <Link href="/" className="text-sm text-gray-500">Back</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
