import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GetInvolvedPage.css';
import formImage from '../image/formimage.jpg'; // Image import করুন

const GetInvolvedPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'volunteer'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getInterestLabel = (value) => {
    const interests = {
      'volunteer': 'Volunteering',
      'partnership': 'Partnership',
      'career': 'Career Opportunities',
      'investment': 'Investment',
      'training': 'Training Programs',
      'other': 'Other'
    };
    return interests[value] || value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `
*AV TECH - GET INVOLVED*

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Interest: ${getInterestLabel(formData.interest)}
Message: ${formData.message || 'No message'}

Date: ${new Date().toLocaleDateString()}
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number
    const whatsappNumber = '821051426883';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    
    // Auto reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="get-involved-simple">
      <div 
        className="simple-container"
        style={{
          backgroundImage: `url(${formImage})`, // Imported image ব্যবহার করুন
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="form-overlay">
          <button onClick={handleGoBack} className="simple-back-button">
            ← Back to Home
          </button>
          
          <div className="simple-header">
            <h1>Get Involved</h1>
            <p className="simple-subtitle">
              Fill the form and connect via WhatsApp
            </p>
          </div>

          {isSubmitted && (
            <div className="simple-success">
              <div className="simple-success-icon">✓</div>
              <p>Message ready! Please send it on WhatsApp.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="simple-form">
            <div className="simple-form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name *"
                className="simple-input"
              />
            </div>

            <div className="simple-form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address *"
                className="simple-input"
              />
            </div>

            <div className="simple-form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number *"
                className="simple-input"
              />
            </div>

            <div className="simple-form-group">
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="simple-select"
              >
                <option value="volunteer">Volunteering</option>
                <option value="partnership">Partnership</option>
                <option value="career">Career</option>
                <option value="investment">Investment</option>
                <option value="training">Training</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="simple-form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Your message (optional)"
                className="simple-textarea"
              />
            </div>

            <button type="submit" className="simple-submit-button">
              Submit via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;