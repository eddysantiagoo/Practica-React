import { MovieCard } from "./MovieCard";
import styles from "../MovieGrid.module.css"
import { useEffect } from "react";
import { useState } from "react";
import { get } from "../utils/htttpClient";
import Spinner from "./Spinner";

export function MoviesGrid() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        setisLoading(true);
        get("/discover/movie").then((data) => {
        setMovies(data.results);
        setisLoading(false)
    });
    }, []);

    if (isLoading){
        return <Spinner />
    }

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
}