import React, { createContext, useCallback, useMemo, useEffect, useState } from "react";
import { usePrefersColorScheme } from "../hooks/usePrefersColorScheme";

const THEMES = ["light", "dark", "contrast"];

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const prefers = usePrefersColorScheme();
  const [theme, setThemeRaw] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored || prefers || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Sync if system changes
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      setThemeRaw(prefers || "light");
    }
  }, [prefers]);

  const setTheme = useCallback((t) => setThemeRaw(t), []);
  const nextTheme = useCallback(() => {
    setThemeRaw((prev) => {
      const idx = THEMES.indexOf(prev);
      return THEMES[(idx + 1) % THEMES.length];
    });
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, nextTheme, themes: THEMES }),
    [theme, setTheme, nextTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
