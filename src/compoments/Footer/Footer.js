import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</h2>
            <div className="footer__container">
                <p className="footer__year">&copy;&nbsp;2023г.</p>
                <ul className="footer__links">
                    <li>
                        <a className="footer__link" href="https://practicum.yandex.ru/" target="blank">Яндекс.Практикум</a>
                        <a className="footer__link" href="https://github.com/gulnaz0206" target="blank">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;