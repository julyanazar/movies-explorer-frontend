import React from 'react';
import "./AboutMe.css";
import Heading from "../Heading/Heading";
import student from "../../images/about-me-image.jpg";

const AboutMe = () => {
    return (
        <section className="about-me">
            <Heading heading="Студент" />
            <div className="about-me__container">

                <div className="about-me__info">

                    <h3 className="about-me__title">Юля</h3>
                    <p className="about-me__subtitle">Фронтенд-разработчик, 21 год</p>
                    <p className="about-me__description">
                        Мне нравится создавать что-то новое.
                        Хотела поступать в архитектурный, но ошиблась дверью и поступила на программиста.
                        Теперь влюблена в веб - разработку из-за ее простоты и интерактивности.
                        В Яндекс Практикуме поняла, что все куда сложнее и интереснее.
                        Участвовала в некоммерческом проекте и получила опыт работы в команде.
                    </p>

                    <ul className="about-me__items">
                        <li className="contact">
                            <a
                                className="contact__url"
                                href="https://www.facebook.com/julyazavr/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Facebook
                            </a>
                        </li>
                        <li className="contact">
                            <a
                                className="contact__url"
                                href="https://github.com/julyanazar"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </li>
                    </ul>

                </div>
                <img
                    className="about-me__image"
                    alt="Фотография студента"
                    src={student}
                />
            </div>
        </section>
    );
};

export default AboutMe;