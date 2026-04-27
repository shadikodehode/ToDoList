import { useEffect, useState } from "react"
import { useToDo } from "../hooks/useToDo"
import checkmark from "/checkmark.png"

export default function Header() {
  const { addTask, sortOption, setSortOption } = useToDo()
  const [newTaskName, setNewTaskName] = useState("")
  const [title, setTitle] = useState(() => localStorage.getItem("title") || "TODO")
  const [isEditingTitle, setIsEditingTitle] = useState(false)

  useEffect(() => {
    localStorage.setItem("title", title)
  }, [title])

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

  const sharedStyles = "font-bold text-4xl bg-transparent outline-none text-center w-full"

  return (
    <div className="flex flex-col p-4 gap-4 w-full items-center">

      <div>
        {isEditingTitle
         ? <input
              className={sharedStyles}
              autoFocus
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onBlur={() => setIsEditingTitle(false)}
            />
          : <h1
              className={sharedStyles} 
              onClick={() => setIsEditingTitle(true)}>{title}</h1>
        }
      </div>

      <div className="flex text-center items-center">
        <form onSubmit={handleAddTask}>
          <input className="border-b border-dotted outline-none"
            type="text"
            value={newTaskName}
            onChange={e => setNewTaskName(e.target.value)} 
            placeholder="Note..."
          />
          <button className="pl-4"
            type="submit"
          >
            <img className="w-4 hover:opacity-70" 
              src={checkmark} 
              alt="checkmark" />
          </button>
        </form>
      </div>

      <div className="flex flex-row justify-between text-xs text-gray-600 w-55">
        <div>
          <select 
            value={sortOption.sortBy}
            onChange={(e) => 
              setSortOption(prev => ({ ...prev, sortBy: e.target.value}))
            }
          > 
            <option value="newest">newest</option>
            <option value="oldest">oldest</option>
            <option value="a-to-z">a-z</option>
            <option value="z-to-a">z-a</option>
          </select>
        </div>

        <div>
          <label className="flex gap-2"
            htmlFor="hideorshow"
          >
          hide completed:
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
      </div>
    </div>
  )
}