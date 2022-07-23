function ImagePopup({ card, onClose }) {
  const className = `popup popup-picture ${card.opened ? "popup_opened" : ""}`;

  return (
    <div className={className}>
      <div className="popup-picture__window">
        <img src={card.src} alt={card.alt} className="popup-picture__img" />
        <h3 className="popup-picture__title">{card.alt}</h3>
        <button
          type="button"
          className="popup__close-button popup-picture__close-button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
