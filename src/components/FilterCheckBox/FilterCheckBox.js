import React from 'react';

import "./FilterCheckBox.css";
import Switch from "../Switch/Switch";

const FilterCheckBox = ({ isOn, handleToggle }) => {

    return (
        <div className="filter-checkbox">
            <span className="filter-checkbox__title">Короткометражки</span>
            <Switch 
                isOn={isOn} 
                handleToggle={handleToggle} 
            />
        </div>
    );
};

export default FilterCheckBox;