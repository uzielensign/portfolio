"use client";
import React from "react";
import Image from "next/image";
import ThemeToggle from "../../components/ThemeToggle";
import useTheme from "../../hooks/useTheme";

export default function About() {
  const { isDark, toggleTheme } = useTheme();

  // Don't render until theme is determined to avoid mismatch
  if (isDark === null) return null;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center px-4 transition-colors duration-300 relative">
      <ThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
      <section className="max-w-3xl w-full py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Image
            src="/file.svg"
            alt="Uziel Ensign"
            width={160}
            height={160}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg mb-6 md:mb-0"
          />
          <div className="text-left">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">
              Hi, I&apos;m Uziel Ensign, a passionate React and TypeScript
              developer. I love crafting modern, responsive web applications and
              continually learning new technologies.
            </p>
            <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 mb-4">
              My expertise includes building scalable front-end solutions,
              collaborating in agile teams, and delivering pixel-perfect UI
              based on design systems.
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
