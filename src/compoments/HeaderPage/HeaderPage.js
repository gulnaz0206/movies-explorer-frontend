import React from "react";
import './HeaderPage.css';
import logo from '../../images/logo.svg';
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function HeaderPage() {
    return (
        <header className="header">
            <Link to={'/'}>
                <img className="header__logo" alt="Логотип страницы" src={logo} />
            </Link>
            <Header />
        </header>
    )
}
export default HeaderPage;
