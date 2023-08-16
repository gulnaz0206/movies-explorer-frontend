import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Footer from '../../Footer/Footer';
import MovieHeader from '../../MovieHeader/MovieHeader.js';
import Popup from "../../Popup/Popup.js";
import { useState } from 'react';


function SavedMovies() {
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    return (
        <>
            <MovieHeader onBurgerClick={() => setIsPopupOpened(true)} />
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