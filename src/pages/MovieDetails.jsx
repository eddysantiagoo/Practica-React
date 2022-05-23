import styles from "../MovieDetails.module.css"
import movie from "../movie.json"
import { useParams } from "react-router-dom";


export function MovieDetails(){

    const { movieId } = useParams();
    console.log(movieId)

    const imagenURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return <div className={styles.detailsContainer}>
        
        <img className={`${styles.col} ${styles.movieImage}`} src={imagenURL} alt={movie.title} />
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}>
             <strong>Title:</strong>{movie.title}
            </p>
            <p>
                {movie.genres.map(genres => genres.name)}
            </p>
            <p><strong>Decription:</strong>{movie.overview}
            </p>
        </div>

    </div>
}