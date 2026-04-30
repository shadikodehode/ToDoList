import { useState } from "react";
import { useTitle } from "../hooks/useTitle.js";

export function Title() {
  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const [title, setTitle] = useTitle()

  const sharedStyles = "font-bold text-4xl bg-transparent outline-none text-center w-full leading-none"

  return (
    <div className="flex flex-1 h-12 items-center">
            {isEditingTitle
              ? <input
                  className={sharedStyles}
                  autoFocus
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  onBlur={() => setIsEditingTitle(false)}
                />
              : <h1
                  className={sharedStyles} 
                  onClick={() => setIsEditingTitle(true)}>{title}</h1>
            }
          </div>
  )
}
