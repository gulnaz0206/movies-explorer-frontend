import React from "react";
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about-project" id="aboutProject">
            <div className="about-project__container">
                <h2 className="about-project__title">О проекте</h2>
                <div className="about-project__description">
                    <div className="about-project__block">
                        <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="about-project__block">
                        <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="about-project__scale">
                    <div className="about-project__scale-backend">
                        <p className="about-project__item about-project__item_type_first-block">1&nbsp;неделя</p>
                        <span className="about-project__theme">Back-end</span>
                    </div>
                    <div className="about-project__scale-frontend">
                        <p className="about-project__item about-project__item_type_second-block">4&nbsp;недели</p>
                        <span className="about-project__theme">Front-end</span></div>
                </div>
            </div>
        </section>
    );
}
export default AboutProject;