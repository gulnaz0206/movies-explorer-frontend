import React from "react";
import './Promo.css';
function Promo() {
    return (
        <section className="promo">
                <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
            <nav className="promo__navigation">
                <ul className="promo__more">
                    <li className="promo__more-list">
                        <button className="promo__navigation-button" type="button">
                            <a className="promo__navigation-button-link" href="#aboutProject">О проекте</a>
                        </button>
                    </li>
                    <li className="promo__more-list">
                        <button className="promo__navigation-button" type="button">
                            <a className="promo__navigation-button-link" href="#tech">Технологии</a>
                        </button>
                    </li>
                    <li className="promo__more-list">
                        <button className="promo__navigation-button" type="button">
                            <a className="promo__navigation-button-link" href="#aboutme">Студент</a>
                        </button>
                        </li>
                </ul>
            </nav>
        </section>
    );
}
export default Promo;