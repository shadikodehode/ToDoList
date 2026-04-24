import { useState } from "react"

export default function Header ({ data: { addTask, sortOption, setSortOption }}) {

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
      <h1> Header </h1>
      <form onSubmit={handleAddTask}>
        <input 
          type="text"
          onChange={e => setNewTaskName(e.target.value)} 
        />
        <button 
          type="submit">
            Submit Task
        </button>
      </form>
      <select 
        value={sortOption.sortBy}
        onChange={(e) => 
          setSortOption(prev => ({ ...prev, sortBy: e.target.value}))
        }
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="a-to-z">a-z</option>
        <option value="z-to-a">z-a</option>
      </select>
      <label 
        htmlFor="hideorshow"
      >
        Hide completed tasks:
        <input 
          type="checkbox" 
          id="hideorshow" 
          checked={sortOption.hideCompleted}
          onChange={e => setSortOption(prev => ({
            ...prev, hideCompleted: e.target.checked,
          }))} 
        />  
      </label>
    </div>
  )
}