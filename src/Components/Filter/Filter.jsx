import style from "./Filter.module.css"
//import { useState, useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { filterByTemperaments, resetFilter } from "../../Redux/actions"

const Filter = ({temperaments}) => {
  
    return (
        <div className={style.mainContainer}>



                <div className={style.filterContainer}>
                    <p>Filter by Temperaments</p>
                    {/* <button onClick={resetFil} >reset filtro</button> */}
                    <select name="FilterByTemp">
                        <option value={"Filter"} >All</option>
                        {temperaments?.map(temp => {
                            return <option value={temp.name}>{temp.name}</option>
                        })}
                    </select>
                </div>



                <div className={style.orderContainer}>
                    <p>Filter by origin</p>
                    <select name="FiterByOrigin">
                        <option value="Filter" >All</option>
                        <option value='API'>Api</option>
                        <option value='CEATED'>Created</option>
                    </select>
                </div>


                <div className={style.orderContainer}>
                    <p>Order by name</p>
                    <select name="OrderByName" >
                        <option value="Order" >Order By Name</option>
                        <option value="Ascendente">A...Z</option>
                        <option value="Descendente">Z...A</option>
                    </select>
                </div>



                <div className={style.orderContainer}>
                <p>Order by weight</p>
                    <select name="OrderByWeight" >
                        <option value="Order" >Order By Weight</option>
                        <option value="Ascendente">↑...↓</option>
                        <option value="Descendente">↓...↑</option>
                    </select>
                </div>

        </div>

    )


};

export default Filter;