import Photo from '../../images/Photo.jpg';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className='aboutme' id='aboutme'>
            <h2 className='aboutme__title'>Студент</h2>
            <div className='aboutme__container'>
                <div className='aboutme__profile'>
                    <h3 className='aboutme__name'>Виталий</h3>
                    <p className='aboutme__profession'> Фронтенд - разработчик,  30&nbsp;лет</p>
                    <p className='aboutme__text'>Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
                        и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. &nbsp;С 2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс &nbsp;по веб&nbsp;-&nbsp;разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
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