import movies from "../movies"
import { MovieCard } from "./MovieCard";

export function MoviesGrid() {
    return (
        <ul>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
}
