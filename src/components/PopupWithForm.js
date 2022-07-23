function PopupWithForm(props) {
  const className = `popup popup-${props.name} ${
    props.isOpen ? "popup_opened" : "" }`;

  return (
    <div className={className}>
      <div className="popup__window">
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close-button">            
          </button>
        <form className="popup__form form" name={props.name} noValidate>
          <h3 className="popup__title">{props.title}</h3>

          {props.children} 

          <button type="submit" className="popup__submit">{props.buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
