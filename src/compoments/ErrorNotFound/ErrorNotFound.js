import React, { useEffect } from "react";
import './ErrorNotFound.css';
import { useNavigate } from "react-router-dom";

function ErrorNotFound () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }

    return (
        <main>
            <section className="error">
                <h1 className="error__title">404</h1>
                <p className="error__text">Страница не найдена</p>
                <a className="error__back" onClick={handleClick}>Назад</a>
            </section>
        </main>
    );
}
export default ErrorNotFound;
