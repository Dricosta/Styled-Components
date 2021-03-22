import { createContext, useState, ReactNode } from "react";
import { light } from "../styles/themes/light";
import { dark } from "../styles/themes/dark";

interface DefaultTheme {
  title: string;
  colors: {
    primary: string;
    secundary: string;
    background: string;
    text: string;
  };
}

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const ThemeContextApp = createContext({} as ThemeContextData);

export function ThemeProviderApp({ children }: CountdownProviderProps) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeContextApp.Provider
      value={{
        toggleTheme,
        theme,
      }}
    >
      {children}
    </ThemeContextApp.Provider>
  );
}
