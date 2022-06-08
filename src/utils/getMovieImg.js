import placeholder from "../media/placeholder.jpg"

export default function getMovieImage (path, width){
    return  path
    ? `https://image.tmdb.org/t/p/w${width}${path}`
    : placeholder; 

}
