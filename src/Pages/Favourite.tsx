import { useState } from "react"
import { DishesList } from "../components/dishesList"
import { Modal } from "../components/Modal"
import { getLikes } from "../utils/Like"

export const Favourites = () => {
  const [isActive, setIsActive] = useState(false)

  const likedDish = getLikes()

  return (
    <div>
      <div className="add__dish">
      <button 
        className="add__dish-button"
        onClick={() => setIsActive(true)}
      >
        Add new dish
      </button>
    </div>
      <Modal  active={isActive} setActive={setIsActive} />
      <DishesList dishes={likedDish} />
    </div>
  )
}