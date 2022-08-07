import React from "react";
import Card from "./Card";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="content">
      <section className="profile">
        <div className="profile__block-avatar">
          <button className="profile__avatar-button" type="button"></button>
          <img
            onClick={props.onEditAvatar}
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Фото профиля"
          />
        </div>

        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__text profile__name"> {currentUser.name}</h1>
            <button
              onClick={props.onEditProfile}
              type="button"
              className="profile__edit-button"
            ></button>
          </div>

          <p className="profile__text profile__prof">{currentUser.about}</p>
        </div>

        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__add-button"
        ></button>
      </section>

      <section className="cards">
        {props.cards.map((card) => (
          <Card
            key={card._id}
            link={card.link}
            name={card.name}
            likes={card.likes}
            card={card}
            onCardClick={props.handleCardClick}
            ownerId={card.owner._id}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </div>
  );
}

export default Main;
