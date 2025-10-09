"use client";
import Link from "next/link";
import React from "react";
import useTheme from "@/hooks/useTheme";

export default function Home() {
  const { isDark } = useTheme();

  // Don't render until theme is determined to avoid mismatch
  if (isDark === null) return null;

  const imClass = isDark
    // In dark mode: plain white text (no white background box)
    ? "mx-2 inline-block font-extrabold not-italic normal-case leading-tight text-white"
    // In light mode: gradient-colored text (matches Hi, and Arni Sanchez)
    : "mx-2 inline-block font-extrabold not-italic normal-case leading-tight animate-gradient-move-smooth bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent";

  // Shared classes for the other hero parts so they match behavior across themes
  const gradientTextClass = "inline-block animate-gradient-move-smooth bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent";
  const plainWhiteClass = "inline-block text-white";

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start px-4 pt-8 transition-colors duration-300 relative overflow-hidden bg-white dark:bg-gray-900 font-sans">
      {/* Animated background only in dark mode */}
      <div className="absolute inset-0 z-0 pointer-events-none dark:block hidden">
        <div className="hero-gradient-bg"></div>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute animate-blob1 -top-28 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-800/40 via-purple-800/30 to-pink-800/30 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute animate-blob2 top-36 right-[-200px] w-[400px] h-[400px] bg-gradient-to-br from-pink-800/30 via-blue-800/20 to-purple-800/20 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute animate-blob3 bottom-[-130px] left-[-130px] w-[350px] h-[350px] bg-gradient-to-tl from-purple-800/30 via-blue-800/20 to-pink-800/20 rounded-full blur-2xl opacity-50"></div>
        </div>
      </div>

      <section className="relative z-10 max-w-4xl w-full flex flex-col items-center justify-start pt-6 gap-10 text-center font-sans">
        {/* Content centered upper-middle */}
        <div className="flex-1 flex flex-col items-center w-full font-sans mt-8 md:mt-0">
          <h1 className="mt-6 md:mt-0 text-5xl md:text-6xl font-extrabold text-center mb-2 leading-tight">
            <span className={isDark ? plainWhiteClass : gradientTextClass}>
              Hi,
            </span>
            <span className={imClass}>
              I&apos;m
            </span>
            <span className={isDark ? plainWhiteClass : gradientTextClass}>
              Arni Sanchez
            </span>
          </h1>

          <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-4">
            Self-Motivated Learner &amp; Passionate Technologist
          </h2>

          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Dedicated to mastering new skills and delivering innovative solutions. I thrive on challenges and am committed to continuous growth in the ever-evolving world of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/uzielensign?tab=repositories"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition animate-gradient-move"
            >
              View Projects
            </a>
            <Link
              href="/about"
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Add to your globals.css or in a <style jsx global> block:
@keyframes blob1 {
  0%, 100% { transform: translate(-50%, 0) scale(1); }
  33% { transform: translate(-60%, 20px) scale(1.1); }
  66% { transform: translate(-40%, -20px) scale(0.95); }
}
@keyframes blob2 {
  0%, 100% { transform: scale(1) translateY(0); }
  50% { transform: scale(1.1) translateY(-30px); }
}
@keyframes blob3 {
  0%, 100% { transform: scale(1) translateX(0); }
  50% { transform: scale(1.05) translateX(30px); }
}
@keyframes gradient-move {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
@keyframes gradient-move-smooth {
  0%, 100% { background-position: 0% 50%; }
  25% { background-position: 50% 100%; }
  50% { background-position: 100% 50%; }
  75% { background-position: 50% 0%; }
}
.animate-blob1 { animation: blob1 16s ease-in-out infinite; }
.animate-blob2 { animation: blob2 18s ease-in-out infinite; }
.animate-blob3 { animation: blob3 20s ease-in-out infinite; }
.animate-gradient-move { background-size: 200% 200%; animation: gradient-move 4s ease-in-out infinite; }
.animate-gradient-move-smooth {
  background-size: 300% 300%;
  animation: gradient-move-smooth 6s ease-in-out infinite;
}
.animate-fadein { animation: fadeIn 1.2s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
@keyframes hero-fadein {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: none; }
}
.animate-hero-fadein {
  animation: hero-fadein 1.2s cubic-bezier(0.4,0,0.2,1) both;
}
.delay-150 { animation-delay: 0.15s; }
.delay-300 { animation-delay: 0.3s; }
*/
