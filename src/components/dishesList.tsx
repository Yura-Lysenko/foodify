import { FC} from "react";
import { DishType } from "../types/dishType"
import { Dish } from "./Dish";

type Props = {
  dishes: DishType[],
}
export const DishesList: FC<Props> = (props) => {
  const { dishes } = props;
  
  return(
    <div className="container">
      <div className="dish__list">
        {dishes.map(dish => <Dish dish={dish} key={dish.id}/>)}
    </div>
    </div>
  )
}