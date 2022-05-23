import { MovieCard } from "./MovieCard";
import styles from "../MovieGrid.module.css"
import { useEffect } from "react";
import { useState } from "react";
import { get } from "../utils/htttpClient";

export function MoviesGrid() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie").then((data) => {
        setMovies(data.results);
    });
    }, []);

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
}