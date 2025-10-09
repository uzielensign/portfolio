"use client";
import Link from "next/link";
import React from "react";
import useTheme from "@/hooks/useTheme";

export default function Home() {
  const { isDark } = useTheme();

  // Don't render until theme is determined to avoid mismatch
  if (isDark === null) return null;

  // Always use Tailwind's dark: variant so the span is black in light mode and white in dark mode
  const imClass = "inline-block font-extrabold not-italic normal-case leading-tight text-black dark:text-white";

  // Keep gradient applied in both themes so these elements continue changing colors
  const gradientTextClass = "inline-block animate-gradient-move-smooth bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent";

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start px-4 pt-8 md:pt-14 transition-colors duration-300 relative overflow-hidden bg-white dark:bg-gray-900 font-sans">
      {/* Animated background only in dark mode */}
      <div className="absolute inset-0 z-0 pointer-events-none dark:block hidden">
        <div className="hero-gradient-bg"></div>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute animate-blob1 -top-28 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-800/40 via-purple-800/30 to-pink-800/30 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute animate-blob2 top-36 right-[-200px] w-[400px] h-[400px] bg-gradient-to-br from-pink-800/30 via-blue-800/20 to-purple-800/20 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute animate-blob3 bottom-[-130px] left-[-130px] w-[350px] h-[350px] bg-gradient-to-tl from-purple-800/30 via-blue-800/20 to-pink-800/20 rounded-full blur-2xl opacity-50"></div>
        </div>
      </div>

      <section className="relative z-10 max-w-3xl w-full flex flex-col items-center justify-center pt-6 gap-6 text-center font-sans">
        {/* Content centered upper-middle */}
        <div className="flex-1 flex flex-col items-center w-full font-sans mt-6 md:mt-0">
          <h1 className="mt-2 md:mt-0 text-3xl sm:text-5xl md:text-6xl font-extrabold text-center mb-1 leading-tight tracking-tight sm:tracking-tighter flex items-center justify-center gap-x-0.5 sm:gap-x-2">
            <span className={gradientTextClass}>
              Hi,
            </span>
            <span className={imClass}>
              I&apos;m
            </span>
            <span className={gradientTextClass}>
              Arni Sanchez
            </span>
          </h1>

          {/* Decorative GIF placed between the heading and the subheading. */}
          {/* Drop your GIF file into `public/hero.gif` and it will render here. */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-poster.png"
            className="w-48 sm:w-64 md:w-80 mt-4 mb-3 rounded-lg shadow-md object-contain"
            aria-hidden="true"
          >
            <source src="/hero.webm" type="video/webm" />
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          <h2 className="text-lg md:text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-3">
            Self-Motivated Learner &amp; Passionate Technologist
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-center text-gray-700 dark:text-gray-300 mb-6 max-w-prose mx-auto">
            Dedicated to mastering new skills and delivering innovative solutions. I thrive on challenges and am committed to continuous growth in the ever-evolving world of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://github.com/uzielensign?tab=repositories"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition animate-gradient-move"
            >
              View Projects
            </a>
            <Link
              href="/about"
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
