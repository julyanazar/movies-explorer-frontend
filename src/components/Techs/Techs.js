import React from 'react';
import "./Techs.css";
import Heading from "../Heading/Heading";

const Techs = () => {
    return (
        <section className="techs">
            <Heading heading="Технологии" />
            <div className="techs__container">

                <h2 className="techs__title">7 технологий</h2>
                <p className="techs__paragraph">
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>

                <ul className="techs__items">
                    <li className="tech">
                        <h4 className="tech__title">HTML</h4>
                    </li>
                    <li className="tech">
                        <h4 className="tech__title">CSS</h4>
                    </li>
                    <li className="tech">
                        <h4 className="tech__title">JS</h4>
                    </li>
                    <li className="tech">
                        <h4 className="tech__title">React</h4>
                    </li>
                    <li className="tech">
                        <h4 className="tech__title">Git</h4>
                    </li>
                    <li className="tech">
                        <h4 className="tech__title">Express.js</h4>
                    </li>
                    <li className="tech">
                        <h4 className="tech__title">mongoDB</h4>
                    </li>
                </ul>

            </div>
        </section>
    );
};

export default Techs;