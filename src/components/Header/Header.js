import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import "./Header.css";
import headerLogo from "../../images/header-logo.svg";
import NavigationUnauth from "../NavigationUnauth/NavigationUnauth";
import NavigationAuth from "../NavigationAuth/NavigationAuth";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = () => {

    const currentUser = useContext(CurrentUserContext);

    return (
        <header className={`header ${currentUser.email ? "header_is_auth" : ""}`}>
            <Link
                to="/"
                className="header__logo-link"
            >
                <img
                    className="header__logo"
                    src={headerLogo}
                    alt="Логотип"
                />
            </Link>
            {!currentUser.email && <NavigationUnauth />}
            {currentUser.email && <NavigationAuth />}
        </header>
    );
};

export default Header;