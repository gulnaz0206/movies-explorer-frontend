import React from 'react';
import MovieHeader from '../../MovieHeader/MovieHeader';
import './Profile.css';
import { Link } from 'react-router-dom';
import useValidate from "../../../utils/useValidate.js";
import Popup from "../../Popup/Popup.js";
import { useState } from "react";

function Profile({ onBurgerClick }) {
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const { isValid, onChange } = useValidate();
    // const profileButton = `${!isValid ? "profile__button-save" : "profile__button-inactive"}`;

    return (
        <>
            <MovieHeader onBurgerClick={() => setIsPopupOpened(true)}/>
            <main>
                <section className='profile'>
                    <h1 className='profile__title'>Привет, Гульназ!</h1>
                    <form className='profile__form'>
                        <fieldset className='profile__form-fieldset'>
                            <label className='profile__label' htmlFor='name'>Имя
                                <input
                                    className='profile__input'
                                    id='name'
                                    name='name'
                                    type='text'
                                    value='Гульназ'
                                    placeholder='Имя'
                                    minLength='2'
                                    maxLength='30'
                                    onChange={onChange}
                                    required
                                />
                            </label>

                            <label className='profile__label' htmlFor='name'>Email
                                <input
                                    className='profile__input'
                                    id='email' name='email'
                                    type='email'
                                    value='pochta@yandex.ru'
                                    placeholder='pochta@yandex.ru'
                                    onChange={onChange}
                                    required
                                />
                            </label>
                        </fieldset>
                        <button className='profile__button' type='button'>
                            Редактировать
                        </button>
                        <Link to="/" className='profile__button-exit' type='submit'>
                            Выйти из аккаунта
                        </Link>
                        {/* <button type='submit' className={profileButton}>
                                Сохранить
                                </button> */}
                    </form>
                </section>
            </main >
            <Popup isPopupOpened={isPopupOpened} onClosePopup={() => setIsPopupOpened(false)} />
        </>
    );
}

export default Profile;