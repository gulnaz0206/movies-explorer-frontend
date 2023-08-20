import Photo from '../../images/Photo.jpg';
import './AboutMe.css';

function AboutMe () {
    return (
        <section className='aboutme' id='aboutme'>
            <h2 className='aboutme__title'>Студент</h2>
            <div className='aboutme__container'>
                <div className='aboutme__profile'>
                    <h3 className='aboutme__name'>Гульназ</h3>
                    <p className='aboutme__profession'> Фронтенд-разработчик, 24&nbsp;года</p>
                    <p className='aboutme__text'>На данный момент живу в городе Санкт-Петербург. С сентября 2022 года учусь на курсе веб-разработка от Яндекс.Практикума.</p>
                    <a className='aboutme__link' href="https://github.com/gulnaz0206" target="_blank" rel='noreferrer'>Github</a>
                </div>
                <div className='aboutme__profile-photo'>
                    <img className='aboutme__photo' src={Photo} alt='Фотография студента' />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
