import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <div className='portfolio__wrapper'>
                <h3 className='portfolio__title'>Портфолио</h3>
                <nav className='portfolio__navigate'>
                    <ul className='portfolio__container'>
                        <li className='portfolio__list'>
                            <a className='portfolio__item link' href='https://github.com/gulnaz0206/how-to-learn'>Статичный сайт
                                <button className='portfolio__button'></button>
                            </a>
                        </li>
                        <li className='portfolio__list'>
                            <a className='portfolio__item link' href='https://github.com/gulnaz0206/russian-travel'>Адаптивный сайт
                                <button className='portfolio__button'></button>
                            </a>
                        </li>
                        <li className='portfolio__list'>
                            <a className='portfolio__item link' href='https://github.com/gulnaz0206/react-mesto-api-full-gha'>Одностраничное приложение
                                <button className='portfolio__button'></button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
export default Portfolio;