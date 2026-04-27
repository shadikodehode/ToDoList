import Header from "./components/Header.jsx"
import ToDoList from "./components/ToDoList.jsx"

function App() {

  return (
    <>
      <div className="grid grid-col justify-center text-gray-900">
        <div className="flex flex-col items-center justify-center mt-50 border-2 rounded-lg w-70 shadow-sm">
          <div className="flex items-center justify-center w-full">
            <Header />
          </div>
          <div>
            <ToDoList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
