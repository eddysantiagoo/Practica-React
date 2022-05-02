export function MovieCard ({ movie }) {
    const imagenURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return  <li>
        <img src={imagenURL} alt={movie.title} />
        {movie.title}
        </li>

}