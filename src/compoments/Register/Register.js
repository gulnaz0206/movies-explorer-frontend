import React, { useEffect } from "react";
import Form from '../Form/Form';
import useValidate from "../../utils/useValidate.js";
import { useNavigate } from "react-router-dom";

function Register ({ onSubmit }) {
    const { values, errors, isValid, onChange } = useValidate();

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(values);
    }

    return (
        <Form
            isValid={isValid}
            title='Добро пожаловать!'
            name='register'
            message={''}
            textButton='Зарегистрироваться'
            route='/signin'
            subtitle='Уже зарегистрированы?'
            go='Войти'
            onFormSubmit={handleFormSubmit}>
            <label className="form__label" htmlFor="name">Имя
                <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    className={`form__input ${errors.name === undefined ? '' : errors.name === '' ? "form__input_true" : "form__input_false"}`}
                    placeholder="Имя"
                    minLength='6'
                    maxLength='30'
                    value={values.name || ""}
                    onChange={onChange}
                />
                <span className="form__input-error">{errors.name}</span>
            </label>
            <label className="form__label" htmlFor="email">E-mail
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    className={`form__input ${errors.email === undefined ? '' : errors.email === '' ? "form__input_true" : "form__input_false"}`}
                    placeholder="pochta@yandex.ru"
                    minLength='2'
                    maxLength='30'
                    pattern="^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$"
                    value={values.email || ""}
                    onChange={onChange}
                />
                <span className="form__input-error">{errors.email}</span>
            </label>
            <label className="form__label" htmlFor="password">Пароль
                <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    className={`form__input ${errors.password === undefined ? '' : errors.password === '' ? "form__input_true" : "form__input_false"}`}
                    placeholder="Пароль"
                    minLength='8'
                    maxLength='30'
                    value={values.password || ""}
                    onChange={onChange}
                />
                <span className="form__input-error">{errors.password}</span>
            </label>
        </Form>
    );
}
export default Register;
