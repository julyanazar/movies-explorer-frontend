import React from 'react';
import promoLogo from "../../images/promo-logo.svg";
import "./Promo.css";

const Promo = () => {
    return (
        <section className="promo">
            <h1 className="promo__title">
                Учебный проект студента факультета Веб-разработки.
            </h1>
            <div className="promo__wrapper">
                <img className="promo__logo" src={promoLogo} alt="Логотип баннера страницы «О проекте»" />
            </div>
        </section>
    );
};

export default Promo;