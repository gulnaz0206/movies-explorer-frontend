import React, { useEffect } from "react";
import Form from '../Form/Form';
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { useNavigate } from "react-router-dom";

function Login ({ onSubmit, isLogged }) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const navigate = useNavigate();

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(values);
    }
    useEffect(() => {
        if (isLogged) {
            setTimeout(() => {
                navigate('/', { replace: true });
            }, 100)
        }
    }, [isLogged]);
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
                    minLength='6'
                    maxLength='30'
                    pattern="^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$"
                    value={values.email || ""}
                    onChange={handleChange}
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
                    placeholder="•••••••"
                    minLength='8'
                    maxLength='30'
                    value={values.password || ""}
                    onChange={handleChange}
                />
                <span className="form__input-error">{errors.password}</span>
            </label>
        </Form>
    );
}
export default Login;
