import React from 'react';
import { Link } from "react-router-dom";
import "./NavigationUnauth.css";

const NavigationUnauth = () => {
    return (
        <nav className="nav-unauth">
            <ul className="nav-unauth__menu">
                <li className="nav-unauth__menu-links">
                    <Link
                        to="/signup"
                        className="nav-unauth__link nav-unauth__link_type_signup"
                    >
                        Регистрация
                    </Link>
                </li>
                <li className="nav-unauth__menu-links">
                    <Link
                        to="/signin"
                        className="nav-unauth__link nav-unauth__link_type_signin"
                    >
                        Войти
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationUnauth;