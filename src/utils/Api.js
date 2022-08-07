export class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  // Проверяем ответ от сервера
  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка");
  };

  // Добавление новой карточки
  createCard(data) {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    })
    .then(this._handleResponse);
  }


  // Загрузка информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
    }).then(this._handleResponse);
  }

  // Загрузка карточек с сервера
  getCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
    }).then(this._handleResponse);
  }

  //Редактирование профиля

  editProfile(data) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._handleResponse);
  }



  // Лайкнуть карточку
  setLike(data) {
    return fetch(`${this.url}/cards/${data._id}/likes`, {
      method: "PUT",
      headers: this.headers,
    }).then(this._handleResponse);
  }

  // Убрать лайк
  removeLike(data) {
    return fetch(`${this.url}/cards/${data._id}/likes`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._handleResponse);
  }

  // Удаление карточки

  deleteCard(id) {
    const cardId = id;
    return fetch(`${this.url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
      //  body: JSON.stringify(id),
    }).then((res) => this._handleResponse(res));
  }

  //Редактирование аватара

  editAvatar(data) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify((data)
      )

    }).then((res) => this._handleResponse(res));
  }
}


export const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-44",
  headers: {
    authorization: "d05d4a32-12bb-4bfc-b2be-f357c1740080",
    "Content-Type": "application/json",
  },
});

