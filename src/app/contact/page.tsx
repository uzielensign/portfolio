import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center px-4 py-12">
      <section className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Contact</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">I’d love to hear from you — whether it’s about a project, collaboration, or just to say hi.</p>
        <p className="mb-6">
          <a href="mailto:youremail@example.com" className="inline-block bg-blue-600 text-white px-6 py-2 rounded">Email me</a>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Or connect via <a href="https://github.com/uzielensign" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">GitHub</a>.</p>
      </section>
    </main>
  );
}

