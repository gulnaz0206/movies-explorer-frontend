import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Form.css';
import logo from '../../../images/logo.svg';

function Form({ isValid, title, name, message, textButton, route, subtitle, go, children, onFormSubmit }) {
    const formMessageClassName = `form__message ${isValid ? "form__message_error" : "form__message_active"}`;
    const formButtonClassName = `form__button register__button ${isValid ? "form__button_saved" : "form__button_disabled"}`;
    return (
        <main>
            <section className="form">
                <Link to="/">
                    <img className="form__logo" src={logo} alt="Логотип страницы" />
                </Link>
                <h1 className="form__title">{title}</h1>
                <form className="form__autoform" name={`form-${name}`} onSubmit={onFormSubmit}>
                    <div>
                        <fieldset className="form__fieldset">{children}</fieldset>
                    </div>
                    <div>
                        <p className={formMessageClassName} >{message}</p>
                        <button className={formButtonClassName} type="submit" disabled={!isValid}>{textButton}</button>
                    </div>
                </form>
                <div className="form__sign">
                    <p className="form__subtitle">{subtitle}</p>
                    <NavLink className="form__link" to={route}>{go}</NavLink>
                </div>
            </section>
        </main>
    );
}
export default Form;