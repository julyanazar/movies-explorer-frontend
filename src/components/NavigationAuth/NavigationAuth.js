import { React, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import "./NavigationAuth.css";

const NavigationAuth = () => {

    const [showMenu, setShowMenu] = useState(false);
    const toggleHamburger = () => setShowMenu(!showMenu);

    return (
        <nav className="nav-auth">

            <button
                className="nav-auth__button-hamburger"
                type="button"
                onClick={toggleHamburger}>
            </button>

            <div className={`nav-auth__container ${showMenu ? "nav-auth__container_visible" : ""}`}>
                <div className={`nav-auth__hamburger ${showMenu ? "nav-auth__hamburger_visible" : ""}`}>
                    <div className="nav-auth__menu-container">

                        <button
                            className="nav-auth__button-close"
                            type="button"
                            onClick={toggleHamburger}>
                        </button>

                        <ul className="nav-auth__menu">
                            <li className="nav-auth__menu-item nav-auth__menu-item_to_main">
                                <Link
                                    to="/"
                                    className="nav-auth__link"
                                >
                                    Главная
                                </Link>
                            </li>
                            <li className="nav-auth__menu-item">
                                <NavLink
                                    to="/movies"
                                    className="nav-auth__link"
                                    activeClassName="nav-auth__link_active"
                                >
                                    Фильмы
                                </NavLink>
                            </li>
                            <li className="nav-auth__menu-item">
                                <NavLink
                                    to="/saved-movies"
                                    className="nav-auth__link"
                                    activeClassName="nav-auth__link_active"
                                >
                                    Сохранённые фильмы
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink
                        to="/profile"
                        className="nav-auth__link nav-auth__link_to_profile"
                        activeClassName="nav-auth__link_active"
                    >
                        Аккаунт
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavigationAuth;