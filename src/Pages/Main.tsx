import { useEffect, useState } from "react"
import { Dish } from "../components/Dish"
import { getDish } from "../api"
import { DishType } from "../types/dishType"
import { setLIkes } from "../utils/Like"

export const Main = () => {
  const [dish, setDish] = useState<DishType>({} as DishType)

  const getRandomDish = () => {
    getDish()
    .then(data => {
      const {strMealThumb, strMeal, strInstructions, idMeal, strCategory, strArea, } = (data.meals[0])
      const newDish: DishType = {
        imgUrl: strMealThumb,
        title: strMeal,
        recipe: strInstructions,
        id: idMeal,
        category: strCategory,
        country: strArea,
      }
      setDish(newDish)
    })
  }

  const onLike =() => {
    setLIkes(dish);
    getRandomDish()
  }
  
  useEffect(() => {
    getRandomDish();
  }, [])

  return (
    <div className="container">
      <div className="random-dish">
        <Dish dish={dish} />
        <div className="random-dish__button-container">
          <button
            className="dish__button"
            onClick={getRandomDish}
          >
            Skip
          </button>
          <button
            className="dish__button"
            onClick={onLike}
          >
            Like
          </button>
        </div>
      </div>
    </div> 
  )
}