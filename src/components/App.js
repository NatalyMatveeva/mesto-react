import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import { api } from "../utils/Api";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);

  function onEditAvatar() {
    setisEditAvatarPopupOpen(true);
  }

  function onEditProfile() {
    setisEditProfilePopupOpen(true);
  }

  function onAddPlace() {
    setisAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setisEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  const [selectedCard, setSelectedCard] = React.useState([]);

  function handleCardClick(card) {
    setSelectedCard({ src: card.link, alt: card.name, opened: true });
  }

  return (
    <>     
      <div className="page-area">
        <div className="page">
          <Header />

          <PopupWithForm
            name="new-profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <>
              <input
                type="text"
                id="firstname"
                name="name"
                maxLength="40"
                className="popup__style popup__name"
                required
                placeholder="Имя"
              />
              <span className="firstname-error popup__top-error popup__error"></span>

              <input
                type="text"
                id="profession"
                name="about"
                maxLength="200"
                className="popup__style popup__prof"
                required
                placeholder="Профессия"
              />
              <span className="profession-error popup__button-error popup__error"></span>
            </>
          </PopupWithForm>

          <PopupWithForm
            name="newcard"
            title="Новое место"
            buttonText="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <input
              type="text"
              id="nameplace"
              name="name"
              className="popup__style popup-newcard__nameplace"
              minLength="2"
              maxLength="30"
              placeholder="Название"
              required
            />
            <span className="nameplace-error popup__top-error popup__error"></span>
            <input
              type="url"
              id="link"
              name="link"
              className="popup__style popup-newcard__link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="link-error popup__button-error popup__error"></span>
          </PopupWithForm>

          <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да">
            <form
              className="popup-delete__form form"
              name="delete"
              noValidate
            ></form>
          </PopupWithForm>

          <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <input
              type="url"
              id="avatar"
              name="avatar"
              className="popup__style popup-avatar__link"
              minLength="2"
              maxLength="30"
              placeholder="Выберите фотографию"
              required
            />
            <span className="avatar-error popup__top-error popup__error"></span>
          </PopupWithForm>

          <Main
            onEditProfile={onEditProfile}
            onAddPlace={onAddPlace}
            onEditAvatar={onEditAvatar}
            handleCardClick={handleCardClick}
          />

          <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
