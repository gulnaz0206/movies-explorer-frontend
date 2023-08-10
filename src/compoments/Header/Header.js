import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header__navigate">
            <Link className="header__register" to='/signup'>Регистрация</Link>
            <Link className="header__login" to='/signin'>Войти</Link>
        </div>

    )
};
export default Header;