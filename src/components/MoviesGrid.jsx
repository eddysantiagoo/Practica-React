import { MovieCard } from "./MovieCard";
import styles from "../MovieGrid.module.css"
import { useEffect } from "react";
import { useState } from "react";
import { get } from "../utils/htttpClient";
import Spinner from "./Spinner"; 
import useQuery from "../hooks/useQuery";
import { useLocation } from 'react-router-dom';


export function MoviesGrid() {

    const [movies, setMovies, tv] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        setisLoading(true); 
        const searchUrl = search 
        ? "/search/movie?query=" + search 
        : "/discover/movie";
        get(searchUrl).then((data) => {
        setMovies(data.results);
        setisLoading(false)
    });
    }, [search]);

    if (isLoading){
        return <Spinner />
    }

    return (
        <><ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
        
       </>
        
    );
}