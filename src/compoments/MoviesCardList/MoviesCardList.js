import { useState, useEffect } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonMore from "../ButtonMore/ButtonMore";

function MoviesCardList ({
    movies,
    isLoading,
    invisibleFilms,
    handleClickButtonMore,
    moviesSaved,
    onLike,
    onDislike
}) {
    const [savedMovieIds, setSavedMovieIds] = useState([]);
    useEffect(() => {
        let ids = moviesSaved.map((movie) => movie.movieId);
        ids = [...new Set(ids)]
        setSavedMovieIds(ids)
    }, [moviesSaved])


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
                                liked={savedMovieIds.includes(movie.id ? movie.id : movie.movieId)}
                            />)
                    })}
                </ul>
            ) : !isLoading ? <h3 className="movies-card-list__title">Список фильмов пуст</h3> : ""}
            {invisibleFilms?.length ?
                <ButtonMore onClickButtonMore={handleClickButtonMore} /> : ""}
        </>
    );
}
export default MoviesCardList;
