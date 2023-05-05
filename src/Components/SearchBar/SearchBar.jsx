import { useState } from "react";
import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../../Redux/actions";



export default function SearchBar({setCurrentPage}) {
   const dispatch = useDispatch();
   const [name, setName] = useState('');

   const handleChange = (event) => {
      event.preventDefault();
      setName(event.target.value)
   };

   const onSearch = async (event) => {
      event.preventDefault();
      dispatch(getDogsByName(name));
      setCurrentPage(1);
      setName('');
   }


   return (
      <div className={style.bar}>
         <div>
            <input
               value={name}
               type='text'
               placeholder="Search..."
               className={style.searchInput}
               onChange={(event) => handleChange(event)} />
         </div>
         <div>

            <button
               type="submit"
               className={style.searchButton}
               onClick={(event) => onSearch(event)}>Search</button>
         </div>
      </div>
   );
}
