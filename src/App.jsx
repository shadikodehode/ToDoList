  import Header from "./components/Header.jsx"
  import ToDoList from "./components/ToDoList.jsx"
import { useTheme } from "./context/ThemeContext.jsx"

  function App() {
    const { isDark } = useTheme()

    return (
      <>
        <div className={isDark ? "dark" : ""}>
          <div className="min-h-screen bg-taupe-200 dark:bg-zinc-900">
            <div className="grid grid-col justify-center text-gray-900 dark:text-zinc-300">
              <div className="flex flex-col p-2 items-center justify-center mt-30 border-2 rounded-lg w-70 shadow-sm bg-zinc-100 dark:bg-zinc-800">
                <div className="flex w-full">
                  <Header />
                </div>
                <div className="flex justify-center w-full">
                  <ToDoList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default App
