import { useLocalStorage } from "./useLocalStorage"

export function useTitle() {
  const [title, setTitle] = useLocalStorage("title", "TODO")

  return [title, setTitle]
}