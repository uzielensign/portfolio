"use client";
import React from "react";
import useTheme from "@/hooks/useTheme";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { isDark } = useTheme();
  if (isDark === null) return null;
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center px-4 pt-12 relative overflow-hidden font-sans">
      {/* Animated background only in dark mode */}
      <div className="absolute inset-0 z-0 pointer-events-none dark:block hidden">
        <div className="hero-gradient-bg"></div>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute animate-blob1 -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-800/40 via-purple-800/30 to-pink-800/30 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute animate-blob2 top-40 right-[-200px] w-[400px] h-[400px] bg-gradient-to-br from-pink-800/30 via-blue-800/20 to-purple-800/20 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute animate-blob3 bottom-[-150px] left-[-150px] w-[350px] h-[350px] bg-gradient-to-tl from-purple-800/30 via-blue-800/20 to-pink-800/20 rounded-full blur-2xl opacity-50"></div>
        </div>
      </div>
      <section className="max-w-2xl w-full relative z-10 font-sans pt-8">
        <h1 className="page-title text-4xl font-extrabold text-center mb-6">Contact</h1>

        <div className="prose mx-auto text-center mb-6">
          <p className="text-lg text-gray-700 dark:text-gray-300">If you’d like to contact me, please fill out the form below.</p>
        </div>

        {/* Formspree contact form */}
        {/* Replace the string below with your Formspree form ID or set NEXT_PUBLIC_FORMSPREE_FORM_ID in your environment. */}
        {/* Example: NEXT_PUBLIC_FORMSPREE_FORM_ID=f/yourFormId */}
        <ContactForm />
      </section>
    </main>
  );
}
