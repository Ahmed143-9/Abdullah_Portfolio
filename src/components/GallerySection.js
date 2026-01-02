import { useState } from 'react';
import './GallerySection.css';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showAllImages, setShowAllImages] = useState(false); // New state for show all

  // All 50 gallery images
  const galleryImages = [
    { id: 1, image: 'v1.jpg', category: 'events', title: 'AV Tech Conference 2024' },
    { id: 2, image: 'v2.jpg', category: 'awards', title: 'Innovation Awards Ceremony' },
    { id: 3, image: 'v3.jpg', category: 'workshops', title: 'Audio Workshop Session' },
    { id: 4, image: 'v4.jpg', category: 'events', title: 'Integration Summit' },
    { id: 5, image: 'v5.jpg', category: 'products', title: 'Product Launch Event' },
    { id: 6, image: 'v6.jpg', category: 'events', title: 'Tech Expo Exhibition' },
    { id: 7, image: 'v7.jpg', category: 'training', title: 'Smart Home Training' },
    { id: 8, image: 'v8.jpg', category: 'panels', title: 'Education Panel Discussion' },
    { id: 9, image: 'v9.jpg', category: 'networking', title: 'Professional Networking Mixer' },
    { id: 10, image: 'v10.jpg', category: 'case-study', title: 'Stadium AV Systems' },
    { id: 11, image: 'v11.jpg', category: 'events', title: 'Digital Signage Expo' },
    { id: 12, image: 'v12.jpg', category: 'workshops', title: 'Professional Audio Workshop' },
    { id: 13, image: 'v13.jpg', category: 'events', title: 'Annual Technology Summit' },
    { id: 14, image: 'v14.jpg', category: 'products', title: 'New Product Showcase' },
    { id: 15, image: 'v15.jpg', category: 'training', title: 'Advanced Training Session' },
    { id: 16, image: 'v16.jpg', category: 'networking', title: 'Industry Networking Event' },
    { id: 17, image: 'v17.jpg', category: 'workshops', title: 'Technical Workshop' },
    { id: 18, image: 'v18.jpg', category: 'events', title: 'Technology Conference' },
    { id: 19, image: 'v19.jpg', category: 'awards', title: 'Excellence Awards Night' },
    { id: 20, image: 'v20.jpg', category: 'panels', title: 'Industry Expert Panel' },
    { id: 21, image: 'v21.jpg', category: 'events', title: 'Annual Gathering' },
    { id: 22, image: 'v22.jpg', category: 'training', title: 'Certification Training' },
    { id: 23, image: 'v23.jpg', category: 'products', title: 'Innovation Showcase' },
    { id: 24, image: 'v24.jpg', category: 'networking', title: 'Community Meetup' },
    { id: 25, image: 'v25.jpg', category: 'workshops', title: 'Hands-on Workshop' },
    { id: 26, image: 'v26.jpg', category: 'events', title: 'Grand Technology Event' },
    { id: 27, image: 'v27.jpg', category: 'events', title: 'Regional Tech Conference' },
    { id: 28, image: 'v28.jpg', category: 'training', title: 'Installation Training Program' },
    { id: 29, image: 'v29.jpg', category: 'products', title: 'Latest Product Demo' },
    { id: 30, image: 'v30.jpg', category: 'workshops', title: 'Video Production Workshop' },
    { id: 31, image: 'v31.jpg', category: 'networking', title: 'Business Networking Session' },
    { id: 32, image: 'v32.jpg', category: 'events', title: 'Industry Trade Show' },
    { id: 33, image: 'v33.jpg', category: 'panels', title: 'Technology Trends Panel' },
    { id: 34, image: 'v34.jpg', category: 'awards', title: 'Partner Recognition Awards' },
    { id: 35, image: 'v35.jpg', category: 'training', title: 'Technical Certification Course' },
    { id: 36, image: 'v36.jpg', category: 'events', title: 'Corporate Technology Summit' },
    { id: 37, image: 'v37.jpg', category: 'workshops', title: 'Lighting Design Workshop' },
    { id: 38, image: 'v38.jpg', category: 'case-study', title: 'Corporate Installation Case' },
    { id: 39, image: 'v39.jpg', category: 'products', title: 'New Technology Unveiling' },
    { id: 40, image: 'v40.jpg', category: 'networking', title: 'Industry Professionals Meetup' },
    { id: 41, image: 'v41.jpg', category: 'events', title: 'International AV Expo' },
    { id: 42, image: 'v42.jpg', category: 'training', title: 'Advanced System Integration' },
    { id: 43, image: 'v43.jpg', category: 'workshops', title: 'Control System Programming' },
    { id: 44, image: 'v44.jpg', category: 'panels', title: 'Future of AV Technology' },
    { id: 45, image: 'v45.jpg', category: 'awards', title: 'Innovation Excellence Awards' },
    { id: 46, image: 'v46.jpg', category: 'events', title: 'Annual Business Conference' },
    { id: 47, image: 'v47.jpg', category: 'products', title: 'Product Portfolio Showcase' },
    { id: 48, image: 'v48.jpg', category: 'networking', title: 'Executive Networking Event' },
    { id: 49, image: 'v49.jpg', category: 'case-study', title: 'Education Sector Solutions' },
    { id: 50, image: 'v50.jpg', category: 'events', title: 'Year-End Technology Gala' }
  ];

  const categories = [
    { id: 'all', name: 'All Images' },
    { id: 'events', name: 'Events' },
    { id: 'workshops', name: 'Workshops' },
    { id: 'awards', name: 'Awards' },
    { id: 'products', name: 'Products' },
    { id: 'training', name: 'Training' },
    { id: 'networking', name: 'Networking' },
    { id: 'panels', name: 'Panels' },
    { id: 'case-study', name: 'Case Studies' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  // Show only 4 images initially, or all if showAllImages is true
  const displayedImages = showAllImages ? filteredImages : filteredImages.slice(0, 4);

  const getImagePath = (imageName) => {
    try {
      return require(`../image/${imageName}`);
    } catch (err) {
      return `${process.env.PUBLIC_URL}/image/${imageName}`;
    }
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleViewMore = () => {
    setShowAllImages(true);
    // Smooth scroll to gallery section after expanding
    setTimeout(() => {
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleViewLess = () => {
    setShowAllImages(false);
    // Scroll back to top of gallery
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <h1>Our Gallery</h1>
        <p className="gallery-description">
          Explore our collection of memorable moments from events, workshops, awards ceremonies, 
          and technology showcases. Browse through our visual journey of innovation and excellence.
        </p>

        <div className="gallery-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-button ${filter === cat.id ? 'active' : ''}`}
              onClick={() => {
                setFilter(cat.id);
                setShowAllImages(false); // Reset to show only 4 when filter changes
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-grid">
        {displayedImages.map(item => (
          <div 
            key={item.id} 
            className="gallery-item"
            onClick={() => openLightbox(item)}
          >
            <div className="gallery-image-wrapper">
              <img 
                src={getImagePath(item.image)} 
                alt={item.title}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>{item.title}</h3>
                  <span className="gallery-category">{item.category}</span>
                </div>
                <div className="gallery-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="no-results">
          <p>No images found in this category.</p>
        </div>
      )}

      {/* Show View More/View Less buttons */}
      {filteredImages.length > 4 && (
        <div className="view-toggle-buttons">
          {!showAllImages ? (
            <button className="btn-view-more" onClick={handleViewMore}>
              View More
            </button>
          ) : (
            <button className="btn-view-less" onClick={handleViewLess}>
              View Less
            </button>
          )}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            &times;
          </button>
          
          <button 
            className="lightbox-nav lightbox-prev" 
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            &#8249;
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={getImagePath(selectedImage.image)} 
              alt={selectedImage.title}
            />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <span className="lightbox-category">{selectedImage.category}</span>
            </div>
          </div>
          
          <button 
            className="lightbox-nav lightbox-next" 
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            &#8250;
          </button>
        </div>
      )}

      <div className="gallery-footer">
        <p>Showing {displayedImages.length} of {filteredImages.length} images in "{categories.find(c => c.id === filter)?.name}" category</p>
        <button className="btn-reset-filter" onClick={() => {
          setFilter('all');
          setShowAllImages(false);
        }}>
          Reset Filter
        </button>
      </div>
    </section>
  );
};

export default GallerySection;