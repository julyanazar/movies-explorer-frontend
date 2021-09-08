import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movies from '../../utils/movies';

const Movies = () => {
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList
                cards={movies}
                pageSavedMovies={true}
                buttonMore={true}
            />
        </section>
    );
}

export default Movies;