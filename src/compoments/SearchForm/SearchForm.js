import React, { useRef, useState } from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import finfIcon from '../../images/search-icon.svg';

function SearchForm ({
    setIsChecked,
    setSearchText,
    isLoading,
    isViewSearchHistory,
    setNotifyTextFromPopup
}) {
    const [isValid, setIsValid] = useState(false);
    const ref = useRef();

    function handleChange (event) {
        setIsValid(event.target.validity.valid);
    }

    function handleSubmit (event) {
        const searchText = event.target.elements['search'].value;
        event.preventDefault();
        if (searchText) {
            setSearchText(searchText);
        } else {
            setNotifyTextFromPopup("Нужно ввести ключевое слово")
        }
    }
    return (
        <section className="search">
            <form
                className="search-form"
                onChange={handleChange}
                onSubmit={handleSubmit}
                noValidate
            >
                <div className="search__input">
                    <img className="search__find" src={finfIcon} alt="Лупа" />
                    <input
                        className="search-form__input"
                        ref={ref}
                        id="search"
                        type="text"
                        placeholder="Фильм"
                        required={true}
                        defaultValue={isViewSearchHistory ? localStorage.getItem("search") || "" : ""}
                    />
                    <button
                        className="search-form__button"
                        type="submit"
                        disabled={isLoading}
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
