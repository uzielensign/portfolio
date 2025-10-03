import React from "react";
import Link from "next/link";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center px-4 py-12">
      <section className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{p.title}</h2>
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

