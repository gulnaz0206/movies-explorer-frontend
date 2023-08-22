import { useState, useEffect } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonMore from "../ButtonMore/ButtonMore";
import { useLocation } from "react-router-dom";

function MoviesCardList ({
    movies,
    isLoading,
    hiddenMovies,
    onClickMore,
    moviesSaved,
    onLike,
    onDislike,
    searchText
}) {
    const [savedMoviesArrId, setSavedMoviesArrId] = useState([]);
    const location = useLocation();
    const currentUrl = location.pathname;

    useEffect(() => {
        let ids = moviesSaved.map((movie) => movie.movieId);
        ids = [...new Set(ids)]
        setSavedMoviesArrId(ids)
    }, [moviesSaved])

    function checkIsSavedMovies (movie) {
        const id = movie.id ? movie.id : movie.movieId;
        return savedMoviesArrId.includes(id)
    }
    function textNotifyIsEmptyMovies () {
        if (searchText === "" && currentUrl === '/movies') {
            return 'Введите в строку поиска запрос для получения списка фильмов';
        }
        else if (searchText !== "" && currentUrl === '/movies') {
            return 'Ничего не найдено';
        }
        else if (searchText === "" && currentUrl === '/saved-movies') {
            return 'Список фильмов, добавленных в избранное, пуст';
        }
        else if (searchText !== "" && currentUrl === '/saved-movies') {
            return 'Ничего не найдено';
        }
        else {
            return 'Список фильмов пуст';
        }
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
            ) : (<h3 className="movies__title">{textNotifyIsEmptyMovies()}</h3>)}
            {hiddenMovies?.length ?
                <ButtonMore onClickButtonMore={onClickMore} /> : ""}
        </>
    );
}
export default MoviesCardList;
