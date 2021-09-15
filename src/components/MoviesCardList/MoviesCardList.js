import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({ cards, pageSavedMovies, buttonMore }) => {

    const [isLoading, setLoading] = useState(false);
    const handlePreloader = () => { setLoading(true) };

    return (
        <section className="movies-cards">
            <ul className="movies-cards__list">
                {cards.map((card) => (
                    <MoviesCard
                        key={card.id}
                        card={card}
                        pageSavedMovies={pageSavedMovies}
                    />
                ))}
            </ul>

            {isLoading ? (<Preloader />) :
                (
                    buttonMore &&
                    (
                        <div className="movies-cards__button-container">
                            <button
                                className="movies-cards__button"
                                type="button"
                                name="more"
                                onClick={handlePreloader}
                            >
                                Ещё
                            </button>
                        </div>
                    )
                )}

        </section>
    );
};

export default MoviesCardList;