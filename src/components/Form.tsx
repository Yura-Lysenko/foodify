import { useState, FormEvent, FC } from "react"
import { DishType } from "../types/dishType"
import { setLIkes } from "../utils/Like"


type Props = {
  active: boolean,
  setActive: (active: boolean) => void
}

export const DishForm: FC<Props> =({active, setActive}) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [country, setCountry] = useState('')
  const [category, setCategory ] = useState('')

  const clear = () => {
    setTitle('');
    setDescription('');
  };
  
  const onSubmit = (event: FormEvent) => {
    event?.preventDefault()
    let isValid = true

    if (title.trim() === '' && description.trim() === '') {
      isValid = false
    }

    if (isValid) {
      const newDish: DishType= {
        imgUrl: 'https://via.placeholder.com/360x270.png?text=no%20preview',
        title: title,
        recipe: description,
        id: 10,
        country: country,
        category: category 
      }
      clear();
      setLIkes(newDish)
      setActive(false)
    }
  }

  return (
    <form 
      className='form'
      onSubmit={onSubmit}
    >
      <h3 className="form__title">Add custom dish</h3>
      <input
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        className='form__input' 
        type="text" 
        placeholder='Dish title'
        required
      />
      <input
        value={category}
        onChange={(event) => {
          setCategory(event.target.value);
        }}
        className='form__input' 
        type="text" 
        placeholder='Dish category'
      />
      <input
        value={country}
        onChange={(event) => {
          setCountry(event.target.value);
        }}
        className='form__input' 
        type="text" 
        placeholder='Dish origin'
      />
      <textarea
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        className='form__textarea' 
        placeholder='Dish description'
        required
      />
      <button 
        type="submit"
        className='form__button'
      >
        Add custom dish
      </button>
    </form>
  )
}
