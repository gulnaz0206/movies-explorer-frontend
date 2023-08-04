import React from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Navigation from '../Navigation/Navigation';

function SearchForm({currentUser, onOpenPopup}) {
    return (
        <section className="search__container">
            <Navigation onOpenPopup={onOpenPopup} />
        <form className="search-form">
            <input className="search-form__input" type="text" placeholder="Фильм" />
            <button className="search-form__button" />
        </form>
        <FilterCheckbox />
        <button className='search-form__button-more'>Ещё</button>
        </section>
    );
}
export default SearchForm;