import { DishType } from "../types/dishType"

export const getLikes = () => {
  const temp = localStorage.getItem('likes')
  
  if (!temp) {
    return []
  }

  return JSON.parse(temp)
}

export const setLIkes = (dish: DishType) => {
  const likesNext: DishType[] = getLikes()
 
  const filtered = likesNext.filter(dish1 => dish1.id !== dish.id)
  filtered.push(dish)
  localStorage.setItem('likes', JSON.stringify(filtered))
}