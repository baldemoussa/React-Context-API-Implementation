import { createContext } from "react";

/*
Theme Switching (ThemeContext)
State: The current theme. Possible values: ‘light’, ‘dark’.
Actions (exposed via context):
toggleTheme(): Switches between ‘light’ and ‘dark’ themes.
Functionality:
The application should visually change based on the selected theme (e.g., background colors, text colors). Apply theme changes to the main app container and ideally a few key components.
ThemeToggleButton: A button to toggle the theme.
*/

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {
    console.warn("toggleTheme function not implemented");
  }
});
