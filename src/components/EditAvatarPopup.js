import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      classNamePopup = 'popup-avatar__window'     
    >
      <input
        ref={avatarRef}
        type="url"
        id="avatar"
        name="avatar"
        className="popup__style popup-avatar__link"
        minLength="2"
        maxLength="300"
        placeholder="Выберите фотографию"
        required
      />
      <span className="avatar-error popup__top-error popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
