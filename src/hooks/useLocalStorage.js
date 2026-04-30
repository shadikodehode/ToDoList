import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue, reviver) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key)
    if (!saved) return initialValue
    try {
      const parsed = JSON.parse(saved)
      return reviver ? reviver(parsed) : parsed
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}