import React from "react";
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import './Movies.css';
import Footer from "../../Footer/Footer.js";
import Popup from "../../Popup/Popup.js";
import { useState } from "react";

function Movies() {
    const [isPopupOpened, setIsPopupOpened] = useState(false);

    return (
        <section className="movies">
            <SearchForm onOpenPopup={() => setIsPopupOpened(true)} />
            <MoviesCardList />
            <Footer />
            <Popup isPopupOpened={isPopupOpened} onClosePopup={() => setIsPopupOpened(false)} />
        </section>
    );
}
export default Movies;