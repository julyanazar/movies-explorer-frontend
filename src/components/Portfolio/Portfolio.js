import React from 'react';
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>

            <ul className="portfolio__items">
                <li className="project">
                    <a
                        className="project__url"
                        href="https://julyanazar.github.io/how-to-learn/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Статичный сайт
                    </a>
                </li>
                <li className="project">
                    <a
                        className="project__url"
                        href="https://julyanazar.github.io/russian-travel/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Адаптивный сайт
                    </a>
                </li>
                <li className="project">
                    <a
                        className="project__url"
                        href="http://mesto.website.nomoredomains.rocks/sign-in"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Одностраничное приложение
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;