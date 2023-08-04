import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="section footer">
            <div className="footer__container">
                <div className="footer__description">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</div>
                <div className="footer__navigate">
                    <p className="footer__year">&copy;&nbsp;2023г.</p>
                    <nav className=" footer__navigate-links">
                        <ul className="footer__links">
                            <li>
                                <a className="footer__link" href="https://practicum.yandex.ru/" target="blank">Яндекс.Практикум</a>
                                <a className="footer__link" href="https://github.com/gulnaz0206" target="blank">Github</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
export default Footer;