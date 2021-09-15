import React from 'react';
import "./MoviesCard.css";
import iconSaved from "../../images/movies-card-icon-saved.svg";
import iconDelete from "../../images/movies-card-icon-delete.svg";

const MoviesCard = ({ card, pageSavedMovies }) => {

    const savedIcon = <img src={iconSaved} alt="Сохранено" />;
    const deleteIcon = <img src={iconDelete} alt="Удалить" />;

    return (
        <li className="card-movie">
            <div className="card-movie__image-container">
                <img 
                    src={card.image} 
                    alt={card.title} 
                    className="card-movie__image">
                </img>
                <button
                    className={`card-movie__button ${card.saved && !pageSavedMovies ? "card-movie__button_type_saved" : ""}`}
                    type="button"
                >
                    {!pageSavedMovies && card.saved && savedIcon}
                    {!pageSavedMovies && !card.saved && 'Сохранить'}
                    {pageSavedMovies && deleteIcon}
                </button>
            </div>
            <div className="card-movie__about">
                <h3 className="card-movie__title">{card.title}</h3>
                <span className="card-movie__duration">{card.duration}</span>
            </div>
        </li>
    );
};

export default MoviesCard;