import React, { useEffect, useState} from "react";
import { Routes, Route} from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../movies/Movies/Movies';
import SavedMovies from '../movies/SavedMovies/SavedMovies';
import Profile from '../movies/Profile/Profile';
import Login from '../movies/Login/Login';
import Register from '../movies/Register/Register';
import Footer from '../Footer/Footer';

import Preloader from '../movies/Preloader/Preloader';
import Error from '../movies/Error/Error';

import './App.css';

function App() {
    const [isLogged, setIsLogged] = React.useState(true);
    const [viewHeader, setViewHeader] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentuser] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    return (
        <div className="page">
            {/* { viewHeader && <Header isLogged={isLogged} />} */}
            <main className="content">
                {isLoading ? (
                    <Preloader />
                ) : (
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/movies" element={<Movies currentUser={currentUser} />} />
                        <Route path="/saved-movies" element={<SavedMovies />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/" element={<Main />} />
                        <Route path="/signin" element={<Login setViewHeader={setViewHeader} />} />
                        <Route path="/signup" element={<Register setViewHeader={setViewHeader} />} />
                        <Route path="*" element={<Error setViewHeader={setViewHeader} />} />
                    </Routes>
                )}
            </main>
        </div>
    );
}
export default App;