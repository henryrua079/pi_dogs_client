import React from "react";
import style from "./Form.module.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createDog, getTemperaments } from '../../Redux/actions'
import hueso from "../../../src/assets/img/hueso.jpg"
import home from "../../../src/assets/img/home.png"
import exit from "../../assets/img/exit.jpg"
import mydogs from "../../../src/assets/img/mydogs.jpg"
import { useEffect } from "react";
import validate from "./validation";
import huella2 from "../../assets/img/huella2.png"


const Form = () => {

    const dispatch = useDispatch();

    const temperaments = useSelector(state => state.temperaments)
    const currentUser = useSelector(state => state.currentuser)

    const [newDog, setNewDog] = useState({
        name: '',
        height_min: '',
        height_max: '',
        weight_min: '',
        weight_max: '',
        life_span_min: '',
        life_span_max: '',
        image: '',
        UserId: currentUser?.id,
        temperaments: [],

    })

    const [errors, setErrors] = useState({
        name: '',
        height_min: '',
        height_max: '',
        weight_min: '',
        weight_max: '',
        life_span_min: '',
        life_span_max: '',
        image: '',
        temperaments: [],
    })




    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch])


    const handlerChange = (event) => {
        event.preventDefault();
        const property = event.target.name;
        const value = event.target.value;
        setNewDog({ ...newDog, [property]: value })
        setErrors(validate({ ...newDog, [property]: value }));


    }

    const handlerClick = (event) => {
        const value = event.target.value;
        const id = temperaments.find(temp => temp.name === value).id
        if (newDog.temperaments?.includes(id)) {
            setNewDog({ ...newDog, temperaments: newDog.temperaments?.filter(temp => temp !== id) })
            setErrors(validate({ ...newDog, temperaments: newDog.temperaments?.filter(temp => temp !== id) }))
        } else {
            setErrors(validate({ ...newDog, temperaments: [...newDog.temperaments, id] }))
            setNewDog({ ...newDog, temperaments: [...newDog.temperaments, id] })
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!Object.values(errors).every(value => value === "")) {
            alert('Required data is missing')
        } else {
            dispatch(createDog(newDog))
            setNewDog({
                name: '',
                height_min: '',
                height_max: '',
                weight_min: '',
                weight_max: '',
                life_span_min: '',
                life_span_max: '',
                image: '',
                UserId: currentUser?.id,
                temperaments: [],
            })
        }
    }


    const [mostrarContenido, setMostrarContenido] = useState(false);

  const mostrarMas = () => {
    mostrarContenido? setMostrarContenido(false):setMostrarContenido(true)
  };



    return (

        <div className={style.mainContainer}>

            <div className={style.imagesContainer}>

                <div>
                    <Link to="/home">
                        <img className={style.button} src={home} alt="home" />
                    </Link>
                </div>

                <div>
                    <Link to="/mydogs">
                        <img className={style.button} src={mydogs} alt="mydogs" />
                    </Link>
                </div>

                <div>
                    <Link to="/">
                        <img className={style.button} src={exit} alt="exit" />
                    </Link>
                </div>

            </div>



            <div className={style.formAndTempsContainer}>

                <form onSubmit={handleSubmit} className={style.Form} >
                    <div className={style.name}>
                        <label>Name:</label>
                        <div className={style.inputs}>
                            <input type="text"
                                value={newDog.name}
                                placeholder="Name here..."
                                onChange={handlerChange}
                                name="name"
                                className={style.NameImage}
                                />
                            <div className={style.errors}>

                                <p className={style.dangerName}>{errors.name}</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.name}>
                        <label>Heigth (cm): </label>
                        <div className={style.inputs}>
                            <input type="text"
                                value={newDog.height_min}
                                placeholder="Min..."
                                onChange={handlerChange}
                                name="height_min"
                                className={style.input}
                                />
                            <input type="text"
                                value={newDog.height_max}
                                placeholder="Max..."
                                onChange={handlerChange}
                                name="height_max"
                                className={style.input}
                                 />
                            <div className={style.errors}>
                                <p className={style.danger}>{errors.height_min ? errors.height_min : errors.height_max}</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.name}>
                        <label>Weigth (Kg): </label>
                        <div className={style.inputs}>
                            <input type="text"
                                value={newDog.weight_min}
                                placeholder="Min.."
                                onChange={handlerChange}
                                name="weight_min"
                                 />
                            <input type="text"
                                value={newDog.weight_max}
                                placeholder="Max..."
                                onChange={handlerChange}
                                name="weight_max"
                                className={style.input}
                                 />
                            <div className={style.errors}>
                                <p className={style.danger}>{errors.weight_min ? errors.weight_min : errors.weight_max}</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.name}>
                        <label>Life Span: </label>
                        <div className={style.inputs}>
                            <input type="text"
                                value={newDog.life_span_min}
                                placeholder="Min..."
                                onChange={handlerChange}
                                name="life_span_min"
                                className={style.input}
                                 />
                            <input type="text"
                                value={newDog.life_span_max}
                                placeholder="Max..."
                                onChange={handlerChange}
                                name="life_span_max"
                                className={style.input}
                                 />
                            <div className={style.errors}>
                                <p className={style.danger}>{errors.life_span_min ? errors.life_span_min : errors.life_span_max}</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.name}>
                        <label>Image: </label>
                        <div className={style.inputs}>
                            <input type="text"
                                value={newDog.image}
                                placeholder="Url image here..."
                                onChange={handlerChange}
                                name="image"
                                className={style.NameImage} />
                        </div>
                    </div>

                    <div>
                        <button className={style.buttonSubmit} >
                            <img src={huella2} alt='submit' style={{ width: "6em", height: "6em" }} />
                        </button>
                    </div>
                </form>








                <div className={style.tempsGeneral}>

                    <div className={mostrarContenido ? style.empsAndErrorShow : style.tempsAndErrorHide}>

                        <p className={errors.temperaments ? style.danger1 : style.danger2}>Please select at least 1 temperament</p>

                        <div className={style.tempsContainer}>
                            {temperaments?.map(key => {
                                return <div key={key.id} >
                                    <input
                                        key={key.id}
                                        className={style.temps}
                                        type='button'
                                        alt={key.name}
                                        src={hueso}
                                        name='temperaments'
                                        value={key.name}
                                        onClick={handlerClick}
                                        style={{ background: newDog.temperaments.includes(key.id) ? 'gray' : 'white' }} />
                                    <p></p>
                                </div>
                            })
                            }
                        </div>

                    </div>


                    <button
                        className={style.buttonShow}
                        onClick={mostrarMas}> {mostrarContenido ? 'Show less' : 'Show more'}
                    </button>

                </div>



            </div>


        </div > //contenedor principal
    )
}

export default Form;