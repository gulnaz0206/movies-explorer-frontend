import React from "react";
import { Link, NavLink } from 'react-router-dom';
import './AuthedHeader.css';
import logo from '../../images/logo.svg';

function AuthedHeader ({ setIsPopupOpened }) {
    return (
        <header className="movie-header">
            <nav className="movie-header__container">
                <Link to='/' className="movie-header__logo-link">
                    <img className="movie-header__logo" src={logo} alt="Логотип страницы" />
                </Link>


                <NavLink to='/movies' className={({ isActive }) => `movie-header__nav-link ${isActive ? 'movie-header__nav-link_active' : ''}`}>Фильмы</NavLink>
                <NavLink to='/saved-movies' className={({ isActive }) => `movie-header__nav-link ${isActive ? 'movie-header__nav-link_active' : ''}`}>Сохраненные фильмы</NavLink>
            </nav>
            <Link to='/profile' className="movie-header__nav-account-pc">Аккаунт</Link>
            <button type="button" className="movie-header__nav-account-mob" aria-label="открыть меню" onClick={() => setIsPopupOpened(true)}></button>
        </header>
    );
}
export default AuthedHeader;
