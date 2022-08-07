import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.ownerId === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `card__delete ${
    isOwn ? "card__delete_visible" : "card__delete_hidden"
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__like ${
    isLiked ? "card__like_active" : "card__like"
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleClickLike() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="card">
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <img
        onClick={handleClick}
        src={props.link}
        alt={props.name}
        className="card__foto"
      />
      <div className="card__subtitle">
        <h2 className="card__text">{props.name}</h2>
        <button
          type="button"
          className={cardLikeButtonClassName}
          onClick={handleClickLike}
        >
          <span className="card__likes-number">{props.likes.length}</span>
        </button>
      </div>
    </li>
  );
}

export default Card;
