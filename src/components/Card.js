function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <button type="button" className="card__delete "></button>
      <img
        onClick={handleClick}
        src={props.link}
        alt={props.name}
        className="card__foto"
      />
      <div className="card__subtitle">
        <h2 className="card__text">{props.name}</h2>
        <button type="button" className="card__like">
          <span className="card__likes-number">{props.likes.length}</span>
        </button>
      </div>
    </li>
  );
}

export default Card;
