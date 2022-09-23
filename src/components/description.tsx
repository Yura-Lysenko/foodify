import { FC } from "react"

type Props = {
  recipe: string,
  country: string,
  category: string,
}
export const Description: FC<Props> = ({recipe, country, category}) => {

  return (
    <div>
      <h4>Food category: {category}</h4>
      <h4>Origin: {country}</h4>
      <p><h4>How to cook:</h4>{recipe}</p>
    </div>
  )
}