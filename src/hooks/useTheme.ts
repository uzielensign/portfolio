"use client";

import { useCallback, useEffect, useState } from "react";

export default function useTheme() {
  // Start with null so server and initial client render match. The actual
  // theme is determined in useEffect which runs only on the client.
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    // Determine theme on the client and apply it.
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") {
        setIsDark(true);
        document.documentElement.classList.add("dark");
        return;
      }
      if (stored === "light") {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
        return;
      }

      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    } catch {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark === null) return;
    try {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // ignore
    }
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => (prev === null ? true : !prev));
  }, []);

  const setTheme = useCallback((val: boolean) => setIsDark(val), []);

  return { isDark, toggleTheme, setTheme } as const;
}
