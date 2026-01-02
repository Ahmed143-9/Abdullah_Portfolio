import { useState } from 'react';
import './EventNewsSection.css';

const EventNewsSection = () => {
  const eventNewsItems = [
    {
      id: 1,
      title: "AV TECH Conference 2025 Announced",
      date: "June 15-17, 2025",
      location: "New York Convention Center",
      summary: "Join us for the biggest AV technology conference of the year featuring cutting-edge innovations and networking opportunities.",
      image: "g1.jpg",
      category: "Conference",
      status: "Upcoming"
    },
    {
      id: 2,
      title: "Tech Innovation Awards Ceremony",
      date: "May 20, 2025",
      location: "Silicon Valley Auditorium",
      summary: "Celebrating the most innovative AV tech solutions and companies making a difference in the industry.",
      image: "g2.jpg",
      category: "Awards",
      status: "Upcoming"
    },
    {
      id: 3,
      title: "Workshop: Advanced Audio Systems",
      date: "April 10, 2025",
      location: "Online & Boston Tech Hub",
      summary: "Hands-on workshop covering the latest audio technology and implementation strategies.",
      image: "g3.jpg",
      category: "Workshop",
      status: "Past"
    },
    {
      id: 4,
      title: "AV Integration Summit",
      date: "March 22-24, 2025",
      location: "Chicago Marriott",
      summary: "Industry leaders discuss the future of AV integration in commercial and residential spaces.",
      image: "g4.jpg",
      category: "Summit",
      status: "Past"
    },
    {
      id: 5,
      title: "Product Launch: NextGen AV Processor",
      date: "February 28, 2025",
      location: "Las Vegas Convention Center",
      summary: "Live demonstration of our revolutionary new AV processor with AI capabilities.",
      image: "g5.jpg",
      category: "Product Launch",
      status: "Past"
    },
    {
      id: 6,
      title: "AV Tech Expo 2025",
      date: "July 8-12, 2025",
      location: "Los Angeles Convention Center",
      summary: "The largest exhibition of AV technology in North America with 500+ exhibitors.",
      image: "g6.jpg",
      category: "Exhibition",
      status: "Upcoming"
    },
    {
      id: 7,
      title: "Training: Smart Home AV Systems",
      date: "January 15, 2025",
      location: "Online",
      summary: "Certification training for installing and configuring smart home AV solutions.",
      image: "g7.jpg",
      category: "Training",
      status: "Past"
    },
    {
      id: 8,
      title: "Industry Panel: Future of AV in Education",
      date: "August 5, 2025",
      location: "Washington DC University",
      summary: "Education and technology experts discuss how AV is transforming learning environments.",
      image: "g8.jpg",
      category: "Panel Discussion",
      status: "Upcoming"
    },
    {
      id: 9,
      title: "Networking Mixer for AV Professionals",
      date: "May 30, 2025",
      location: "Miami Beach Hotel",
      summary: "Connect with fellow AV professionals, share experiences, and build valuable relationships.",
      image: "g9.jpg",
      category: "Networking",
      status: "Upcoming"
    },
    {
      id: 10,
      title: "Case Study Presentation: Stadium AV Systems",
      date: "December 10, 2024",
      location: "Texas Stadium Complex",
      summary: "Detailed presentation on implementing massive AV systems in sports arenas.",
      image: "g10.jpg",
      category: "Case Study",
      status: "Past"
    },
    {
      id: 11,
      title: "Digital Signage Expo",
      date: "September 12-14, 2025",
      location: "Orlando Convention Center",
      summary: "Explore the latest in digital signage technology and creative content solutions.",
      image: "g11.jpg",
      category: "Exhibition",
      status: "Upcoming"
    },
    {
      id: 12,
      title: "Professional Audio Workshop",
      date: "November 5, 2024",
      location: "Nashville Music Center",
      summary: "Advanced techniques in professional audio mixing and sound engineering.",
      image: "g12.jpg",
      category: "Workshop",
      status: "Past"
    }
  ];

  const [filter, setFilter] = useState('all');

  const filteredEvents = filter === 'all' 
    ? eventNewsItems 
    : eventNewsItems.filter(event => event.status.toLowerCase() === filter);

  const getImagePath = (imageName) => {
    // If specific image exists, use it; otherwise use numbered images cyclically
    return `${process.env.PUBLIC_URL}/image/${imageName}`;
  };

  return (
    <section id="event-news" className="event-news-section">
      <div className="section-header">
        <h2>AV TECH Events & News</h2>
        <p className="section-subtitle">Stay updated with our latest events, conferences, and industry news</p>
        
        <div className="filter-controls">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Events
          </button>
          <button 
            className={`filter-btn ${filter === 'upcoming' ? 'active' : ''}`}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </button>
          <button 
            className={`filter-btn ${filter === 'past' ? 'active' : ''}`}
            onClick={() => setFilter('past')}
          >
            Past Events
          </button>
        </div>
      </div>

      <div className="event-news-grid">
        {filteredEvents.map(event => (
          <div key={event.id} className={`event-card ${event.status.toLowerCase()}`}>
            <div className="event-image">
              <img 
                src={getImagePath(event.image)} 
                alt={event.title}
                onError={(e) => {
                  e.target.onerror = null;
                  // Fallback to numbered images 1-26
                  const imageNumber = ((event.id - 1) % 26) + 1;
                  e.target.src = `${process.env.PUBLIC_URL}/image/g${imageNumber}.jpg`;
                }}
              />
              <span className={`event-status ${event.status.toLowerCase()}`}>
                {event.status}
              </span>
              <span className="event-category">{event.category}</span>
            </div>
            
            <div className="event-content">
              <h3>{event.title}</h3>
              <div className="event-meta">
                <div className="meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9h18V7H3v2zm12-5h-6V2h-2v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2V2h-2v2zM5 20V10h14v10H5z"/>
                  </svg>
                  <span>{event.date}</span>
                </div>
                <div className="meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                  <span>{event.location}</span>
                </div>
              </div>
              
              <p className="event-summary">{event.summary}</p>
              
              <div className="event-actions">
                <button className="btn-details">View Details</button>
                {event.status === 'Upcoming' && (
                  <button className="btn-register">Register Now</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-footer">
        <p>Want to host or sponsor an event? <a href="#contact">Contact our events team</a></p>
        <button className="btn-view-all">View All Events</button>
      </div>
    </section>
  );
};

export default EventNewsSection;