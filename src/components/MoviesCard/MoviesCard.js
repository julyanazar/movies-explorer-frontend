import React from 'react';
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import iconSaved from "../../images/movies-card-icon-saved.svg";
import iconDelete from "../../images/movies-card-icon-delete.svg";

import * as utils from "../../utils/utils";

const MoviesCard = ({ card, onCardClickButton }) => {


    const location = useLocation();

    const isSavedMoviesPage = location.pathname === "/saved-movies";
    const isMoviesPage = location.pathname === "/movies";

    const savedIcon = <img src={iconSaved} alt="Сохранено" />;
    const deleteIcon = <img src={iconDelete} alt="Удалить" />;

    function handleCardClickButton() {
        onCardClickButton(card);
    }

    return (
        <li className="card-movie">
            <div className="card-movie__image-container">
                <a
                    className="card-movie__link"
                    href={card.trailer || card.trailerLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="card-movie__image"
                        src={utils.getCardImage(card)}
                        alt={card.nameRU}
                    >
                    </img>
                </a>
                <button
                    className={`card-movie__button ${card.isSaved && isMoviesPage ? "card-movie__button_type_saved" : ""}`}
                    type="button"
                    onClick={handleCardClickButton}
                >
                    {isMoviesPage && card.isSaved && savedIcon}
                    {isMoviesPage && !card.isSaved && "Сохранить"}
                    {isSavedMoviesPage && deleteIcon}
                </button>
            </div>
            <div className="card-movie__about">
                <h3 className="card-movie__title">{card.nameRU}</h3>
                <span className="card-movie__duration">{utils.getMovieDuration(card)}</span>
            </div>
        </li>
    );
};

export default MoviesCard;