import { useEffect, useState } from "react"

export function useTitle() {
  const [title, setTitle] = useState(() => localStorage.getItem("title") || "TODO")
   useEffect(() =>  localStorage.setItem("title", title), [title])

  return [title, setTitle]
}