import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</h2>
            <div className="footer__container">
                <p className="footer__year">&copy;&nbsp;2023г.</p>
                <ul className="footer__links">
                        <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel='noreferrer'>Яндекс.Практикум</a>
                        <a className="footer__link" href="https://github.com" target="_blank" rel='noreferrer'>Github</a>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;