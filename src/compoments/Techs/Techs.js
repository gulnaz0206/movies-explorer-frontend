import React from "react";
import './Techs.css';

function Techs() {
    return (
        <section className="techs" id="tech">
                <h2 className="techs__title">Технологии</h2>
                <div className="techs__container">
                    <h3 className="techs__subtitle">7&nbsp;технологий</h3>
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
        </section>
    );
}
export default Techs;