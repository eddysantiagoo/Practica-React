import styles from "../Search.module.css"
import {FaSearch} from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import useQuery from "../hooks/useQuery";
import { useEffect } from "react";


export default function Search() {

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate()

  const query = useQuery();
  const search = query.get("search");


  useEffect(() => {
      setSearchText(search || "");
  }, [search]);


  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate("/?search= " + searchText);
  }

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
            <input type="text" className={styles.searchInput} 
                   value={searchText} 
                   onChange={(e) => setSearchText(e.target.value)}/>
            <button  type="submit" className={styles.searchButton}><FaSearch size={15}/></button>
        </div>
    </form>
  )
}
