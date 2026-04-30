import { Title } from "./Title.jsx"
import { ThemeSwitcher } from "./ThemeSwitcher.jsx"
import { AddTask } from "./AddTask.jsx"
import { SortTask } from "./SortTask.jsx"

export default function Header() {
  

  return (
    <div className="flex flex-col p-4 gap-4 w-full items-center">
      <div className="flex w-full ">
              <div className="w-6" />
                <ThemeSwitcher />
                <Title />
            </div>
      <AddTask />
      <SortTask />
    </div>
  )
}