import styles from "../Search.module.css"
import {FaSearch} from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


export default function Search() {

  const [searchText, setsearchText] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate("/?search= " + searchText);
  }

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
            <input type="text" className={styles.searchInput} 
                   value={searchText} 
                   onChange={(e) => setsearchText(e.target.value)}/>
            <button  type="submit" className={styles.searchButton}><FaSearch size={15}/></button>
        </div>
    </form>
  )
}
