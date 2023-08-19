import React, { useState } from "react";
import './FilterCheckbox.css';

function FilterCheckbox ({ setIsChecked, isViewSearchHistory }) {
    const isCheckedLocalStorage = localStorage.getItem("filterCheckbox");
    const [isToggleOn, setIsToggleOn] = useState(
        isViewSearchHistory
            ? isCheckedLocalStorage
            : false);

    function handleChange (e) {
        const isChecked = e.target.checked;
        setIsChecked(isChecked);
        setIsToggleOn(isChecked)
    }

    return (
        <div className="checkbox">
            <input
                className="checkbox__input"
                type="checkbox"
                id="checkbox"
                checked={isToggleOn}
                onChange={handleChange}
            />
            <label className="checkbox__label" />
            <span className="checkbox__description">Короткометражки</span>
        </div>
    );
}
export default FilterCheckbox;
