import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Footer from '../Footer/Footer';
import AuthedHeader from '../AuthedHeader/AuthedHeader.js';
import Popup from "../Popup/Popup.js";
import { useState, useEffect } from 'react';


function SavedMovies ({
    setIsPopupOpened,
    moviesAll,
    setIsChecked,
    setSearchText,
    moviesSaved,
    isLoading,
    onDislike }) {

    useEffect(() => {
        setIsChecked(false);
        setSearchText("");
    }, [])

    return (
        <>
            <AuthedHeader setIsPopupOpened={setIsPopupOpened} />
            <main>
                <SearchForm
                    isLoading={isLoading}
                    setIsChecked={setIsChecked}
                    setSearchText={setSearchText}
                    isSavedMoviesCmpnt={true}
                />
                <section className='movies'>
                    <MoviesCardList
                        movies={moviesAll}
                        isLoading={isLoading}
                        onDislike={onDislike}
                        moviesSaved={moviesSaved}
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}
export default SavedMovies;
