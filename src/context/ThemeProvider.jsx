import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useLocalStorage("isDark", false)

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark))
  }, [isDark])

const value = useMemo(() => ({ isDark, setIsDark}), [isDark])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}