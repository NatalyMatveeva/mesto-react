import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useEffect } from "react";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  function handleNameSubmit(e) {
    setName(e.target.value);
  }

  function handleLinkSubmit(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmitAvatar({
      name: name,
      link: link,
    });
  }

  return (
    <PopupWithForm
      name="newcard"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      classNamePopup = 'popup__window' 
    >
      <input
        onChange={handleNameSubmit}
        type="text"
        value={name || ''} 
        id="nameplace"
        name="name"
        className="popup__style popup-newcard__nameplace"
        minLength="2"
        maxLength="300"
        placeholder="Название"
        required
      />
      <span className="nameplace-error popup__top-error popup__error"></span>
      <input
        onChange={handleLinkSubmit}
        type="url"
        value={link || ''}
        id="link"
        name="link"
        className="popup__style popup-newcard__link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="link-error popup__button-error popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
