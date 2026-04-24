import Header from "./components/Header.jsx"
import ToDoList from "./components/ToDoList.jsx"
import { useToDo } from "./hooks/useToDo.js"

function App() {

  const { addTask, sortOption, setSortOption, sortedData, editTask, deleteTask } = useToDo()

  return (
    <>
      <div className="grid grid-cols">
        <div className="flex flex-col items-center">
          <div className="flex flex-row">
            <Header data={{ addTask, sortOption, setSortOption }} />
          </div>
          <div>
            <ToDoList data={{ sortedData, editTask, deleteTask }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
