import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import Register from '../Register/Register';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


import './App.css';
import moviesApi from "../../utils/MoviesApi";
import { BEAT_FILM_URL_SERVER, SHORT_MOVIE, TEXT_NOTIFY_ERROR_FETCH } from "../../utils/constants";
import NotifyPopup from "../NotifyPopup/NotifyPopup";
import mainApi from "../../utils/MainApi";
import Popup from "../Popup/Popup";

function App () {
    const [isLogged, setIsLogged] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentUser, setСurrentUser] = useState({ email: '', name: '' });
    const [notifyTextFromPopup, setNotifyTextFromPopup] = useState('');
    const [isOpenPopupNotify, setIsOpenPopupNotify] = useState(false);
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const [moviesAll, setMoviesAll] = useState([]);
    const [moviesSaved, setMoviesSaved] = useState([]);
    const [filterMoviesSaved, setFilterMoviesSaved] = useState([]);
    const [isCheckboxShortsMoviesAll, setIsCheckboxShortsMoviesAll] = useState(
        localStorage.getItem("filterCheckbox")
            ? localStorage.getItem("filterCheckbox") === "true"
            : false);
    const [searchTextMoviesAll, setSearchTextMoviesAll] = useState(
        localStorage.getItem("search")
            ? localStorage.getItem("search")
            : "");
    const [isCheckboxShortsMoviesSaved, setIsCheckboxShortsMoviesSaved] = useState(null);
    const [searchTextMoviesSaved, setSearchTextMoviesSaved] = useState('');
    // обработка навигации
    const navigate = useNavigate();
    const location = useLocation();
    // текущий адрес
    const currentUrl = location.pathname;

    function viewError (err) {
        let alternativeTextError;
        if (err.message === 'Failed to fetch') {
            alternativeTextError = 'Проверьте подключение к интернету'
        } else {
            alternativeTextError = err.message;
        }
        setNotifyTextFromPopup(alternativeTextError);
        console.log(err);
    }


    function handleAuthorization (email, password, name, authFunction) {
        setIsLoading(true);
        authFunction(email, password, name)
            .then((res) => {
                if (res.error) {
                    throw new Error(res.error)
                }
                const { email, name } = res;
                setIsLogged(true);
                setСurrentUser({ email, name });
                navigate('/movies');
            })
            .catch((err) => viewError(err))
            .finally(() => setIsLoading(false))



    }

    function handleLogin (email, password) {
        handleAuthorization(email, password, null, mainApi.login);
    }

    function handleRegister ({ email, password, name }) {
        handleAuthorization(email, password, name, mainApi.register);
    }
    function handleSignOut () {
        setIsLoading(true);
        mainApi.logout()
            .then(() => {
                // setSearchTextMovies('')
                // localStorage.clear();
                setIsLogged(false);
                setNotifyTextFromPopup(`Вы успешно вышли!`);
                setСurrentUser({ email: '', name: '' });
                navigate('/');
            })
            .catch((err) => viewError(err))
            .finally(() => setIsLoading(false))
    }

    function handleChangeProfile ({ name, email }) {
        setIsLoading(true);
        mainApi._handleEditProfile({ name, email })
            .then((data) => {
                if (data.error) {
                    throw new Error(data.error)
                }
                setNotifyTextFromPopup(`Данные успешно обновлены!`);
                setСurrentUser(data);
            })
            .catch((err) => viewError(err))
            .finally(() => setIsLoading(false))

    }

    // при появлении стейта с текстом уведомления открываем модальное окно
    useEffect(() => {
        notifyTextFromPopup && setIsOpenPopupNotify(true)
    }, [notifyTextFromPopup]);

    // при закрытии модального окна удаляем из стейта текст уведомления
    useEffect(() => {
        !isOpenPopupNotify && setNotifyTextFromPopup('')
    }, [isOpenPopupNotify]);

    //проверка токена
    useEffect(() => {
        if (!isLogged) {
            setIsLoading(true);
            try {
                const checkTokenAsync = async () => {
                    const data = await mainApi.checkToken();
                    if (!data.error) {
                        setIsLogged(true);
                        const { email, name } = data;
                        setСurrentUser({ email, name });
                        navigate(currentUrl, { replace: true });
                    }
                };
                checkTokenAsync();
            } catch (error) {
                viewError(error);
            } finally {
                setIsLoading(false);
            }
        }
        else {
            setIsLoading(false);
        }
    }, []);

    // возврат к обращаемой странице
    useEffect(() => {
        if (isLogged) {
            navigate(currentUrl, { replace: true });
        }
    }, [isLogged])


    // фильтр поиска
    const searchMoviesInArray = (arrayFilms = [], searchText, isFilterShorts) => {
        const foundArray = arrayFilms.filter(
            (item) =>
                item.nameRU.toLowerCase().includes(searchText ? searchText.toLowerCase() : ""));
        if (isFilterShorts) {
            return foundArray.filter((item) => item.duration <= SHORT_MOVIE);
        } else {
            return foundArray;
        }
    }

    // загрузка основных фильмов из localstorage или по API
    const loadMoviesAll = async () => {
        if (!searchTextMoviesAll) {
            setMoviesAll([]);
            return;
        }
        try {
            setIsLoading(true);
            const moviesLocalStorage = localStorage.getItem("movies");
            const movies = moviesLocalStorage
                ? JSON.parse(moviesLocalStorage)
                : await moviesApi.loadMoviesAll();
            localStorage.setItem("movies", JSON.stringify(movies));

            const filteredMoviesAll = searchMoviesInArray(movies, searchTextMoviesAll, isCheckboxShortsMoviesAll);
            setMoviesAll(filteredMoviesAll);
        } catch (err) {
            viewError(err);
        } finally {
            setIsLoading(false);
        }
    };

    // загрузка сохраненных фильмов из localstorage или по API
    const loadMoviesSaved = async () => {
        try {
            const moviesSavedLocalStorage = localStorage.getItem("moviesSaved");
            const savedMoviesData = moviesSavedLocalStorage === JSON.stringify(moviesSaved)
                ? JSON.parse(moviesSavedLocalStorage)
                : await mainApi.getSavedMovies();
            localStorage.setItem("moviesSaved", JSON.stringify(savedMoviesData));
            setMoviesSaved(savedMoviesData);
            const filterMoviesSaved = searchMoviesInArray(savedMoviesData, searchTextMoviesSaved, isCheckboxShortsMoviesSaved);
            setFilterMoviesSaved(filterMoviesSaved);
        } catch (err) {
            viewError(err);
        } finally {
        }
    };

    useEffect(() => {
        if (isLogged) {
            loadMoviesAll();
            if (searchTextMoviesAll) { localStorage.setItem("search", searchTextMoviesAll) };
            localStorage.setItem("filterCheckbox", isCheckboxShortsMoviesAll);
        }
    }, [isCheckboxShortsMoviesAll, searchTextMoviesAll]);

    useEffect(() => {
        if (isLogged) {
            loadMoviesSaved();
        }
    }, [isCheckboxShortsMoviesSaved, searchTextMoviesSaved]);

    useEffect(() => {
        if (isLogged) {
            loadMoviesAll();
            loadMoviesSaved();
        }
    }, [isLogged]);

    async function handleLike (movie) {
        try {
            const data = await mainApi.addMovie(movie);
            const changedMoviesSaved = [...moviesSaved, data];
            setMoviesSaved(changedMoviesSaved)
            localStorage.setItem("moviesSaved", JSON.stringify(changedMoviesSaved));
        } catch (err) {
            viewError(err);
        } finally {
        }
    }

    async function handleDislike (movieId) {
        const findedMovie = moviesSaved.find(film => film.movieId === movieId);
        try {
            const data = await mainApi.removeMovie(findedMovie._id);
            const changedMoviesSaved = moviesSaved.filter((film) => film._id !== data._id);
            setMoviesSaved(changedMoviesSaved)
            localStorage.setItem("moviesSaved", JSON.stringify(changedMoviesSaved));

        } catch (err) {
            viewError(err);
        } finally {
        }
    }

    // обновление сохраненных фильмов если ранее был поиск
    useEffect(() => {
        const filterMoviesSaved = searchMoviesInArray(moviesSaved, searchTextMoviesSaved, isCheckboxShortsMoviesSaved);
        setFilterMoviesSaved(filterMoviesSaved);
    }, [moviesSaved]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                {isLoading ? (
                    <Preloader />
                ) : (<>
                    <Routes>
                        <Route path="/" element={<Main isLogged={isLogged} setIsPopupOpened={setIsPopupOpened} />} />
                        <Route path="/movies" element={
                            <ProtectedRoute
                                element={Movies}
                                currentUser={currentUser}
                                setIsPopupOpened={setIsPopupOpened}
                                isLogged={isLogged}
                                setIsChecked={setIsCheckboxShortsMoviesAll}
                                setSearchText={setSearchTextMoviesAll}
                                moviesAll={moviesAll}
                                moviesSaved={moviesSaved}
                                isLoading={isLoading}
                                onLike={handleLike}
                                onDislike={handleDislike}
                            />
                        } />
                        <Route path="/saved-movies" element={
                            <ProtectedRoute
                                element={SavedMovies}
                                setIsPopupOpened={setIsPopupOpened}
                                isLogged={isLogged}
                                moviesAll={filterMoviesSaved}
                                setSearchText={setSearchTextMoviesSaved}
                                setIsChecked={setIsCheckboxShortsMoviesSaved}
                                moviesSaved={moviesSaved}
                                isLoading={isLoading}
                                onDislike={handleDislike}
                            />
                        } />
                        <Route path="/profile" element={
                            <ProtectedRoute
                                element={Profile}
                                isLogged={isLogged}
                                isLoading={isLoading}
                                onSubmit={handleChangeProfile}
                                onSignOut={handleSignOut}
                            />
                        } />
                        <Route path="/signin" element={<Login onSubmit={handleLogin} isLogged={isLogged} />} />
                        <Route path="/signup" element={<Register onSubmit={handleRegister} isLogged={isLogged} />} />
                        <Route path="*" element={<ErrorNotFound />} />
                    </Routes>
                    <Popup isPopupOpened={isPopupOpened} onClosePopup={() => setIsPopupOpened(false)} />
                    <NotifyPopup
                        isOpen={isOpenPopupNotify}
                        setPopupOpened={setIsOpenPopupNotify}
                        textNotify={notifyTextFromPopup} />
                </>
                )}
            </div>
        </CurrentUserContext.Provider>
    );
}
export default App;
