import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Popup.css';

function Popup({ isPopupOpened, onClosePopup, isActive }) {

    const location = useLocation();
    const currentLocation = location.pathname.replace('/', '');

    return (
        <section className={`popup ${isPopupOpened ? 'active' : ''}`}>
            <div className="popup__container">
                <button onClick={onClosePopup} className='popup__close' aria-label='закрыть попап' type='button' />
                <nav className='popup__content'>
                    <div className='popup__list'>
                        <NavLink to='/' onClick={onClosePopup} className={`popup__link ${currentLocation === '' ? "popup__link_active" : ""}`}>Главная</NavLink>
                        <NavLink to='/movies' onClick={onClosePopup} className={`popup__link ${currentLocation === 'movies' ? "popup__link_active" : ""}`}>Фильмы</NavLink>
                        <NavLink to='/saved-movies' onClick={onClosePopup} className={`popup__link ${currentLocation === 'saved-movies' ? "popup__link_active" : ""}`}>Сохраненные фильмы</NavLink>
                    </div>
                    <Link to="/profile" onClick={onClosePopup} className='popup__account'>Аккаунт</Link>
                </nav>
            </div>
        </section>
    )
}

export default Popup;