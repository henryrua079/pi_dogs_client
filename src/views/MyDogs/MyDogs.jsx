import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getDogsByUserId, deleteDogById } from "../../Redux/actions";
import CardsContainerMyDogs from "../../Components/CardsContainerMyDogs/CardsContainerMyDogs";
import Pagination from "../../Components/Pagination/Pagination";
import style from "./MyDogs.module.css";
import newdog2 from "../../assets/img/newdog2.png"
import exit from '../../assets/img/exit.jpg'
import home from "../../assets/img/home.png"



const MyDogs = () => {

    const dispatch = useDispatch();
    const {push} =useHistory();
    const {confirm} = window;
    const currentUser = useSelector((state) => state.currentuser)
    const MyDogs = useSelector((state) => state.mydogs);


  useEffect(() => {
    dispatch(getDogsByUserId(currentUser.id));
  }, [currentUser.id, dispatch])

  const [currentPage, setCurrentPage] = useState(1);
  const cardsxPage = 8;
  const indexLastCard = currentPage * cardsxPage;
  const indexFirstCard = indexLastCard - cardsxPage;

  const currentCard = MyDogs.slice(indexFirstCard, indexLastCard);

  const pagina = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

const onClose = async (id) => {  

    const result = confirm("Are you sure you want to delete this breed?");
    if (result) {
      dispatch(deleteDogById(id, currentUser.id))
    } else {
      push('/mydogs');
    }
  }

  return (
    <div className={style.mainContainer}>


      <div className={style.imagesContainer}>

        <div>
          <Link to="/home">
            <img className={style.button} src={home} alt="home" />
          </Link>
        </div>

        <div>
          <Link to="/create">
            <img className={style.button} src={newdog2} alt="create" />
          </Link>
        </div>

        <div>
          <Link to="/">
            <img className={style.button} src={exit} alt="exit" />
          </Link>
        </div>

      </div>


{/* 
      <div className={style.filterContainer}>

        <SearchBar setCurrentPage={setCurrentPage} />


        <div className={style.divsContainer}>
          <select name="FilterByTemp" onChange={handlerFilByTemp}>
            <option value={"All"} >Filter By Temperament</option>
            {temperaments?.map(temp => {
              return <option key={temp.id} value={temp.name}>{temp.name}</option>
            })}
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
      </div> */}

      {/* {MyDogs.length?
      
      <> */}
      <div className={style.paginationContainer}>
          <Pagination
            cardsxPage={cardsxPage}
            dogs={MyDogs.length}
            pagina={pagina}
            currentPage={currentPage} />
        </div><div className={style.cardsContainer}>
            <CardsContainerMyDogs
              currentCard={currentCard}
              onClose={onClose} />
          </div>
          
          {/* </>
       : <h1>No tienes Perros Creados</h1>} */}





    </div>
 );
};

export default MyDogs;



