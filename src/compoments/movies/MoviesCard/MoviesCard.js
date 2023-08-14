import React from "react";
import './MoviesCard.css';
import film from "../../../images/film.png";

function MoviesCard({ title, duration }) {
    return (
      <li className="movie-card">
        <div className="movie-card__container">
          <div className="movie-card__information">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__duration">{duration}</p>
        </div>
        <button type="button" className="movie-card__save" />
      </div>
      <img className="movie-card__picture" src={film} alt={`Фильм ${title}`} />
      </li>
  );
}
export default MoviesCard;