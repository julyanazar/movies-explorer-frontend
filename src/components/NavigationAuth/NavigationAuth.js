import React from 'react';
import { Link } from "react-router-dom";
import "./NavigationAuth.css";

const NavigationAuth = () => {
    return (
        <nav className="navigation-auth">
            <ul className="navigation-auth__menu">
                <li className="navigation-auth__menu-links">
                    <Link
                        to="/signup"
                        className="navigation-auth__link navigation-auth__link_type_signup"
                    >
                        Регистрация
                    </Link>
                </li>
                <li className="auth__list-item">
                    <Link
                        to="/signin"
                        className="navigation-auth__link navigation-auth__link_type_signin"
                    >
                        Войти
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationAuth;