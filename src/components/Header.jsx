import { useEffect, useState } from "react"
import { useToDo } from "../hooks/useToDo"
import checkmark from "/checkmark.png"
import sun from "/sun.png"

export default function Header() {
  const { addTask, sortOption, setSortOption, setIsDark  } = useToDo()
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

  const sharedStyles = "font-bold text-4xl bg-transparent outline-none text-center w-full leading-none"

  return (
    <div className="flex flex-col p-4 gap-4 w-full items-center">

      <div className="flex w-full ">
        <div className="w-6" />
          <button className="flex -mt-2 -ml-10"
          onClick={() => setIsDark(prev => !prev)}>
            <img className="w-5 h-5 scale-x-[-1] dark:invert" src={sun} alt="sun" />
        </button>
          <div className="flex flex-1 h-12 items-center">
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
      </div>

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
            className="accent-zinc-700 dark:accent-zinc-100"
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