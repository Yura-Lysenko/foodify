import { FC} from "react"
import {DishForm } from './Form'

type Props = {
  active: boolean,
  setActive: (active: boolean) => void
}

export const Modal: FC<Props> =({active, setActive}) => {

  return (
    <div 
      className={active ? "modal active" : "modal"} 
      onClick={()=>setActive(false)}
    >
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <DishForm active={active} setActive={setActive}/>
      </div>
    </div>
  )
}
