import { DishType } from "../types/dishType"

export const getLikes = () => {
  const temp = localStorage.getItem('likes')
  
  if (!temp) {
    return []
  }

  return JSON.parse(temp)
}

export const setLIkes = (dish: DishType) => {
  const likedDishes: DishType[] = getLikes()
 
  const filteredDishesById = likedDishes.filter(dish1 => dish1.id !== dish.id)

  filteredDishesById.push(dish)

  localStorage.setItem('likes', JSON.stringify(filteredDishesById))
}