import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";
import ThemeToggleWrapper from "../components/ThemeToggleWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  title: "Arni Sanchez — Portfolio",
  description:
    "Portfolio of Arni Sanchez — React & TypeScript developer. Browse projects and contact information.",
  openGraph: {
    title: "Arni Sanchez — Portfolio",
    description:
      "Portfolio of Arni Sanchez — React & TypeScript developer. Browse projects and contact information.",
    images: [
      {
        url: "/og-image.svg",
        alt: "Arni Sanchez — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arni Sanchez — Portfolio",
    description:
      "Portfolio of Arni Sanchez — React & TypeScript developer. Browse projects and contact information.",
    images: ["/og-image.svg"],
  },
};

const themeInit = `
(function() {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (t === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>

        {/* Fixed ThemeToggle in upper right corner */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggleWrapper />
        </div>

        {/* Minimal header/navigation */}
        <header className="w-full border-b bg-white/50 dark:bg-black/50 sticky top-0 z-40">
          <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <div>
              <Link
                href="/"
                className="font-semibold text-black dark:text-gray-100"
              >
                Go to Homepage
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/projects"
                className="text-sm text-black dark:text-gray-100"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-sm text-black dark:text-gray-100"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-black dark:text-gray-100"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
