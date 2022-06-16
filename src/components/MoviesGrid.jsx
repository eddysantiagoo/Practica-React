import { MovieCard } from "./MovieCard";
import styles from "./MovieGrid.module.css"
import { useEffect } from "react";
import { useState } from "react";
import { get } from "../utils/htttpClient";
import Spinner from "./Spinner"; 
import useQuery from "../hooks/useQuery";
import { useLocation } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "./Empty";


export function MoviesGrid() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true); 

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        setisLoading(true); 
        const searchUrl = search 
        ? "/search/movie?query=" + search + "&page=" + page
        : "/discover/movie?page=" + page;
        get(searchUrl).then((data) => {
        setMovies(prevMovies => prevMovies.concat(data.results));
        sethasMore(data.page < data.total_pages);
        setisLoading(false);
    });
    }, [search, page]);

    if (!isLoading && movies.length === 0) {
        return <Empty />;
    }

    return (
        <InfiniteScroll dataLength={movies.length} hasMore={hasMore} 
        next={() => setPage(prevPage => prevPage + 1)}
        loader={<Spinner />}
        >
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    </InfiniteScroll>    
    );
}