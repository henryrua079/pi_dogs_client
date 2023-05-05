import { Link } from "react-router-dom"
import style from './Card.module.css'
import dogDefault from "../../assets/img/defaultDog.png"

const Card = (props) => {
  return (
    <div style={style.mainContainer}>
      <Link className={style.words} to={`/detail/${props.id}`}>
        <div className={style.cardContainer}>
          <p>{props.name}</p>
          {props.image? <img className={style.image} src={props.image} alt="imagen" /> : <img className={style.image} src={dogDefault}  alt="imagen" />}
          <p>{props.weight} Kg</p>
          <p>{props.createdBy}</p>
          <p className={style.temps}>{props.temperaments}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card