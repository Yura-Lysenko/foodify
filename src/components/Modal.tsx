import { FC} from "react"
import {DishForm } from './Form'

type Props = {
  active: boolean,
  setActive: (active: boolean) => void
}

export const Modal: FC<Props> =(props) => {
  const {active, setActive} = props;

  return (
    <div 
      className={active ? "modal active" : "modal"} 
      onClick={()=>setActive(false)}
    >
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <DishForm setActive={setActive}/>
      </div>
    </div>
  )
}
