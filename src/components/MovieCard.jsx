import { Link } from "react-router-dom";
import styles from "../MovieCard.module.css";
import getMovieImage from "../utils/getMovieImg";

<img src="placeholder.jpg" alt="" />;

export function MovieCard({ movie }) {
  const imageUrl = getMovieImage(movie.poster_path, 300);
  return (
    <li className={styles.movieCard}>
      <Link to={"./movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={styles.titulo}>{movie.title}</div>
      </Link>
    </li>
  );
}
