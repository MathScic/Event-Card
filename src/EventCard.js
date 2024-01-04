import React from "react";
import PropTypes from "prop-types";
import { getMonth } from "../src/date";

const EventCard = ({
  imageSrc,
  imageAlt,
  date = new Date(),
  title,
  label,
  type,
  description,
  nb_guesses,
  periode,
  small = false,
  ...props
}) => (
  <div
    data-testid="card-testid"
    className={`EventCard${small ? " EventCard--small" : ""}`}
    {...props}
  >
    <div className="EventCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
      <div className="EventCard__label">{label}</div>
    </div>
    <div className="EventCard__descriptionContainer">
      <div className="EventCard__title">{title}</div>
      <div className="EventCard__type">{type}</div>
      <div className="EventCard__description">{description}</div>
      <div className="EventCard__nb_guesses">Nombre de guests: {nb_guesses}</div>
      <div className="EventCard__periode">Période: {periode}</div>
      <div className="EventCard__month">{getMonth(date)}</div>
    </div>
  </div>
);

EventCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  nb_guesses: PropTypes.number.isRequired,
  periode: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

EventCard.defaultProps = {
  imageAlt: "image",
  small: false,
};

export default EventCard;