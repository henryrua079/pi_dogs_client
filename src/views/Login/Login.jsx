import style from "./Login.module.css"
import { useHistory } from "react-router-dom";
import { useState } from 'react'
import validate from "./validation";
import axios from "axios";
import { getCurrentUser } from "../../Redux/actions";
import { useDispatch } from "react-redux";


const Login = ({setAccess}) => {

  const {push} = useHistory();
  const dispatch = useDispatch();
  
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

 
  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(validate({ ...userData, [property]: value }));
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!Object.values(errors).every(value => value === "")) {
      alert('Required data is missing')
    } else {
      if (!userData.username || !userData.password) {
        alert('Missing Data')
        push('/')
        return
      } else {

        await axios.get(`/users/`, {
          params: {
            username: userData.username,
            password: userData.password
          }
        })
          .then(res => {
            dispatch(getCurrentUser(res.data))
            setAccess(true)
            push('/home')
          })
          .catch(err => {
            alert(err.response.data.error)
            push('/register')
          })

      }
    }
  }


  const handlerClick = (event) => {
    event.preventDefault();
    push('/register')
  }

  return (

    <div className={style.container}>

      <div className={style.welcome}>
        <h1  >Welcome to the App Dogs</h1>
      </div>


      <div >
        <form onSubmit={handleSubmit} className={style.Form}>
          <div>
            <div>
              <label htmlFor="username"
                className={style.label}>Username:</label>
              <input name="username"
                type="text"
                value={userData.username}
                placeholder="Username here.."
                onChange={handleInputChange}
                className={style.input}
                required/>
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
                value={userData.password}
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
            <button className={style.button} > LOGIN </button>
            <button className={style.button} onClick={handlerClick}> REGISTER </button>
          </div>

        </form>

      </div>


    </div>


  );
};

export default Login;