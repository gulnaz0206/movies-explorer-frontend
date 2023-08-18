import React from "react";
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from "../Footer/Footer.js";
import Popup from "../Popup/Popup.js";
import { useState } from "react";
import AuthedHeader from '../AuthedHeader/AuthedHeader';
import ButtonMore from '../ButtonMore/ButtonMore';

function Movies ({ onBurgerClick }) {
    const [isPopupOpened, setIsPopupOpened] = useState(false);

    return (
        <>
            <AuthedHeader onBurgerClick={() => setIsPopupOpened(true)} />
            <main>
                <SearchForm />
                <section className="movies">
                    <MoviesCardList />
                    <ButtonMore />
                </section>
            </main>
            <Footer />
            <Popup isPopupOpened={isPopupOpened} onClosePopup={() => setIsPopupOpened(false)} />
        </>
    );
}
export default Movies;
