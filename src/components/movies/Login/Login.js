import React, { useEffect } from "react";
import './Login.css';
import logo from '../../../images//header-logo1.svg';
import { Link } from "react-router-dom";


function Login({ setViewHeader }) {
    useEffect(() => {
        setViewHeader(false)
    }, [])
    return (
        <section className="login">
            <div className="login__container">
                <Link to="/" className="login__links">
                    <img className="login__logo" src={logo} alt="Логотип страницы регистрации" />
                    </Link>
                <h2 className="login__title">Рады видеть!</h2>
                <form className="login__form">
                    <label for="email" className="login__label">Email</label>
                    <input id="email" type="email" className="login__input" value={'pochta@yandex.ru'} />
                    <label for="password" className="login__label">Пароль</label>
                    <input id="password" type="password" className="login__input" />
                    <button type="submit" className="login__button">Войти</button>
                </form>
                <p className="login__already">Еще не зарегистрированы?{' '}
                    <a href="/signup" className="login__link">Регистрация</a>
                </p>
            </div>
        </section>
    );
}
export default Login;