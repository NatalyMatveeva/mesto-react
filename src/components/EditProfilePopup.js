import React from "react";
import PopupWithForm from "./PopupWithForm";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      name="new-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <>
        <input
          value={name}
          onChange={handleChangeName}
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
          value={description}
          onChange={handleChangeDescription}
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
  );
}

export default EditProfilePopup;
