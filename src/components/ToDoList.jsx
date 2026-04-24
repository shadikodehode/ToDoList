import ToDoItem from "./ToDoItem.jsx"

export default function ToDoList({ data: { sortedData, editTask, deleteTask }}) {
  if(sortedData.length === 0) {
    return <h3> No task added yet</h3>
  }
  return (
    <ul>
      {sortedData.map(task => {
        return <ToDoItem key={task.id} data={{ task, editTask, deleteTask }}/>
      })}
    </ul>
  )
}