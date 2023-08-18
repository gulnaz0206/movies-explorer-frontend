import { BASE_URL } from './constants';

class MainApi {
  constructor(options) {
    this._options = options;
    this._urlServer = this._options.urlServer;

    //возвращаем контекст
    this.login = this._handleLogin.bind(this)
    this.register = this._handleRegister.bind(this)
    this.register = this._handleRegister.bind(this)
    this.checkToken = this._handleCheckToken.bind(this)
    this.getUserInfo = this._handleGetUserInfo.bind(this)
    this.editProfile = this._handleEditProfile.bind(this)
    this.getSavedMovies = this._handleGetSavedMovies.bind(this)
    this.addMovie = this._handleAddMovie.bind(this)
    this.removeMovie = this._handleRemoveMovie.bind(this)
    this.logout = this._handleLogout.bind(this)
  }

  _getHeaders () {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  _handleResponse (res) {
    if (res.status === 200 || res.status === 201) {
      return res.json()
    }
    else if (res.status === 400 || res.status === 401 || res.status === 403 || res.status === 404 || res.status === 409) {
      return res.json()
        .then((jsonError) => {
          return { error: jsonError.message };
        })
    }
    else if (res.status === 500) {
      return { error: "Ошибка на стороне сервера" };
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
  _handleCheckToken () {
    return fetch(`${this._urlServer}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._getHeaders(),
    }).then(this._handleResponse);
  };

  _handleRegister (email, password, name) {
    return fetch(`${this._urlServer}/signup`, {
      method: 'POST',
      credentials: "include",
      headers: this._getHeaders(),
      body: JSON.stringify({ email, password, name })
    }).then(this._handleResponse);
  };

  _handleLogin ({ email, password }) {
    return fetch(`${this._urlServer}/signin`, {
      credentials: 'include',
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({ email, password })
    }).then(this._handleResponse);
  };


  _handleGetUserInfo () {
    return fetch(`${this._urlServer}/users/me`, {
      method: 'GET',
      headers: this._getHeaders(),
      credentials: 'include',
    })
      .then(this._handleResponse);
  }

  _handleEditProfile ({ name, email }) {
    return fetch(`${this._urlServer}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      credentials: 'include',
      body: JSON.stringify({ name, email }),
    })
      .then(this._handleResponse);
  }

  _handleGetSavedMovies () {
    return fetch(`${this._urlServer}/movies`, {
      method: 'GET',
      headers: this._getHeaders(),
      credentials: 'include',
    })
      .then(this._handleResponse);
  }

  _handleAddMovie (movie) {
    const { id, nameRU, nameEN, country, director, duration, year, description, image, trailerLink, } = movie
    return fetch(`${this._urlServer}/movies`, {
      method: 'POST',
      headers: this._getHeaders(),
      credentials: 'include',
      body: JSON.stringify({
        movieId: id,
        image: 'https://api.nomoreparties.co' + image.url,
        thumbnail: 'https://api.nomoreparties.co' + image.formats.thumbnail.url,
        country,
        director,
        duration,
        year,
        description,
        trailerLink,
        nameRU,
        nameEN,
      }),
    })
      .then(this._handleResponse);
  }

  _handleRemoveMovie (id) {
    return fetch(`${this._urlServer}/movies/${id}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
      credentials: 'include',
    })
      .then(this._handleResponse);
  }

  _handleLogout () {
    return fetch(`${this._urlServer}/signout`, {
      method: 'GET',
      credentials: 'include',
      headers: this._getHeaders(),
    })
      .then(this._handleResponse);
  }
};

const mainApi = new MainApi({
  urlServer: BASE_URL,
});

export default mainApi;
