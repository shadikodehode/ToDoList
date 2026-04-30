import { createContext, useContext } from "react"

export const ToDoContext = createContext()

export function useToDo() {
  return useContext(ToDoContext)
}