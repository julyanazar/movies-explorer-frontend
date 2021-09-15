import React from 'react';
import { Link } from "react-router-dom";

import "./Header.css";
import headerLogo from "../../images/header-logo.svg";
import NavigationUnauth from "../NavigationUnauth/NavigationUnauth";
import NavigationAuth from "../NavigationAuth/NavigationAuth";

const Header = ({ loggedIn }) => {
    return (
        <header className={`header ${loggedIn ? "header_is_auth" : ""}`}>
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
            {!loggedIn && <NavigationUnauth />}
            {loggedIn && <NavigationAuth />}
        </header>
    );
};

export default Header;