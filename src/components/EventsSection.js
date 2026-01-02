import { useState } from 'react';
import './EventsSection.css';

// Add these new styles to EventsSection.css
// .featured-grid-no-images - grid without image constraints
// .featured-event-card-no-image - card layout without images
// .event-badge-top - category badge at top
// .modal-header-no-image - modal header without image background

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const featuredEvents = [
    {
      id: 101,
      title: "AV TECH Annual Conference",
      date: "2025-06-15",
      endDate: "2025-06-17",
      time: "9:00 AM - 6:00 PM",
      location: "New York Convention Center",
      description: "Join industry leaders for three days of innovation, networking, and cutting-edge technology demonstrations. This year's theme is 'The Future of Immersive Experiences' featuring keynote speeches, workshops, and exhibition halls.",
      speakers: ["Kazi Abdullah", "Sarah Johnson", "Michael Chen", "Dr. Emily Rodriguez"],
      capacity: 1200,
      registered: 850,
      price: "$299-$899",
      category: "Conference",
      tags: ["Networking", "Workshops", "Exhibition", "Keynote"]
    },
    {
      id: 102,
      title: "Tech Innovation Awards",
      date: "2025-05-20",
      time: "7:00 PM - 11:00 PM",
      location: "Silicon Valley Auditorium",
      description: "Celebrate excellence in AV technology innovation. Black-tie optional event with dinner, awards ceremony, and after-party. Network with industry pioneers and see the latest groundbreaking technologies.",
      speakers: ["Mark Thompson", "Lisa Wang", "Robert Garcia"],
      capacity: 500,
      registered: 420,
      price: "$199",
      category: "Awards",
      tags: ["Awards", "Gala", "Networking"]
    },
    {
      id: 103,
      title: "Advanced Audio Workshop",
      date: "2025-04-10",
      time: "10:00 AM - 4:00 PM",
      location: "Online & Boston Tech Hub",
      description: "Hands-on training session covering the latest audio processing technologies, room calibration techniques, and system optimization. Perfect for audio engineers and system integrators.",
      speakers: ["Audio Expert James Wilson", "Sound Engineer Maria Lopez"],
      capacity: 100,
      registered: 95,
      price: "$149",
      category: "Workshop",
      tags: ["Training", "Hands-on", "Technical"]
    },
    {
      id: 104,
      title: "AV Integration Summit",
      date: "2025-03-22",
      endDate: "2025-03-24",
      time: "8:00 AM - 5:00 PM",
      location: "Chicago Marriott",
      description: "Industry leaders discuss the future of AV integration in commercial and residential spaces. Three-day summit with panels, demonstrations, and networking opportunities.",
      speakers: ["David Brown", "Jennifer Lee", "Tom Anderson"],
      capacity: 800,
      registered: 650,
      price: "$399",
      category: "Summit",
      tags: ["Integration", "Business", "Technology"]
    },
    {
      id: 105,
      title: "Digital Signage Expo",
      date: "2025-09-12",
      endDate: "2025-09-14",
      time: "9:00 AM - 6:00 PM",
      location: "Orlando Convention Center",
      description: "Explore the latest in digital signage technology and creative content solutions. Exhibition featuring 300+ vendors and live demonstrations.",
      speakers: ["Alex Martinez", "Sophia Chen", "James Wilson"],
      capacity: 2000,
      registered: 1500,
      price: "$199-$499",
      category: "Exhibition",
      tags: ["Digital Signage", "Content", "Innovation"]
    },
    {
      id: 106,
      title: "Smart Home Technology Training",
      date: "2025-07-18",
      time: "10:00 AM - 3:00 PM",
      location: "Online Webinar",
      description: "Certification training for installing and configuring smart home AV solutions. Learn about the latest automation technologies and best practices.",
      speakers: ["Tech Instructor Sarah Miller"],
      capacity: 200,
      registered: 180,
      price: "$99",
      category: "Training",
      tags: ["Smart Home", "Certification", "Online"]
    }
  ];

  const eventCalendar = [
    { date: "2025-01-15", eventId: 7, title: "Smart Home Training" },
    { date: "2025-02-28", eventId: 5, title: "Product Launch" },
    { date: "2025-03-22", eventId: 104, title: "AV Integration Summit" },
    { date: "2025-04-10", eventId: 103, title: "Audio Workshop" },
    { date: "2025-05-20", eventId: 102, title: "Innovation Awards" },
    { date: "2025-05-30", eventId: 9, title: "Networking Mixer" },
    { date: "2025-06-15", eventId: 101, title: "Annual Conference" },
    { date: "2025-07-08", eventId: 6, title: "AV Tech Expo" },
    { date: "2025-07-18", eventId: 106, title: "Smart Home Training" },
    { date: "2025-08-05", eventId: 8, title: "Education Panel" },
    { date: "2025-09-12", eventId: 105, title: "Digital Signage Expo" }
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentDate = new Date();
  const currentMonth = months[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleRegister = (eventId) => {
    alert(`Registration for Event ${eventId} - Thank you for your interest!`);
  };

  return (
    <section id="events" className="events-section">
      <div className="events-header">
        <h1>Events Calendar</h1>
        <p className="page-description">
          Explore our upcoming events, conferences, workshops, and networking opportunities. 
          Join the AV TECH community and stay at the forefront of technology innovation.
        </p>
        
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>
            </svg>
            Grid View
          </button>
          <button 
            className={`toggle-btn ${viewMode === 'calendar' ? 'active' : ''}`}
            onClick={() => setViewMode('calendar')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9h18V7H3v2zm12-5h-6V2h-2v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2V2h-2v2zM5 20V10h14v10H5z"/>
            </svg>
            Calendar View
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <>
          <div className="featured-events">
            <h2>Featured Events</h2>
            <div className="featured-grid-no-images">
              {featuredEvents.map(event => (
                <div key={event.id} className="featured-event-card-no-image">
                  <div className="event-badge-top">{event.category}</div>
                  <div className="featured-content">
                    <h3>{event.title}</h3>
                    <div className="event-info">
                      <div className="info-row">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9h18V7H3v2zm12-5h-6V2h-2v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2V2h-2v2zM5 20V10h14v10H5z"/>
                        </svg>
                        <span>{event.date} {event.endDate ? `to ${event.endDate}` : ''}</span>
                      </div>
                      <div className="info-row">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      <div className="info-row">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 6v6l4 2"/>
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      {/* <div className="info-row">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 1v22M5 6h14M5 12h14M5 18h14"/>
                        </svg>
                        <span>Price: {event.price}</span>
                      </div> */}
                    </div>
                    <p className="event-description">{event.description}</p>
                    
                    <div className="progress-container">
                      <div className="progress-label">
                        <span>Registration: {event.registered}/{event.capacity}</span>
                        <span>{Math.round((event.registered / event.capacity) * 100)}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{width: `${(event.registered / event.capacity) * 100}%`}}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="event-tags">
                      {event.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    
                    <div className="event-actions">
                      <button 
                        className="btn-details"
                        onClick={() => handleEventSelect(event)}
                      >
                        View Details
                      </button>
                      <button 
                        className="btn-register"
                        onClick={() => handleRegister(event.id)}
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="event-calendar-preview">
            <h2>Event Calendar: {currentMonth} {currentYear}</h2>
            <div className="calendar-grid">
              {eventCalendar
                .filter(event => new Date(event.date).getMonth() === currentDate.getMonth())
                .map(event => (
                  <div key={event.eventId} className="calendar-event">
                    <div className="calendar-date">
                      {new Date(event.date).getDate()}
                      <span>{months[new Date(event.date).getMonth()].substring(0, 3)}</span>
                    </div>
                    <div className="calendar-info">
                      <h4>{event.title}</h4>
                      <button 
                        className="btn-calendar-details"
                        onClick={() => {
                          const foundEvent = featuredEvents.find(e => e.id === event.eventId);
                          if (foundEvent) handleEventSelect(foundEvent);
                        }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : (
        <div className="calendar-full-view">
          <h2>Full Event Calendar</h2>
          <div className="full-calendar">
            {months.map((month, index) => {
              const monthEvents = eventCalendar.filter(
                event => new Date(event.date).getMonth() === index
              );
              
              if (monthEvents.length === 0) return null;
              
              return (
                <div key={month} className="calendar-month">
                  <h3>{month} {currentYear}</h3>
                  <div className="month-events">
                    {monthEvents.map(event => (
                      <div key={`${month}-${event.eventId}`} className="month-event">
                        <div className="event-day">{new Date(event.date).getDate()}</div>
                        <div className="event-title">{event.title}</div>
                        <button 
                          className="btn-quick-view"
                          onClick={() => {
                            const foundEvent = featuredEvents.find(e => e.id === event.eventId);
                            if (foundEvent) handleEventSelect(foundEvent);
                          }}
                        >
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {selectedEvent && (
        <div className="event-modal" onClick={() => setSelectedEvent(null)}>
          <div className="event-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedEvent(null)}>
              &times;
            </button>
            
            <div className="modal-header-no-image">
              <div className="modal-title-section">
                <h2>{selectedEvent.title}</h2>
                <div className="modal-meta">
                  <span className="modal-category">{selectedEvent.category}</span>
                  <span className="modal-date">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9h18V7H3v2zm12-5h-6V2h-2v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2V2h-2v2zM5 20V10h14v10H5z"/>
                    </svg>
                    {selectedEvent.date} {selectedEvent.endDate ? `- ${selectedEvent.endDate}` : ''}
                  </span>
                  <span className="modal-time">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    {selectedEvent.time}
                  </span>
                  <span className="modal-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                    </svg>
                    {selectedEvent.location}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="modal-body">
              <div className="modal-description">
                <h3>Event Description</h3>
                <p>{selectedEvent.description}</p>
              </div>
              
              {selectedEvent.speakers && (
                <div className="modal-speakers">
                  <h3>Featured Speakers</h3>
                  <div className="speakers-list">
                    {selectedEvent.speakers.map((speaker, index) => (
                      <div key={index} className="speaker-item">
                        <div className="speaker-avatar">
                          {speaker.charAt(0)}
                        </div>
                        <span>{speaker}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="modal-registration">
                <h3>Registration Information</h3>
                <div className="registration-details">
                  <div className="detail-item">
                    <strong>Price:</strong> {selectedEvent.price}
                  </div>
                  <div className="detail-item">
                    <strong>Capacity:</strong> {selectedEvent.capacity} attendees
                  </div>
                  <div className="detail-item">
                    <strong>Registered:</strong> {selectedEvent.registered} attendees
                  </div>
                  <div className="detail-item">
                    <strong>Available Spots:</strong> {selectedEvent.capacity - selectedEvent.registered} remaining
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button 
                    className="btn-register-now"
                    onClick={() => handleRegister(selectedEvent.id)}
                  >
                    Register Now
                  </button>
                  <button 
                    className="btn-add-calendar"
                    onClick={() => alert('Event added to your calendar!')}
                  >
                    Add to Calendar
                  </button>
                  <button 
                    className="btn-share"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Event link copied to clipboard!');
                    }}
                  >
                    Share Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="events-footer">
        <div className="footer-section">
          <h3>Host Your Event With Us</h3>
          <p>Interested in hosting an AV TECH event? Contact our events team for partnerships and sponsorships.</p>
          <button className="btn-contact" onClick={() => alert('Events team will contact you soon!')}>
            Contact Events Team
          </button>
        </div>
        
        <div className="footer-section">
          <h3>Subscribe to Event Updates</h3>
          <p>Get notified about upcoming events, early bird discounts, and special announcements.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your email address" />
            <button 
              className="btn-subscribe"
              onClick={() => alert('Successfully subscribed to event updates!')}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;