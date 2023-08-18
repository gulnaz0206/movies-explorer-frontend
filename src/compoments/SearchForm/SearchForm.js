import React from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import finfIcon from '../../images/search-icon.svg';

function SearchForm ({ currentUser, onOpenPopup }) {
    return (
        <section className="search">
            <form className="search-form">
                <div className="search__input">
                    <img className="search__find" src={finfIcon} alt="Лупа" />
                    <input className="search-form__input" type="text" placeholder="Фильм" required />
                    <button className="search-form__button" type="submit" />
                </div>
                <FilterCheckbox />
            </form>

        </section>
    );
}
export default SearchForm;
