import React from 'react';
import { useState } from "react";

import "./FilterCheckBox.css";
import Switch from "../Switch/Switch";

const FilterCheckBox = () => {

    const [value, setValue] = useState(false);

    return (
        <div className="filter-checkbox">
            <span className="filter-checkbox__title">Короткометражки</span>
            <Switch 
                isOn={value} 
                handleToggle={() => setValue(!value)} 
            />
        </div>
    );
};

export default FilterCheckBox;