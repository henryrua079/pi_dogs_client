import { Link } from "react-router-dom"
import style from './CardMyDogs.module.css'
import dogDefault from "../../assets/img/defaultDog.png"

const Card = (props) => {




  return (
    <div style={style.mainContainer}>
      <div className={style.cardContainer}>
        <button className={style.buttonClose} onClick={() => props.onClose(props.id)}>X</button>
        <p>{props.name}</p>

        <Link className={style.words} to={`/detail/${props.id}`}>
          {props.image ? <img className={style.image} src={props.image} alt="imagen" /> : <img className={style.image} src={dogDefault} alt="imagen" />}
        </Link>

        <p>{props.weight} Kg</p>
        <p>{props.createdBy}</p>
        <p className={style.temps}>{props.temperaments}</p>
      </div>
    </div>
  )
}

export default Card