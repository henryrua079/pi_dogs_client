import { useHistory } from 'react-router-dom';
import error404 from '../../assets/img/error404.jpg'

const Not = () =>{

    const {push}= useHistory();
return(
    <div >
       <img src={error404} alt="error404" />
        <button onClick={()=>push('/')} >LOGIN</button>
    </div>
)
}

export default Not;