import { useTheme } from "../context/ThemeContext.jsx"
import sun from "/sun.png"

export function ThemeSwitcher() {
  const { setIsDark } = useTheme()

  return (
    <button 
      className="flex -mt-2 -ml-10"
      onClick={() => setIsDark(prev => !prev)}>
      <img className="w-5 h-5 scale-x-[-1] dark:invert" src={sun} alt="sun" />
  </button>
  )
}
