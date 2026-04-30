import { useCallback, useMemo } from "react"
import { ToDoContext } from "./ToDoContext.jsx"
import { useLocalStorage } from "../hooks/useLocalStorage.js"

export default function ToDoProvider({ children }) {

 const [toDoData, setToDoData] = useLocalStorage(
  "toDoData", 
  [], 
  (data) => data.map(
    task => ({
       ...task, 
       timestamp: new Date(
        task.timestamp)
      }
    )))

  const [sortOption, setSortOption] = useLocalStorage(
    "sortOption",
  { sortBy: "newest", hideCompleted: false}
)

  const addTask = useCallback((newTask) => {
    setToDoData((prev) => [...prev, newTask])
  }, [setToDoData])

  const deleteTask = useCallback((id) => {
    setToDoData((prev) => prev.filter(task  => task.id !== id))
  }, [setToDoData])

  const editTask = useCallback((id, updatedTask) => {
    setToDoData((prev) => prev.map(task => (task.id === id ? {...task, ...updatedTask} : task)))
  }, [setToDoData])

    const sortedData = useMemo(() => 
      [...toDoData]
        .filter(task => !task.completed || !sortOption.hideCompleted)
        .sort((a, b) => {
          switch (sortOption.sortBy)  {
            case "a-to-z":
              return a.name.localeCompare(b.name)
            case "z-to-a":
              return b.name.localeCompare(a.name)
            case "oldest":
              return a.timestamp - b.timestamp
            case "newest":
              return b.timestamp - a.timestamp
          }
        }
      ), [toDoData, sortOption]) 

    const value = useMemo(() => ({
    sortedData, addTask, deleteTask, editTask, sortOption, setSortOption
    }), [sortedData, addTask, deleteTask, editTask, sortOption, setSortOption])
  
  return (
    <ToDoContext.Provider value={value}>
      {children}     
    </ToDoContext.Provider>
  )
}