"use client";
import ThemeToggle from "./ThemeToggle";
import useTheme from "../hooks/useTheme";

export default function ThemeToggleWrapper() {
  const { isDark, toggleTheme } = useTheme();
  return <ThemeToggle isDark={!!isDark} toggleTheme={toggleTheme} />;
}
