import React from 'react';
import "./SearchForm.css";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";

const SearchForm = () => {

    return (
        <div className="search">
            <form className="search__form">
                <div className="search__container">
                    <input
                        className="search__input"
                        placeholder="Фильм"
                        type="text"
                        required>
                    </input>
                    <button 
                        className="search__button" 
                        type="submit">
                    </button>
                </div>
            </form>
            <FilterCheckBox />
            <div className="search__line"></div>
        </div>
    );
};

export default SearchForm;