import { BEAT_FILM_URL } from './constants';

class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _handleResponse (res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json()
  }

  loadMoviesAll () {
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => this._handleResponse(res));
  }
}

const moviesApi = new MoviesApi({
  baseUrl: BEAT_FILM_URL,
});

export default moviesApi;
