import CardMyDogs from "../CardMyDogs/CardMyDogs";
import style from "./CardsContainerMyDogs.module.css";


const CardsContainer = ({ currentCard, onClose }) => {
    return (
        <div className={style.mainContainer}>
            <div className={style.cardsContainer}>
                {currentCard?.map(dog => {
                    return <CardMyDogs
                        key={dog.id}
                        id={dog.id}
                        name={dog.name}
                        weight={dog.weight}
                        temperaments={dog.Temperaments?.map(temp => temp).join('-')}
                        image={dog.image}
                        createdBy={dog.createdBy}
                        onClose={onClose}/>
                })}
            </div>
        </div>
    )
}

export default CardsContainer;