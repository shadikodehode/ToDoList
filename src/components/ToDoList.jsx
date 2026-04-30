import { useToDo } from "../context/ToDoContext.jsx"
import ToDoItem from "./ToDoItem.jsx"

export default function ToDoList() {
  const { sortedData, editTask, deleteTask } = useToDo()

  if(sortedData.length === 0) {
    return <h3 className="p-8 -mt-4 font-semibold text-gray-700"> No notes added yet</h3>
  }
  return (
    <ul className="p-4 w-full">
      {sortedData.map(task => {
        return <ToDoItem key={task.id} data={{ task, editTask, deleteTask }}/>
      })}
    </ul>
  )
}