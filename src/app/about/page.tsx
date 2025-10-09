"use client";
import React from "react";
import useTheme from "@/hooks/useTheme";

export default function About() {
  const { isDark } = useTheme();

  // Don't render until theme is determined to avoid mismatch
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
      <section className="max-w-3xl w-full py-16 text-center relative z-10 font-sans">
        <h1 className="page-title text-4xl md:text-5xl font-extrabold text-center mb-6">
          About
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 md:mb-0 shadow-lg">
            AS
          </div>
          <div className="text-left">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">
              Hi, I&apos;m{" "}
              <span className="text-black dark:text-gray-100 font-bold">
                Arni Sanchez
              </span>
              , a passionate React and TypeScript developer. I love crafting
              modern, responsive web applications and continually learning new
              technologies.
            </p>
            <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 mb-4">
              My expertise includes building scalable front-end solutions,
              collaborating in agile teams, and delivering pixel-perfect UI based
              on design systems.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                React
              </span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
