import { useEffect } from 'react';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/Calendar.css';

function CalendarPage() {
  useEffect(() => {
    document.title = "NUWIT | Calendar";
  }, []);

  const [viewMode, setViewMode] = useState('list');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { title: 'Halloween Movie Night', date: '2024-10-29', time: '7-8 pm', location: 'Richards Hall, Room 300', description: 'Tired of studying for midterms and looking for a fun way to relax? Get into the spooky spirit and join us to watch a halloween movie! Vote for the movie on the slack channel !! Snacks and candy will be provided! 🎃 👻 🍫' },
    { title: 'Professional Development Hosted by Epic Hire', date: '2024-11-05', time:'7-8 pm', location: 'Richards Hall, Room 300', description: '' },
    { title: 'NUWIT x Break Through Tech AI at MIT', date: '2024-11-12', time: '7-8 pm', location: 'Richards Hall, Room 300', description: '' },
    { title: 'Optum/UHG Tech Talk', date: '2024-11-19', time: '7-8 pm', location: 'Richards Hall, Room 300', description: 'Are you interested in learning about co-op opportunities and daily life at Optum at the United Health Group? Join us to learn more about the company and what they do! Stop by to get free food and merch!' },
    { title: 'Letter to your 2025 Self + Networking', date: '2024-12-03', time: '7-8 pm', location: 'Richards Hall, Room 300', description: '' },
  ];

  const handleViewToggle = () => {
    setViewMode(viewMode === 'list' ? 'calendar' : 'list');
  };

  const handleDateClick = (date) => {
    const event = events.find(event => event.date === date.toISOString().split('T')[0]);
    if (event) {
      setSelectedEvent(event);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day); // Month is zero-based in JavaScript Date
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const today = new Date();
  const upcomingEvents = events.filter(event => new Date(event.date) >= today);
  const pastEvents = events.filter(event => new Date(event.date) < today);

  const renderEventsList = () => (
    <div className="events-list">
      <h2>Upcoming Events</h2>
      {upcomingEvents.map((event, index) => (
        <div key={index} className="event-item">
          <h3>{event.title}</h3>
          <p><strong>Date:</strong> {formatDate(event.date)}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p>{event.description}</p>
        </div>
      ))}
      <h2>Past Events</h2>
      {pastEvents.map((event, index) => (
        <div key={index} className="event-item">
          <h3>{event.title}</h3>
          <p><strong>Date:</strong> {formatDate(event.date)}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );

  const renderCalendarView = () => (
    <Calendar
      onClickDay={handleDateClick}
      value={selectedDate}
      tileContent={({ date, view }) => {
        if (view === 'month') {
          const event = events.find(event => event.date === date.toISOString().split('T')[0]);
          return event ? <div className="event-indicator"></div> : null;  
        }
        return null;
      }}
      tileClassName={({ date, view }) => {
        const hasEvent = events.some(event => event.date === date.toISOString().split('T')[0]);
        return hasEvent ? 'react-calendar__tile--hasEvent' : null;
      }}
    />
  );
  

  return (
    <div className='whole-calendar'>
    <div className="calendar-title">
        <h1>CALENDAR</h1>
      </div> 
    <div className="calendar-page">
      <div className="header">
           <div className="view-toggle">
          <label className="toggle-switch">
            <input type="checkbox" onChange={handleViewToggle} checked={viewMode === 'calendar'} />
            <span className="slider"></span>
          </label>
          <span className="toggle-label">{viewMode === 'list' ? 'Calendar View' : 'List View'}</span>
        </div>
      </div>

      {viewMode === 'list' ? renderEventsList() : renderCalendarView()}

      {isModalOpen && selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <h3>{selectedEvent.title}</h3>
            <p><strong>Date:</strong> {formatDate(selectedEvent.date)}</p>
            <p><strong>Time:</strong> {selectedEvent.time}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p>{selectedEvent.description}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default CalendarPage;