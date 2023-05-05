import style from "./FormUser.module.css"
import { useHistory } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
import validate from "./validation";


export default function FormUser ({setAccess})  {

    const {push} = useHistory();

    const [newUser, setNewUser] = useState({
        email: "",
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        username: "",
        password: ""
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setNewUser({ ...newUser, [property]: value });
        setErrors(validate({ ...newUser, [property]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!Object.values(errors).every(value => value === "")) {
            alert('Required data is missing')
        } else {
        axios.post(`/users/`, newUser)
            .then(res => {
                alert(res.statusText)
                setAccess(true)
                push('/')
            })
            .catch(err => {
                alert(err.response.data.error)
            })
        }
    }


    const handlerClick = (event) => {
        event.preventDefault();
        push('/')
      }

    
    return (
        <div className={style.container}>

            <div >
                <form onSubmit={handleSubmit} className={style.Form}>

                    <div>
                        <div>
                            <label htmlFor="email"
                                className={style.label}>Email:</label>
                            <input className={style.inputEmail}
                                name="email"
                                type="email"
                                value={newUser.email}
                                placeholder="Email here.."
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            {errors.email && <span className={style.dangerEmail}>...{errors.email}</span>}
                        </div>
                    </div>


                    <div>
                        <div>
                            <label htmlFor="username"
                                className={style.label}>Username:</label>
                            <input name="username"
                                type="text"
                                value={newUser.username}
                                placeholder="Username here.."
                                onChange={handleInputChange}
                                className={style.input}
                                required />
                        </div>
                        <div>
                            {errors.username && <span className={style.danger}>...{errors.username}</span>}
                        </div>
                    </div>


                    <div>
                        <div>
                            <label htmlFor="password"
                                className={style.label}>Password:</label>
                            <input name="password"
                                type="text"
                                value={newUser.password}
                                placeholder="Password here..."
                                onChange={handleInputChange}
                                className={style.input}
                                required
                            />
                        </div>
                        <div>
                            {errors.password && <span className={style.danger}>...{errors.password}</span>}
                        </div>
                    </div>


                    <div className={style.buttonContainer}>
                        <button className={style.button}> REGISTER </button>
                        <button className={style.button} onClick={handlerClick} > BACK </button>
                    </div>

                </form>

            </div>

        </div>
    )
}


