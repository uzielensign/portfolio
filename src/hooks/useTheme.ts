import { useCallback, useEffect, useState } from "react";

function readInitialTheme(): boolean | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  } catch {
    return null;
  }
}

export default function useTheme() {
  const [isDark, setIsDark] = useState<boolean | null>(() => readInitialTheme());

  useEffect(() => {
    // If we don't yet know the theme (SSR or blocked access), determine it now on the client
    if (isDark === null) {
      try {
        const stored = localStorage.getItem("theme");
        if (stored === "dark") {
          setIsDark(true);
          return;
        }
        if (stored === "light") {
          setIsDark(false);
          return;
        }
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          setIsDark(true);
        } else {
          setIsDark(false);
        }
      } catch {
        setIsDark(false);
      }
      return;
    }

    // Apply and persist the selected theme
    try {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // ignore errors (e.g. localStorage not available)
    }
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => (prev === null ? true : !prev));
  }, []);

  const setTheme = useCallback((val: boolean) => setIsDark(val), []);

  return { isDark, toggleTheme, setTheme } as const;
}
