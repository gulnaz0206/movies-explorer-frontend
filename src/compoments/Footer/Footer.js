import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">
                Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
            </h2>
            <div className="footer__navigation">
                <p className="footer__year">&copy;&nbsp;2023</p>
                <nav className="footer__navigation-links">
                    <ul className="footer__links">
                        <li>
                            <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel='noreferrer'>
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li>
                            <a className="footer__link" href="https://github.com" target="_blank" rel='noreferrer'>
                                Github
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
export default Footer;