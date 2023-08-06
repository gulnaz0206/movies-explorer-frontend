import React, { useState } from "react";
import logo from '../../../images/header-logo1.svg';

import './Register.css';
import { BASE_URL } from "../../../const";
import { Link } from "react-router-dom";

function Register() {
    const [isActiveError, setActiveError] = React.useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        if (!name || !email || !setEmail) {
            alert('Заполните все поля');
            return;
        }
        regUser();
    }

    const regUser = async () => {
        const response = await fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({ name, email, password }),
        })
        console.log(await response.json())
    }

    return (
        <main className="register">
            <div className="register__container">
                <Link to="/" className="register__link">
                    <img className="register__logo" src={logo} alt="Логотип страницы регистрации" />
                </Link>
                <h1 className="register__title">Добро пожаловать!</h1>
                <form className="register__form" onSubmit={handleFormSubmit}>
                    <label htmlFor="name" className="register__label">Имя</label>
                    <input id='name' type="text" className="register__input" value={name} onChange={(e) => setName(e.target.value)} required />

                    <label htmlFor='email' className="register__label">E-mail</label>
                    <input id='email' type="email" className="register__input" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor='password' className="register__label">Password</label>
                    <input id='password' type="password" className="register__input" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <button type="submit" className="register__button">Зарегистрироваться</button>
                </form>
                <p className="register__login">
                    Уже зарегистрированы?
                    <a href="/signin" className="register__login-link">Войти</a>
                </p>
            </div>
        </main>
    );
}
export default Register;