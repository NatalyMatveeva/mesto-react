import React from "react";
import Card from "./Card";
import { api } from "../utils/Api";

function Main(props) {
  React.useEffect(() => {
    api.getUserInfo().then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setuserAvatar(userData.avatar);
    });
  }, []);

  React.useEffect(() => {
    api.getCards().then((data) => {
      setcards(data);
    });
  }, []);

  const [userName, setUserName] = React.useState(["Жак Ив Кусто"]);
  const [userDescription, setUserDescription] = React.useState([
    "Исследователь океана",
  ]);
  const [userAvatar, setuserAvatar] = React.useState(0);

  const [cards, setcards] = React.useState([]);

  return (
    <div className="content">
      <section className="profile">
        <div className="profile__block-avatar">
          <button className="profile__avatar-button" type="button"></button>
          <img
            onClick={props.onEditAvatar}
            className="profile__avatar"
            src={userAvatar}
            alt="Фото профиля"
          />
        </div>

        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__text profile__name"> {userName}</h1>
            <button
              onClick={props.onEditProfile}
              type="button"
              className="profile__edit-button"
            ></button>
          </div>

          <p className="profile__text profile__prof">{userDescription}</p>
        </div>

        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__add-button"
        ></button>
      </section>

      <section className="cards">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              card={card}
              onCardClick={props.handleCardClick}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Main;
