import Header from "./components/Header.jsx"
import ToDoList from "./components/ToDoList.jsx"

function App() {

  return (
    <>
      <div className="min-h-screen bg-taupe-200 dark:bg-zinc-900">
        <div className="grid grid-col justify-center text-gray-900 dark:text-zinc-300">
          <div className="flex flex-col items-center justify-center mt-50 border-2 rounded-lg w-70 shadow-sm bg-zinc-100 dark:bg-zinc-800">
            <div className="flex items-center justify-center w-full">
              <Header />
            </div>
            <div>
              <ToDoList />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
