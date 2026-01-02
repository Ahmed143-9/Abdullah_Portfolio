const VoiceSection = () => {
  // Try multiple path options for the image
  const getImagePath = () => {
    try {
      // First try to import directly
      return require('../image/v.jpg');
    } catch (err) {
      // Fallback to public folder path
      return `${process.env.PUBLIC_URL}/image/v.jpg`;
    }
  };

  return (
    <section className="voice-section">
      <div className="voice-background">
        <img 
          src={getImagePath()} 
          alt="Our Mission Background" 
          className="voice-bg-image"
          onError={(e) => {
            console.error('Image failed to load:', e.target.src);
            // Try alternate path on error
            e.target.src = '/image/v.jpg';
          }}
        />
        <div className="voice-overlay"></div>
      </div>
      <div className="voice-content">
        <h2>My and <strong>Our motive</strong>. Client priority first!</h2>
      </div>
    </section>
  );
};

export default VoiceSection;