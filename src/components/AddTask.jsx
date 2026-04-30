import { useState } from "react"
import { useToDo } from "../context/ToDoContext.jsx"
import checkmark from "/checkmark.png"

export function AddTask() {
  const [newTaskName, setNewTaskName] = useState("")
  const { addTask } = useToDo()
  
  function handleAddTask (e) {
     e.preventDefault()
 
     const newTask = {
       name: newTaskName,
       timestamp: new Date(),
       completed: false,
       id: crypto.randomUUID(),
     }
     addTask(newTask)
     setNewTaskName("")
   } 
  return (
    <div className="flex w-full text-center border-b border-dotted">
        <form className="flex w-full" onSubmit={handleAddTask}>
          <input className="outline-none flex-1"
            type="text"
            value={newTaskName}
            onChange={e => setNewTaskName(e.target.value)} 
            placeholder="Note..."
          />
          <button 
              className="hover:opacity-70 shrink-0"
              type="button"
              onClick={handleAddTask}
            >
              <img 
                className="w-4 dark:invert"
                src={checkmark} 
                alt="checkmark" 
              />
            </button>
        </form>
      </div>
  )
}