import React from "react";
import './MoviesCard.css';
import film from "../../images/film.png";
import timeConvert from "../../utils/timeConvert";
import { BEAT_FILM_URL_SERVER } from "../../utils/constants";

function MoviesCard ({
  movie,
  liked,
  onLike,
  onDislike
}) {

  const {
    image,
    nameRU,
    duration,
    trailerLink,
    thumbnail
  } = movie;
  const imageUrl = image.length ? image : `${BEAT_FILM_URL_SERVER}/${image.url}`;
  const thumbnailImage = thumbnail ? thumbnail : `${BEAT_FILM_URL_SERVER}${image.formats.thumbnail.url}`
  const id = movie.movieId
    ? movie.movieId
    : movie.id;

  function handleClickLike () {
    onLike({ ...movie, image: imageUrl, thumbnail: thumbnailImage, movieId: Number(id) })
  }

  function handleClickDislike () {
    onDislike(id)
  }

  return (
    <li className="movie-card">
      <div className="movie-card__container">
        <div className="movie-card__information">
          <h2 className="movie-card__title">{nameRU}</h2>
          <p className="movie-card__duration">{timeConvert(duration)}</p>
        </div>
        <button type="button" className={`${image.length ? 'movie-card__delete-btn' : liked ? 'movie-card__save' : 'movie-card__no-save'}`} onClick={liked ? handleClickDislike : handleClickLike} />
      </div>
      <a href={trailerLink}><img className="movie-card__picture" src={imageUrl} alt={nameRU} /></a>
    </li>
  );
}
export default MoviesCard;
