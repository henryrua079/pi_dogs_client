import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";
import style from "./Detail.module.css"
import dogDefault from "../../assets/img/defaultDog.png"
import home from "../../assets/img/home.png"
import newdog2 from "../../assets/img/newdog2.png"
import mydogs from "../../assets/img/mydogs.jpg"
import exit from "../../assets/img/exit.jpg"

const Detail = ({setAccess}) => { 


    const history = useHistory();
    const {id} = useParams();
    const [dog, setDog] = useState({});

    useEffect(() => {
        axios.get(`/dogs/${id}`)
            .then(res => setDog(res.data))
            .catch(err => {
                alert(err.response.data.error)
                history.push('/home')
            })
    }, [history, id])

 
    return (

        <div className={style.mainContainer}>

            <div className={style.ImageContainer}>

                <Link to="/home">
                    <div className={style.buttonDiv}>
                        <img className={style.button} src={home} alt="Imag" />
                    </div>
                </Link>

                <Link to="/mydogs">
                    <div className={style.buttonDiv}>
                        <img className={style.button} src={mydogs} alt="Imag" />
                    </div>
                </Link>

                <Link to="/create">
                    <div className={style.buttonDiv}>
                        <img className={style.button} src={newdog2} alt="Imag" />
                    </div>
                </Link>


                <Link to="/create">
                    <div className={style.buttonDiv}>
                        <img className={style.button} src={exit} alt="Imag" />
                    </div>
                </Link>

            </div>
            
            {dog.name ?  
                (<div className={style.DetaiAll}>

                    <div className={style.detail}>
                        <p>Id: {dog.id.length>6 ? <button style={{background: 'gray', height:'35px', marginBottom:'-1000px'}} onClick={()=>alert(dog.id)}>See Id</button>   : dog.id   }</p>
                        <p>Name: {dog.name}</p>
                        <p>Height: {dog.height} cm</p>
                        <p>Weight: {dog.weight} Kg</p>
                        <p>Span Life: {dog.life_span} years</p>
                        <p className={style.temperaments}>{dog.Temperaments ? dog.Temperaments.join('-') : 'No Data'}</p>
                    </div>

                    <div>
                        {dog.image ? <img className={style.imagen} src={dog.image} alt="imag" /> : <img className={style.imagen} src={dogDefault} alt='imagen' />}
                    </div>

                </div>)
             : (<div>
                    <img className={style.loading} src='https://i.gifer.com/U2B8.gif' alt='loading' />
                </div>)
            }

        </div>
    )
}

export default Detail;