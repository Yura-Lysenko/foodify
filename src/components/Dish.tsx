/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react"
import { DishType } from "../types/dishType"
import {Description } from './description'

type Props = {
  dish: DishType
}
export const Dish: FC<Props> = (props) => {
const { dish } = props

  return (
    <div>
      <div className="dish__container">
        <img 
          className="dish__img" 
          src={dish.imgUrl}>
        </img>
        <h3 className="dish__title">{dish.title}</h3>
        <div className="dish__description">
          <Description recipe={dish.recipe} country={dish.country} category={dish.category} />
        </div>
    </div>
  </div>
  )
}