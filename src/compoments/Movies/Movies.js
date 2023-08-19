import React from "react";
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from "../Footer/Footer.js";
import Popup from "../Popup/Popup.js";
import { useState, useEffect } from "react";
import AuthedHeader from '../AuthedHeader/AuthedHeader';
import ButtonMore from '../ButtonMore/ButtonMore';
import calcQtyCards from "../../utils/calcQtyCards.js";

function Movies ({
    setIsPopupOpened,
    moviesAll,
    moviesSaved,
    isLoading,
    setIsChecked,
    setSearchText,
    onLike,
    onDislike }) {
    const [movies, setMovies] = useState([]);
    const invisibleFilms = moviesAll.slice(movies.length);
    const [addedCardsQty, setLoadMoreCount] = useState(null);
    const [cardsForPage, setCountCardsPerLoad] = useState(calcQtyCards().cardsForPage);

    useEffect(() => {
        setMovies(moviesAll.slice(0, cardsForPage))
    }, [moviesAll])

    useEffect(() => {
        const { cardsForPage, addedCardsQty } = calcQtyCards();
        setCountCardsPerLoad(cardsForPage);
        setLoadMoreCount(addedCardsQty);
        window.addEventListener('resize', handleChangeSizeWindow);

        return () => window.removeEventListener('resize', handleChangeSizeWindow);
    }, []);

    // обработка нажатия на кнопку 'еще'
    function handleClickButtonMore () {
        setMovies([...movies, ...invisibleFilms.slice(0, addedCardsQty)])
    }

    function handleChangeSizeWindow () {
        setTimeout(() => {
            const { cardsForPage, addedCardsQty } = calcQtyCards();
            setCountCardsPerLoad(cardsForPage);
            setLoadMoreCount(addedCardsQty);
        }, 500);
    }
    return (
        <>
            <AuthedHeader setIsPopupOpened={setIsPopupOpened} />
            <main>
                <SearchForm
                    isLoading={isLoading}
                    setIsChecked={setIsChecked}
                    setSearchText={setSearchText}
                    localStorageEnabled={true}
                />
                <section className="movies">
                    <MoviesCardList
                        movies={movies}
                        isLoading={isLoading}
                        invisibleFilms={invisibleFilms}
                        handleClickButtonMore={handleClickButtonMore}
                        moviesSaved={moviesSaved}
                        onLike={onLike}
                        onDislike={onDislike}
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}
export default Movies;
