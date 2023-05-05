import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByOrigin, filterByTemperaments, getDogs, orderByName, orderByWeight } from "../../Redux/actions";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Pagination from "../../Components/Pagination/Pagination";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import newdog2 from "../../assets/img/newdog2.png"
import exit from '../../assets/img/exit.jpg'
import mydogs from "../../assets/img/mydogs.jpg"



const Home = () => {


  const dogs = useSelector((state) => state.dogs);
  const currentDogs = useSelector(state => state.currentDogs)
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
    setCurrentPage(1);
  }, [dispatch])

  const [currentPage, setCurrentPage] = useState(1);
  const cardsxPage = 8;
  const [order, setOrder] = useState('')
  const indexLastCard = currentPage * cardsxPage;
  const indexFirstCard = indexLastCard - cardsxPage;

  const currentCard = currentDogs.length? currentDogs.slice(indexFirstCard, indexLastCard): dogs.slice(indexFirstCard, indexLastCard);

  const pagina = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handlerRefresh = (event) => {
    event.preventDefault();
    dispatch(getDogs());
    setCurrentPage(1);
}

  const handlerFilByTemp = (event) => {
    event.preventDefault();
    dispatch(filterByTemperaments(event.target.value));
    setCurrentPage(1);
    setOrder(`Order ${event.target.value}`)
  }
  const handlerFilterByOrigin = (event) => {
    event.preventDefault();
    dispatch(filterByOrigin(event.target.value))
    setCurrentPage(1);
  }

  const handlerOrderByName = (event) => {
    event.preventDefault();
    dispatch(orderByName(event.target.value))
    setCurrentPage(1);
    setOrder(`Order ${event.target.value}`)

  }

  const handlerOrderByWeight = (event) => {
    event.preventDefault();
    dispatch(orderByWeight(event.target.value))
    setCurrentPage(1);
    setOrder(`Order ${event.target.value}`)
  }


  return (
    <div className={style.mainContainer}>

      <div className={style.imagesContainer}>

        <div>
          <Link to="/create">
            <img className={style.button} src={newdog2} alt="Imag" />
          </Link>
        </div>
        <div>
          <Link to="/mydogs">
            <img className={style.button} src={mydogs} alt="myDogs" />
          </Link>
        </div>

        <div>
          <Link to="/">
            <img className={style.button} src={exit} alt="Imag" />
          </Link>
        </div>

      </div>


      <div className={style.filterContainer}>

        <div>
          <SearchBar setCurrentPage={setCurrentPage} />
          </div>
         

        <div className={style.divsContainer}>
          <select name="FilterByTemp" onChange={handlerFilByTemp}>
            <option value={"All"} >Filter By Temperament</option>
            {temperaments?.map(temp => {
              return <option key={temp.id} value={temp.name}>{temp.name}</option>
            })}
          </select>
        </div>

        <div className={style.divsContainer}>
          <select name="FiterByOrigin" onChange={handlerFilterByOrigin}>
            <option value={"All"} >Filter By Origin</option>
            <option value={"API"}>Api</option>
            <option value={"CREATED"}>Created</option>
          </select>
        </div>


        <div className={style.divsContainer}>
          <select name="OrderByName" onChange={handlerOrderByName} >
            <option value={"All"} >Order By Name</option>
            <option value={"ASCENDENTE"}>A...Z</option>
            <option value={"DESCENDENTE"}>Z...A</option>
          </select>
        </div>

        <div className={style.divsContainer}>
          <select name="OrderByWeight" onChange={handlerOrderByWeight} >
            <option value="All" >Order By Weight</option>
            <option value="ASCENDENTE">↓...↑</option>
            <option value="DESCENDENTE">↑...↓</option>
          </select>
        </div>
      </div>

        <div>
         <button
         className={style.buttonRefresh}
         onClick={handlerRefresh}  >Clean Filters</button>
        </div>





      {/* <div className={style.paginationContainer}> */}
        <Pagination
          cardsxPage={cardsxPage}
          dogs={dogs.length}
          pagina={pagina}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      {/* </div> */}

      <div className={style.cardsContainer}>
        <CardsContainer
          currentCard={currentCard}
        />
      </div>


    </div>
  );
};

export default Home;



