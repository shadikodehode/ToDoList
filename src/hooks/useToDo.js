import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext.jsx"

export function useToDo() {
  return useContext(ToDoContext)
}