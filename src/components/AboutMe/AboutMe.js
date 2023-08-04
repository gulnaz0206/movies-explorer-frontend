import Photo from '../../images/AboutMePhoto.jpeg';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className='aboutme' id='aboutme'>
            <div className='aboutme__container'>
                <h2 className='aboutme__title'>Студент</h2>
                <div className='aboutme-information'>
                    <div className='aboutme__profile'>
                        <h3 className='aboutme__name'>Насртдинова Гульназ Гаязовна</h3>
                        <p className='aboutme__profession'>Почти веб-разработчик, 24&nbsp;года</p>
                        <p className='aboutme__text'>На&nbsp;данный момент проживаю в&nbsp;городе Санкт-Петербург.
                            Я&nbsp;люблю слушать музыку. С&nbsp;сентября 2022 года прохожу курс по веб-разработке от Яндекс.Практикум.</p>
                    <a className='aboutme__link' href="https://github.com/gulnaz0206">Github</a>
                    </div>
                    <img className='aboutme__photo' src={Photo} alt='Фотография'/>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;