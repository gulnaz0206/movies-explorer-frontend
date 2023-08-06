import React from "react";
import './Navigation.css';
import NavLogo from '../../../images/acc.svg';
import logo from '../../../images/header-logo1.svg';
import navButton from '../../../images/nav-btn.svg';
import { Link } from "react-router-dom";


function Navigation({ onOpenPopup }) {
    return (
        <header className="nav">
            <div className="nav__container">
                <Link to="/" className="nav__link">
                    <img className="nav__logo" src={logo} alt="Логотип страницы регистрации" />
                </Link>
                <div className="nav__wrapper">
                    <ul className="nav__navigate">
                        <li className="nav__point">Фильмы</li>
                        <li className="nav__point">Сохраненные фильмы</li>
                    </ul>

                    {/* показывается только на десктопе */}
                    <img className="nav__acc" src={NavLogo} alt="Иконка" />
                    {/* показывается только на планшете */}
                    <button className="nav__button" onClick={onOpenPopup}>
                        <img src={navButton} alt="Три полоски" />
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Navigation;