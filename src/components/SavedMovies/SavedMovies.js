import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import savedMovies from '../../utils/savedMovies.js';

const SavedMovies = () => {
    return (
        <section className="saved-movies">
            <SearchForm />
            <MoviesCardList
                cards={savedMovies}
                pageSavedMovies={true}
                buttonMore={false}
            />
        </section>
    );
}

export default SavedMovies;