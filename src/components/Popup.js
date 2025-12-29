import { useEffect } from 'react';

const Popup = ({ id, show, onClose, title, subtitle, description, isChristmas, isContribute }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  if (!show) return null;

  const handleClose = () => {
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="popup active" onClick={handleOverlayClick}>
      <div className="popup-content">
        <button className="popup-close" onClick={handleClose}>&times;</button>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <h4>{description}</h4>
        {isChristmas && (
          <a href="#donation" className="btn btn-shop" onClick={handleClose}>DONATE NOW</a>
        )}
        {isContribute && (
          <div className="contribute-amounts">
            <button className="amount-btn" onClick={() => alert('$20.24 selected')}>$20.24</button>
            <button className="amount-btn" onClick={() => alert('$47 selected')}>$47</button>
            <button className="amount-btn" onClick={() => alert('$100 selected')}>$100</button>
            <button className="amount-btn" onClick={() => alert('$250 selected')}>$250</button>
            <button className="amount-btn" onClick={() => alert('$500 selected')}>$500</button>
            <button className="amount-btn" onClick={() => alert('Other amount selected')}>OTHER</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;