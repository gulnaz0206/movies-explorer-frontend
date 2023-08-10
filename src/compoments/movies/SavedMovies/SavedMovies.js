import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import './SavedMovies.css';
import Footer from '../../Footer/Footer';
import MovieHeader from '../../MovieHeader/MovieHeader.js';

function SavedMovies() {
    return (
        <>
        <MovieHeader />
        <main>
        <SearchForm />
        <section className='saved-movies'>
        <MoviesCardList />
        </section>
        </main>
        <Footer />
        </>
    );
}
export default SavedMovies;