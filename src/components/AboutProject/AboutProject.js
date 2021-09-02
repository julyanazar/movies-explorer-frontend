import React from 'react';
import "./AboutProject.css";
import Heading from "../Heading/Heading";

const AboutProject = () => {
    return (
        <section className="about-project">
            <Heading heading="О проекте" />
            <div className="about-project__container">

                <div className="about-project__info">
                    <h3 className="about-project__title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="about-project__paragraph">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>

                <div className="about-project__info">
                    <h3 className="about-project__title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="about-project__paragraph">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>

            </div>

            <div className="about-project__container">

                <div className="about-project__timelines">
                    <h4 className="about-project__duration about-project__duration_color_black">1 неделя</h4>
                    <p className="about-project__description">Back-end</p>
                </div>

                <div className="about-project__timelines">
                    <h4 className="about-project__duration about-project__duration_color_grey">4 недели</h4>
                    <p className="about-project__description">Front-end</p>
                </div>

            </div>
        </section>
    );
};

export default AboutProject;