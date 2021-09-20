import React from 'react';
import { useHistory } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {

    const history = useHistory();

    function handleClickButtonBack() {
        history.goBack();
        history.goBack();
    };

    return (
        <div className="not-found">
            <div className="not-found__container">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__subtitle">Страница не найдена</p>
            </div>
            <button
                type="button"
                className="not-found__link"
                onClick={handleClickButtonBack}
            >
                Назад
            </button>
        </div>
    );
};

export default PageNotFound;