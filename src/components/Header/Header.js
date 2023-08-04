import React from "react";
import Logo from '../../images/logo.svg';
import './Header.css';
import { Link, useNavigate, NavLink } from "react-router-dom";

function Header(props) {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header__container">
                {/* <nav className={props.islogin ? 'header__navigation' : 'header__navigation-inactive'}>
                    <ul className={props.islogin ? 'header__link-container' : 'header__link-container-inactive'}>
                        <li className="header__link-point"><NavLink className={({ isActive }) => `header__link ${isActive ? "header__link_active" : ""}`} to="/movies">Фильмы</NavLink>
                        </li>
                        <li className="header__link-point"><NavLink className={({ isActive }) => `header__link ${isActive ? "header__link_active" : ""}`} to="/movies">Сохраненные фильмы</NavLink>
                        </li>
                    </ul>
                </nav> */}
                <Link to={'/'}>
                    <img className="header__logo" alt="Логотип страницы" src={Logo} />
                </Link>
                <div className="header__navigate">
                    <button className="header__register-button" type="button" onClick={() => navigate('/signup')}>Регистрация</button>
                    <button className="header__login-button" type="button" onClick={() => navigate('/signin')}>Войти</button>
                </div>

            </div>
        </header>
    )
};
export default Header;