import { useState, useEffect } from "react"
import { ToDoContext } from "./ToDoContext.jsx"

export function ToDoProvider({ children }) {

 const [toDoData, setToDoData] = useState(() => {
    const savedData = localStorage.getItem("toDoData")
    
    return savedData 
      ? JSON.parse(savedData).map(task => ({
        ...task,
        timestamp: new Date(task.timestamp)
      })) 
    : []
  })

  const [sortOption, setSortOption] = useState(() => {
    const savedSort = localStorage.getItem("sortOption")
    return JSON.parse(savedSort) || { sortBy: "newest", hideCompleted: false }
  })

  useEffect(() => {
    localStorage.setItem("toDoData", JSON.stringify(toDoData))
    localStorage.setItem("sortOption", JSON.stringify(sortOption))
  }, [toDoData, sortOption])

  const [isDark, setIsDark] = useState(() => JSON.parse(localStorage.getItem("isDark")) || false)

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark))
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  function addTask(newTask) {
    setToDoData((prev) => [...prev, newTask])
  }

  function deleteTask(id) {
    setToDoData((prev) => prev.filter(task  => task.id !== id))
  }
  function editTask(id, updatedTask) {
    setToDoData((prev) => prev.map(task => (task.id === id ? {...task, ...updatedTask} : task)))
  }

    const sortedData = [...toDoData]
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
      })
  

  return (
    <ToDoContext.Provider value={{ sortedData, addTask, deleteTask, editTask, sortOption, setSortOption, isDark, setIsDark }}>
      {children}     
    </ToDoContext.Provider>
  )
}