import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

import * as utils from "../../utils/utils";

const MoviesCardList = ({
    cards,
    buttonMore,
    onClickMoreButton,
    onCardClickButton,
    movieSearchError, }) => {

    const visibilityCards = cards.length > 0;

    return (
        <section className="movies-cards">

            {!visibilityCards && <p className="cards__message">{movieSearchError}</p>}

            {visibilityCards && (
                <ul className="movies-cards__list">
                    {cards.map((card) => (
                        <MoviesCard
                            key={utils.getMovieKey(card)}
                            card={card}
                            onCardClickButton={onCardClickButton}
                        />
                    ))}
                </ul>
            )}

            {buttonMore && (
                <div className="movies-cards__button-container">
                    <button
                        className="movies-cards__button"
                        type="button"
                        name="more"
                        onClick={onClickMoreButton}
                    >
                        Ещё
                    </button>
                </div>

            )}

        </section>
    );
};

export default MoviesCardList;