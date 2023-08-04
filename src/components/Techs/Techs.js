import React from "react";
import './Techs.css';

function Techs() {
    return (
        <section className="techs" id="tech">
            <div className="techs__wrapper">
                <h3 className="techs__title">Технологии</h3>
                <div className="techs__container">
                    <h4 className="techs__subtitle">7&nbsp;технологий</h4>
                    <p className="techs__text">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
                </div>
                <ul className="techs__technologies">
                    <li className="techs__item">HTML</li>
                    <li className="techs__item">CSS</li>
                    <li className="techs__item">JS</li>
                    <li className="techs__item">React</li>
                    <li className="techs__item">Git</li>
                    <li className="techs__item">Express.js</li>
                    <li className="techs__item">mongoDB</li>
                </ul>
            </div>
        </section>
    );
}
export default Techs;