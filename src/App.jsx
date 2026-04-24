import Header from "./components/Header.jsx"
import ToDoList from "./components/ToDoList.jsx"
import { useToDo } from "./hooks/useToDo.js"

function App() {

  const { addTask, sortOption, setSortOption, sortedData, editTask, deleteTask } = useToDo()

  


  return (
    <>
      <Header data={{ addTask, sortOption, setSortOption }} />
      <ToDoList data={{ sortedData, editTask, deleteTask }} />
    </>
  )
}

export default App
