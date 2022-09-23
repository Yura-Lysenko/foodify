import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className='nav'>
        <NavLink className={'nav__link'}
          to="randomDish"
        >
          Random Dish
        </NavLink>
        <NavLink
          className={'nav__link'}
          to="favourites">
            Favourites
        </NavLink>
    </nav>
  )
}