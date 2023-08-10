import React from "react";
import { BASE_URL } from "../../../const";
import Form from '../Form/Form';
import useValidate from "../../../utils/useValidate.js";

function Login() {
    const {values, errors, isValid, onChange} = useValidate();

    console.log(values, isValid)

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        console.log('SUBMIT');
        regUser();
    }

    const regUser = async () => {
        const response = await fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(values),
        })
        console.log(await response.json())
    }

    return (
        <Form
            isValid={isValid}
            title='Рады видеть!'
            name='login'
            message={''}
            textButton='Войти'
            route='/signup'
            subtitle='Еще не зарегистрированы?'
            go='Регистрация'
            onFormSubmit={handleFormSubmit}>
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
export default Login;