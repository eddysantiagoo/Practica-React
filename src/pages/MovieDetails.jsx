import styles from "../MovieDetails.module.css"
import movie from "../movie.json"
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { get } from "../utils/htttpClient";
import { useState } from "react";
import Spinner from "../components/Spinner"


export function MovieDetails(){

    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        setIsLoading(true);

        get("/movie/" + movieId).then(data => {
            setMovie(data);
            setIsLoading(false);
        })
    }, [movieId]);

    if (isLoading){
        return <Spinner />
    }

    if(!movie){
        return null;
    }

    const imagenURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return <div className={styles.detailsContainer}>
        
        <img className={`${styles.col} ${styles.movieImage}`} src={imagenURL} alt={movie.title} />
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}>
             <strong>Title: </strong>{movie.title}
            </p>
            <p>
               <strong>Genres: </strong> {movie.genres.map(genres => genres.name + " ")}
            </p>
            <p><strong>Decription: </strong>{movie.overview}
            </p>
            <p>
               <strong>Date: </strong> {movie.release_date}
            </p>
        </div>

    </div>
}