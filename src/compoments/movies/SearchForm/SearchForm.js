import React from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
// import Navigation from '../Navigation/Navigation';
import finfIcon from '../../../images/search-icon.svg';
// import button from '../../../images/find-button.svg';

function SearchForm({currentUser, onOpenPopup}) {
    return (
        <section className="search__container">
        <form className="search-form">
            <div className="search__input">
            <img className="search__find" src={finfIcon} alt="Лупа" />
            <input className="search-form__input" type="text" placeholder="Фильм" />
            <button className="search-form__button"/>
            </div>
            <FilterCheckbox />
        </form>
        
        </section>
    );
}
export default SearchForm;