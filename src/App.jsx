import Header from "./components/Header.jsx"
import ToDoList from "./components/ToDoList.jsx"
import { useState } from "react"

function App() {

  const [toDoData, setToDoData] = useState([])

  function addTask(newTask) {
    setToDoData((prev) => [...prev, newTask])
    console.log(toDoData)
  }

  return (
    <>
      <Header data={{addTask}}/>
      <ToDoList />
    </>
  )
}

export default App
