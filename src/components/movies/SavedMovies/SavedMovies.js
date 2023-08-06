import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import './SavedMovies.css';
import Footer from '../../Footer/Footer';

function SavedMovies() {
    return (
        <section className='section saved-movies'>
        <SearchForm />
        <MoviesCardList />
        <Footer />
        </section>
    );
}
export default SavedMovies;