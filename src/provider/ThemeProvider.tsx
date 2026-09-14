import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme, type ThemeContextType } from "../context/ThemeContext";

const THEME_STORAGE_KEY = "theme";

interface ThemeProviderProps {
  children: ReactNode;
}

function loadTheme(): Theme {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "dark" || stored === "light" ? stored : "light";
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => loadTheme());

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme: ThemeContextType["toggleTheme"] = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
