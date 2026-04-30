import { useMemo } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useLocalStorage("isDark", false)

const value = useMemo(() => ({ isDark, setIsDark}), [isDark, setIsDark])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}