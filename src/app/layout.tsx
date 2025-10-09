import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ThemeToggleWrapper from "@/components/ThemeToggleWrapper";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_TITLE = "Arni Sanchez — Portfolio";
const SITE_DESCRIPTION =
  "Portfolio of Arni Sanchez — React & TypeScript developer. Browse projects and contact information.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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

        {/* Use shared Header component that renders plain text on /about */}
        <Header />

        {children}
      </body>
    </html>
  );
}
