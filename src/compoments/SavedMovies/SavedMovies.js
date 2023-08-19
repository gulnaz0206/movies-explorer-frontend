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
                    isViewSearchHistory={true}
                    setSearchText={setSearchText}
                    setIsChecked={setIsChecked}
                />
                <section className='movies'>
                    <MoviesCardList
                        moviesSaved={moviesSaved}
                        isLoading={isLoading}
                        onDislike={onDislike}
                        movies={moviesAll}
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}
export default SavedMovies;
