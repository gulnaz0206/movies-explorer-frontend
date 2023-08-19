import { useState, useEffect } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonMore from "../ButtonMore/ButtonMore";

function MoviesCardList ({
    movies,
    isLoading,
    hiddenMovies,
    onClickMore,
    moviesSaved,
    onLike,
    onDislike
}) {
    const [savedMoviesArrId, setSavedMoviesArrId] = useState([]);

    useEffect(() => {
        let ids = moviesSaved.map((movie) => movie.movieId);
        ids = [...new Set(ids)]
        setSavedMoviesArrId(ids)
    }, [moviesSaved])

    function checkIsSavedMovies (movie) {
        const id = movie.id ? movie.id : movie.movieId;
        return savedMoviesArrId.includes(id)
    }
    return (
        <>
            {movies.length ? (
                <ul className="movies__item">
                    {movies.map((movie) => {
                        return (
                            <MoviesCard
                                movie={movie}
                                onLike={onLike}
                                onDislike={onDislike}
                                key={movie.id || movie.movieId}
                                liked={checkIsSavedMovies(movie)}
                            />)
                    })}
                </ul>
            ) : !isLoading ? <h3 className="movies-card-list__title">Список фильмов пуст</h3> : ""}
            {hiddenMovies?.length ?
                <ButtonMore onClickButtonMore={onClickMore} /> : ""}
        </>
    );
}
export default MoviesCardList;
