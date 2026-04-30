import { useState } from "react"
import { useToDo } from "../context/ToDoContext.jsx"
import deletepng from "/delete.png"

export default function ToDoItem ({ data: {task} }) {
  const { editTask, deleteTask } = useToDo()
  const [isEditing, setIsEditing] = useState(false)
  const [updatedTaskName, setUpdatedTaskName] = useState(task.name)

  function handleBlur() {
    editTask(task.id, { ...task, name: updatedTaskName})
    setIsEditing(false)
  }

  function changeCompleted () {
    editTask(task.id, {...task, completed: !task.completed})
  }
  
  const formattedTime = task.timestamp.toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "numeric"
  })

  const sharedStyles = "turncate w-45 bg-transparent outline-none text-lg pb-1 leading-none"
  
  return (
      <li className="flex flex-col mb-4 py-4">

        <div className="flex gap-2 border-b border-dotted">
          <input 
            className="accent-zinc-700 dark:accent-zinc-100 flex-1"
            type="checkbox" 
            checked={task.completed} 
            onChange={changeCompleted}
          />

          <div>
            {isEditing
              ? <input
                  className={sharedStyles} 
                  autoFocus
                  type="text" 
                  value={updatedTaskName} 
                  onChange={(e) => setUpdatedTaskName(e.target.value)}
                  onBlur={handleBlur}
                />
              : <p
                className={sharedStyles} 
                onClick={() => setIsEditing(true)}>{updatedTaskName}</p>
            }

          </div>
          <button
              className="w-4.1 hover:opacity-70"
              onClick={() => deleteTask(task.id)}>
              <img 
                className="dark:invert"
                src={deletepng} 
                alt="delete" 
              />
            </button>
        </div>
        <p className="text-xs text-gray-500">
          {formattedTime}
        </p>
      </li>
  )
}