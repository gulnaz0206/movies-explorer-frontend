import React, { useState } from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import finfIcon from '../../images/search-icon.svg';

function SearchForm ({
    setIsChecked,
    setSearchText,
    isLoading,
    isViewSearchHistory
}) {
    const [isValid, setIsValid] = useState(false);

    function handleChange (event) {
        setIsValid(event.target.validity.valid);
    }

    function handleSubmit (event) {
        event.preventDefault();
        const searchText = event.target.elements['search'].value;
        setSearchText(searchText);
    }
    return (
        <section className="search">
            <form
                className="search-form"
                onChange={handleChange}
                onSubmit={handleSubmit}
            >
                <div className="search__input">
                    <img className="search__find" src={finfIcon} alt="Лупа" />
                    <input
                        className="search-form__input"
                        id="search"
                        type="text"
                        placeholder="Фильм"
                        required={true}
                        defaultValue={isViewSearchHistory ? localStorage.getItem("search") || "" : ""}
                    />
                    <button
                        className="search-form__button"
                        type="submit"
                        disabled={isLoading ? true : !isValid}
                    />
                </div>
                <FilterCheckbox
                    setIsChecked={setIsChecked}
                    isViewSearchHistory={isViewSearchHistory}
                />
            </form>

        </section>
    );
}
export default SearchForm;
