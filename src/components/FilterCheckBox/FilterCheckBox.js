import "./FilterCheckBox.css";
import Switch from "../Switch/Switch";
import { useState } from "react";

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