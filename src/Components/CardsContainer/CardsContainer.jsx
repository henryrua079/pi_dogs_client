import Card from "../Card/Card";
import style from "./CardsContainer.module.css";


const CardsContainer = ({ currentCard }) => {
    return (
        <div className={style.mainContainer}>
            <div className={style.cardsContainer}>
                {currentCard?.map(dog => {
                    return <Card
                        key={dog.id}
                        id={dog.id}
                        name={dog.name}
                        weight={dog.weight}
                        temperaments={dog.Temperaments?.map(temp => temp).join('-')}
                        image={dog.image}
                        createdBy={dog.createdBy} />
                })}
            </div>
        </div>
    )
}

export default CardsContainer;