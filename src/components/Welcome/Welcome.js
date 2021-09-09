import React from 'react';
import { Link } from "react-router-dom";

import "./Welcome.css";
import welcomeLogo from "../../images/welcome-logo.svg";

const Welcome = ({
    text,
    loggedIn,
    name
}) => {

    return (
        <div className={`welcome ${name === "profile" ? "welcome_in_profile" : ""}`}>
            {!loggedIn && (
                <Link
                    to="/"
                    className="welcome__link"
                >
                    <img
                        className="welcome__logo"
                        src={welcomeLogo}
                        alt="Логотип">
                    </img>
                </Link>
            )}
            <h1 className={`welcome__text ${name === "profile" ? "welcome__text_in_profile" : ""}`}>{text}</h1>
        </div>
    );
};

export default Welcome;