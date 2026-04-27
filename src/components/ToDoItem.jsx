import { useState } from "react"
import deletepng from "/delete.png"

export default function ToDoItem ({ data: {task, editTask, deleteTask} }) {
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
  }
  )

  const sharedStyles = "turncate w-45 bg-transparent outline-none text-lg pb-1 leading-none"
  
  return (
    <div>
      <li className="flex flex-col mb-4">

        <div className="flex flex-row gap-2 justify-between border-b border-dotted p-2">
          <input 
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
              className="w-4 hover:opacity-70"
              onClick={() => deleteTask(task.id)}>
              <img 
                src={deletepng} 
                alt="delete" />
            </button>
        </div>
        <p className="text-xs text-gray-500">
          {formattedTime}
        </p>
      </li>
    </div>
  )
}