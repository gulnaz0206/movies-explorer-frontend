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
    onDislike,
    setNotifyTextFromPopup,
    searchText
}) {

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
                    isViewSearchHistory={false}
                    setSearchText={setSearchText}
                    setIsChecked={setIsChecked}
                    setNotifyTextFromPopup={setNotifyTextFromPopup}
                />
                <section className='movies'>
                    <MoviesCardList
                        moviesSaved={moviesSaved}
                        isLoading={isLoading}
                        onDislike={onDislike}
                        movies={moviesAll}
                        searchText={searchText}
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}
export default SavedMovies;
