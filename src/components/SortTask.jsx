import { useToDo } from "../context/ToDoContext.jsx"

export function SortTask() {
  const { sortOption, setSortOption } = useToDo()

  return (
    <div className="flex flex-row justify-between text-xs text-gray-600 w-55">
        <div>
          <select 
            value={sortOption.sortBy}
            onChange={(e) => 
              setSortOption(prev => ({ ...prev, sortBy: e.target.value}))
            }
          > 
            <option value="newest">newest</option>
            <option value="oldest">oldest</option>
            <option value="a-to-z">a-z</option>
            <option value="z-to-a">z-a</option>
          </select>
        </div>

        <div>
          <label className="flex gap-2"
            htmlFor="hideorshow"
          >
          hide completed:
          <input 
            className="accent-zinc-700 dark:accent-zinc-100"
            type="checkbox" 
            id="hideorshow" 
            checked={sortOption.hideCompleted}
            onChange={e => setSortOption(prev => ({
              ...prev, hideCompleted: e.target.checked,
            }))} 
          />  
          </label>
        </div>
      </div>
  )
}