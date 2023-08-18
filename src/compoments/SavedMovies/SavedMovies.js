import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Footer from '../Footer/Footer';
import AuthedHeader from '../AuthedHeader/AuthedHeader.js';
import Popup from "../Popup/Popup.js";
import { useState } from 'react';


function SavedMovies () {
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    return (
        <>
            <AuthedHeader onBurgerClick={() => setIsPopupOpened(true)} />
            <main>
                <SearchForm />
                <section className='movies'>
                    <MoviesCardList />
                </section>
            </main>
            <Footer />
            <Popup isPopupOpened={isPopupOpened} onClosePopup={() => setIsPopupOpened(false)} />
        </>
    );
}
export default SavedMovies;
