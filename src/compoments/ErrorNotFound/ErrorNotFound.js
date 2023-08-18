import React, { useEffect } from "react";
import './ErrorNotFound.css';


function ErrorNotFound ({ setViewHeader }) {
    useEffect(() => {
        setViewHeader(false)
    }, [])
    return (
        <main>
            <section className="error">
                <h1 className="error__title">404</h1>
                <p className="error__text">Страница не найдена</p>
                <a className="error__back" href="/">Назад</a>
            </section>
        </main>
    );
}
export default ErrorNotFound;
