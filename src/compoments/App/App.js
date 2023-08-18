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
import { TEXT_NOTIFY_ERROR_FETCH } from "../../utils/constants";
import NotifyPopup from "../NotifyPopup/NotifyPopup";
import mainApi from "../../utils/MainApi";

function App () {
    const [isLogged, setIsLogged] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentUser, setСurrentUser] = useState({ email: '', name: '' });
    const [allMovies, setAllMovies] = useState([]);
    const [notifyTextFromPopup, setNotifyTextFromPopup] = useState('');
    const [isOpenPopupNotify, setIsOpenPopupNotify] = useState(false);

    // обработка навигации
    const navigate = useNavigate();
    const location = useLocation();
    // текущий адрес
    const currentPath = location.pathname;

    function viewError (err) {
        setNotifyTextFromPopup(err.message || 'Ошибка авторизации. Проверьте вводимые данные, а также подключение к интернету.');
        console.log(err);
    }


    function handleAuth (email, password, name, authFunction) {
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
        handleAuth(email, password, null, mainApi.login);
    }

    function handleRegister ({ email, password, name }) {
        handleAuth(email, password, name, mainApi.register);
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

    useEffect(() => {
        // moviesApi.getAllMovies()
        //     .then((allMovies) => {
        //         setAllMovies(allMovies);
        //         setNotifyTextFromPopup(TEXT_NOTIFY_ERROR_FETCH);

        //     })
        //     .catch(err => {
        //         console.log(err);
        //         setNotifyTextFromPopup(TEXT_NOTIFY_ERROR_FETCH);
        //     })
    }, []);

    useEffect(() => {
        // при появлении стейта с текстом уведомления открываем модальное окно
        notifyTextFromPopup && setIsOpenPopupNotify(true)
    }, [notifyTextFromPopup]);

    useEffect(() => {
        // при закрытии модального окна удаляем из стейта текст уведомления
        !isOpenPopupNotify && setNotifyTextFromPopup('')
    }, [isOpenPopupNotify]);

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
                        navigate(currentPath, { replace: true });
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
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                {isLoading ? (
                    <Preloader />
                ) : (<>
                    <Routes>
                        <Route path="/" element={<Main isLogged={isLogged} />} />
                        <Route path="/movies" element={<Movies currentUser={currentUser} />} />
                        <Route path="/saved-movies" element={<SavedMovies />} />
                        <Route path="/profile" element={<Profile onSignOut={handleSignOut} />} />
                        <Route path="/" element={<Main />} />
                        <Route path="/signin" element={<Login onSubmit={handleLogin} />} />
                        <Route path="/signup" element={<Register onSubmit={handleRegister} />} />
                        <Route path="*" element={<ErrorNotFound />} />
                    </Routes>
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
