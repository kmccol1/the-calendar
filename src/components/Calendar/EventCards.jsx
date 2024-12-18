import React from 'react';
import EventCard from './EventCard';
import './EventCards.css';

const EventCards = ({ selectedDate, events }) => {
  if (!selectedDate) return null;

  const filteredEvents = events.filter(
    (event) => event.date === selectedDate.toISOString().split('T')[0]
  );

  return (
    <div className="event-card-container">
      {filteredEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventCards;
