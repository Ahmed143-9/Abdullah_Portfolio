import React, { useState } from 'react';

const PlatformSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="platform" className="platform-section" style={{
      padding: '80px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
      backgroundColor: '#f8f8f8'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#C41E3A',
          marginBottom: '30px',
          fontWeight: '700'
        }}>
          Our Technology Platform
        </h2>
        
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          marginBottom: '30px'
        }}>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#333',
            marginBottom: '25px',
            textAlign: 'left'
          }}>
            At <strong>AV TECH</strong>, we are pioneering the future of audio-visual technology through 
            innovative solutions that enhance communication, entertainment, and productivity. Our platform 
            integrates cutting-edge hardware with intelligent software to deliver seamless experiences 
            across various environments.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px',
            marginBottom: '30px'
          }}>
            <div style={{
              padding: '20px',
              backgroundColor: '#f9f9f9',
              borderRadius: '6px',
              borderLeft: '4px solid #C41E3A'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#C41E3A',
                marginBottom: '10px'
              }}>
                Smart AV Solutions
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                lineHeight: '1.6'
              }}>
                Intelligent systems for homes, offices, and commercial spaces with automated controls 
                and seamless integration.
              </p>
            </div>
            
            <div style={{
              padding: '20px',
              backgroundColor: '#f9f9f9',
              borderRadius: '6px',
              borderLeft: '4px solid #C41E3A'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#C41E3A',
                marginBottom: '10px'
              }}>
                Professional Audio Systems
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                lineHeight: '1.6'
              }}>
                High-fidelity sound solutions for theaters, conference rooms, and entertainment venues 
                with crystal clear audio quality.
              </p>
            </div>
            
            <div style={{
              padding: '20px',
              backgroundColor: '#f9f9f9',
              borderRadius: '6px',
              borderLeft: '4px solid #C41E3A'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#C41E3A',
                marginBottom: '10px'
              }}>
                Video Display Technology
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                lineHeight: '1.6'
              }}>
                Advanced display solutions including LED walls, interactive screens, and projection 
                systems for immersive visual experiences.
              </p>
            </div>
          </div>
          
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#333',
            marginBottom: '30px',
            textAlign: 'left'
          }}>
            Our commitment extends beyond technology to exceptional customer support, training programs, 
            and ongoing innovation. We continuously research and develop new solutions to stay at the 
            forefront of the AV industry, ensuring our clients always have access to the latest advancements.
          </p>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={scrollToGallery}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              padding: '12px 35px',
              backgroundColor: isHovered ? '#C41E3A' : 'transparent',
              border: '2px solid #C41E3A',
              borderRadius: '30px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: isHovered ? '#ffffff' : '#C41E3A'
            }}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={isHovered ? '#ffffff' : '#C41E3A'} 
              strokeWidth="2"
              style={{ transition: 'stroke 0.3s ease' }}
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
            </svg>
            See Our Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;