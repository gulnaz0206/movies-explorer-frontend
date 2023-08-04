// import Header from '../../Header/Header.js';
// import Footer from '../../Footer/Footer.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import './SavedMovies.css';

function SavedMovies() {
    return (
        <section className='section saved-movies'>
        <SearchForm />
        <MoviesCardList />
        </section>
    );
}
export default SavedMovies;