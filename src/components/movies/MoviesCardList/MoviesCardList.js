import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import film from '../../../images/film.png';

function MoviesCardList(props) {
    return (
        <>
            <ul className="movies-list__item">
                <MoviesCard
                    title='33 слова о дизайне'
                    duration='1ч 47м'
                    picture={film}
                />
                <MoviesCard
                    title='33 слова о дизайне'
                    duration='1ч 47м'
                    picture={film}
                />
                <MoviesCard
                    title='33 слова о дизайне'
                    duration='1ч 47м'
                    picture={film}
                />
            </ul>
        </>
    );
}
export default MoviesCardList;