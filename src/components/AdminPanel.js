import { useState, useEffect } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('homepage');
  const [contentData, setContentData] = useState({});

  // Default admin credentials (you can change these)
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'avtech2024';

  // Load saved content from localStorage
  useEffect(() => {
    const savedContent = localStorage.getItem('avtech_content');
    if (savedContent) {
      setContentData(JSON.parse(savedContent));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      localStorage.setItem('admin_logged_in', 'true');
      setUsername('');
      setPassword('');
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('admin_logged_in');
  };

  const handleSaveContent = (section, field, value) => {
    const updatedData = {
      ...contentData,
      [section]: {
        ...contentData[section],
        [field]: value
      }
    };
    
    setContentData(updatedData);
    localStorage.setItem('avtech_content', JSON.stringify(updatedData));
    alert('Content saved successfully!');
  };

  const handleResetContent = () => {
    if (window.confirm('Are you sure? This will reset all content to default.')) {
      localStorage.removeItem('avtech_content');
      setContentData({});
      alert('Content reset to default!');
    }
  };

  // Check if user is already logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem('admin_logged_in');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="admin-login-container">
        <div className="login-box">
          <h2>AV TECH Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <div className="login-hint">
            <p>Default: <strong>admin / avtech2024</strong></p>
            <p>After login, use <strong>CTRL + K</strong> to open admin panel anytime</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2>AV TECH Admin Panel</h2>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <div className="admin-tabs">
        <button 
          className={`tab-btn ${activeTab === 'homepage' ? 'active' : ''}`}
          onClick={() => setActiveTab('homepage')}
        >
          Homepage
        </button>
        <button 
          className={`tab-btn ${activeTab === 'platform' ? 'active' : ''}`}
          onClick={() => setActiveTab('platform')}
        >
          Platform Section
        </button>
        <button 
          className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          Events
        </button>
        <button 
          className={`tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
          onClick={() => setActiveTab('gallery')}
        >
          Gallery
        </button>
        <button 
          className={`tab-btn ${activeTab === 'footer' ? 'active' : ''}`}
          onClick={() => setActiveTab('footer')}
        >
          Footer
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'homepage' && (
          <div className="content-section">
            <h3>Hero Section</h3>
            <div className="form-group">
              <label>Hero Title:</label>
              <textarea
                value={contentData.hero?.title || "THE GOLDEN AGE OF AV TECHNOLOGY BEGINS RIGHT NOW."}
                onChange={(e) => handleSaveContent('hero', 'title', e.target.value)}
                rows="3"
              />
            </div>
            <div className="form-group">
              <label>Hero Subtitle:</label>
              <input
                type="text"
                value={contentData.hero?.subtitle || "KAZI ABDULLAH AL MAMUN, Founder & CEO of AV TECH Group"}
                onChange={(e) => handleSaveContent('hero', 'subtitle', e.target.value)}
              />
            </div>
          </div>
        )}

        {activeTab === 'platform' && (
          <div className="content-section">
            <h3>Platform Section Content</h3>
            <div className="form-group">
              <label>Main Description:</label>
              <textarea
                value={contentData.platform?.description || "At AV TECH, we are pioneering the future of audio-visual technology through innovative solutions that enhance communication, entertainment, and productivity."}
                onChange={(e) => handleSaveContent('platform', 'description', e.target.value)}
                rows="4"
              />
            </div>
            
            <div className="form-group">
              <label>Feature 1 Title:</label>
              <input
                type="text"
                value={contentData.platform?.feature1Title || "Smart AV Solutions"}
                onChange={(e) => handleSaveContent('platform', 'feature1Title', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label>Feature 1 Description:</label>
              <textarea
                value={contentData.platform?.feature1Desc || "Intelligent systems for homes, offices, and commercial spaces with automated controls and seamless integration."}
                onChange={(e) => handleSaveContent('platform', 'feature1Desc', e.target.value)}
                rows="2"
              />
            </div>

            <div className="form-group">
              <label>Feature 2 Title:</label>
              <input
                type="text"
                value={contentData.platform?.feature2Title || "Professional Audio Systems"}
                onChange={(e) => handleSaveContent('platform', 'feature2Title', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label>Feature 2 Description:</label>
              <textarea
                value={contentData.platform?.feature2Desc || "High-fidelity sound solutions for theaters, conference rooms, and entertainment venues with crystal clear audio quality."}
                onChange={(e) => handleSaveContent('platform', 'feature2Desc', e.target.value)}
                rows="2"
              />
            </div>

            <div className="form-group">
              <label>Feature 3 Title:</label>
              <input
                type="text"
                value={contentData.platform?.feature3Title || "Video Display Technology"}
                onChange={(e) => handleSaveContent('platform', 'feature3Title', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label>Feature 3 Description:</label>
              <textarea
                value={contentData.platform?.feature3Desc || "Advanced display solutions including LED walls, interactive screens, and projection systems for immersive visual experiences."}
                onChange={(e) => handleSaveContent('platform', 'feature3Desc', e.target.value)}
                rows="2"
              />
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="content-section">
            <h3>Events Section</h3>
            <div className="form-group">
              <label>Events Title:</label>
              <input
                type="text"
                value={contentData.events?.title || "Events Calendar"}
                onChange={(e) => handleSaveContent('events', 'title', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Events Description:</label>
              <textarea
                value={contentData.events?.description || "Explore our upcoming events, conferences, workshops, and networking opportunities."}
                onChange={(e) => handleSaveContent('events', 'description', e.target.value)}
                rows="3"
              />
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="content-section">
            <h3>Gallery Section</h3>
            <div className="form-group">
              <label>Gallery Title:</label>
              <input
                type="text"
                value={contentData.gallery?.title || "Our Gallery"}
                onChange={(e) => handleSaveContent('gallery', 'title', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Gallery Description:</label>
              <textarea
                value={contentData.gallery?.description || "Explore our collection of memorable moments from events, workshops, awards ceremonies, and technology showcases."}
                onChange={(e) => handleSaveContent('gallery', 'description', e.target.value)}
                rows="3"
              />
            </div>
          </div>
        )}

        {activeTab === 'footer' && (
          <div className="content-section">
            <h3>Footer Content</h3>
            <div className="form-group">
              <label>Company Description:</label>
              <textarea
                value={contentData.footer?.description || "Leading the future of audio-visual technology with innovative solutions, exceptional quality, and unparalleled customer service since 2010."}
                onChange={(e) => handleSaveContent('footer', 'description', e.target.value)}
                rows="3"
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                value={contentData.footer?.phone || "+880 1234 567890"}
                onChange={(e) => handleSaveContent('footer', 'phone', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={contentData.footer?.email || "info@avtechgroup.com"}
                onChange={(e) => handleSaveContent('footer', 'email', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                value={contentData.footer?.address || "Mirpur, Dhaka, Bangladesh"}
                onChange={(e) => handleSaveContent('footer', 'address', e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      <div className="admin-footer">
        <button onClick={handleResetContent} className="reset-btn">
          Reset All Content to Default
        </button>
        <p className="admin-instructions">
          <strong>Instructions:</strong> Changes are saved automatically to localStorage. 
          To see changes, refresh the page after saving.
        </p>
      </div>
    </div>
  );
};

export default AdminPanel;