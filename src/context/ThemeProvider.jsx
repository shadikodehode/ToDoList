import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => JSON.parse(localStorage.getItem("isDark")) || false)

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