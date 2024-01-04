import React, { useState } from "react";
import Modal from "react-modal";
import EventCard from "./EventCard";
import { MONTHS, getMonth } from "./date";
import eventList from "./event";

const EventList = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleMonthClick = (month) => setSelectedMonth(month);
  const openModal = (eventId) => setSelectedEvent(eventId);
  const closeModal = () => setSelectedEvent(null);

  return (
    <div>
      {Object.keys(MONTHS).map((month) => (
        <button key={month} onClick={() => handleMonthClick(parseInt(month, 10))}>
          {MONTHS[month]}
        </button>
      ))}

      {selectedMonth && (
        <div>
          {eventList.map((event) => (
            getMonth(new Date(event.date)) === MONTHS[selectedMonth] && (
              <button key={event.id} onClick={() => openModal(event.id)}>
                {event.title}
              </button>
            )
          ))}
        </div>
      )}

      <Modal isOpen={selectedEvent !== null} onRequestClose={closeModal}>
        {selectedEvent && (
          <EventCard
            imageSrc={eventList[selectedEvent - 1].cover}
            imageAlt={eventList[selectedEvent - 1].title}
            date={new Date(eventList[selectedEvent - 1].date)}
            title={eventList[selectedEvent - 1].title}
            type={eventList[selectedEvent - 1].type}
            description={eventList[selectedEvent - 1].description}
            nb_guesses={eventList[selectedEvent - 1].nb_guesses}
            periode={eventList[selectedEvent - 1].periode}
          />
        )}
        <button onClick={closeModal}>Fermer la pop-up</button>
      </Modal>
    </div>
  );
};

export default EventList;