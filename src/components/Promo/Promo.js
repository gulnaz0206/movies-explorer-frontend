import React from "react";
import './Promo.css';
import PromoLogo from '../../images/promo-logo.svg'
function Promo({ scrollToSection }) {
    return (
        <section className="promo">
            <div className="promo__wrapper">
                <h2 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h2>
                <img className="promo__logo" src={PromoLogo} alt="Логотип страницы" />
            </div>
            <nav className="promo__navigation">
                <ul className="promo__more">
                    <li className="promo__more-list">
                        <button className="project__button">
                            <a className="promo__button" href="#aboutProject">О проекте</a>
                        </button>
                    </li>
                    <li className="promo__more-list">
                        <button className="project__button"><a className="promo__button" href="#tech">Технологии</a>
                        </button>
                    </li>
                    <li className="promo__more-list">
                        <button className="project__button"><a className="promo__button" href="#aboutme">Студент</a>
                        </button>
                        </li>
                </ul>
            </nav>
        </section>
    );
}
export default Promo;