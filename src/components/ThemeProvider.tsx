import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type Ctx = { theme: Theme; toggle: () => void; setTheme: (t: Theme) => void };

const ThemeCtx = createContext<Ctx | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme = stored ?? (prefersDark ? "dark" : "light");
    setThemeState(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);
  const toggle = () => setThemeState((t) => (t === "dark" ? "light" : "dark"));

  return <ThemeCtx.Provider value={{ theme, toggle, setTheme }}>{children}</ThemeCtx.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
