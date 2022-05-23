import movies from "../movies"
import { MovieCard } from "./MovieCard";
import styles from "../MovieGrid.module.css"
import { useEffect } from "react";
import { useState } from "react";

export function MoviesGrid() {
    // let movies = [];
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie", {
            headers:  {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWI1Mjc2MWQzYzVmYjcwZDg0Y2FhNjhjNzU1OWYwNiIsInN1YiI6IjYyODdjMTEwMWYzZTYwMDA1MmU3Y2MyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VUqObJHLiZxHcmFmD4tpbxtM0V8tFC5DdsXpe9A_vko",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((result) => result.json())
          .then((data) => {
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