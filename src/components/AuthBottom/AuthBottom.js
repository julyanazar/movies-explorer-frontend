import React from 'react';
import { Link } from "react-router-dom";
import "./AuthBottom.css";

const AuthBottom = ({
    buttonText,
    paragraph,
    linkText,
    href,
    name,
    buttonDisabled
}) => {

    return (
        <div
            className={`auth-bottom 
                ${name === "login" ? "auth-bottom_in_login" : ""}
                ${name === "register" ? "auth-bottom_in_register" : ""}`}>
            <button
                className={`auth-bottom__button ${buttonDisabled ? "auth-bottom__button_disabled" : ""}`}
                type="submit"
                disabled={buttonDisabled}
            >
                {buttonText}
            </button>
            <div className="auth-bottom__redirect">
                <p className="auth-bottom__paragraph">{paragraph}</p>
                <Link
                    to={href}
                    className="auth-bottom__link"
                >
                    {linkText}
                </Link>
            </div>
        </div>
    );
};

export default AuthBottom;