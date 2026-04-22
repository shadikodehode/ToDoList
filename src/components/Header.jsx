import { useState } from "react"

export default function Header ({ data: { addTask }}) {

  const [newTaskName, setNewTaskName] = useState("")

  function handleAddTask (e) {
    e.preventDefault()

    const newTask = {
      name: newTaskName,
      timestamp: new Date(),
      completed: false,
      id: crypto.randomUUID(),
    }

  addTask(newTask)
  }

 

  return (
    <div>
      <h1>
        Header
      </h1>
      <form 
        onSubmit={handleAddTask}>
        <input 
          type="text"
          onChange={e => setNewTaskName(e.target.value)} 
        />
        <button 
          type="submit">
            Submit Task
        </button>
      </form>
    </div>
  )
}