import { useState, useEffect } from 'react';
import './VanceStyles.css';

// Import components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlatformSection from './components/PlatformSection';
import VoiceSection from './components/VoiceSection';
import NewsSection from './components/NewsSection';
import ShopSection from './components/ShopSection';
import JoinSection from './components/JoinSection';
import DonationSection from './components/DonationSection';
import Footer from './components/Footer';
import Popup from './components/Popup';

function App() {
  const [showChristmasPopup, setShowChristmasPopup] = useState(false);
  const [showContributePopup, setShowContributePopup] = useState(false);
  
  useEffect(() => {
    // Show Christmas popup after a delay
    const christmasTimer = setTimeout(() => {
      if (!localStorage.getItem('christmasPopupShown')) {
        setShowChristmasPopup(true);
      }
    }, 2000);
    
    // Show contribute popup after a delay
    const contributeTimer = setTimeout(() => {
      if (!localStorage.getItem('contributePopupShown')) {
        setShowContributePopup(true);
      }
    }, 5000);
    
    return () => {
      clearTimeout(christmasTimer);
      clearTimeout(contributeTimer);
    };
  }, []);
  
  const closeChristmasPopup = () => {
    setShowChristmasPopup(false);
    localStorage.setItem('christmasPopupShown', 'true');
  };
  
  const closeContributePopup = () => {
    setShowContributePopup(false);
    localStorage.setItem('contributePopupShown', 'true');
  };
  
  return (
    <div className="App">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      {/* Top Banner */}
      <div className="top-banner">
        <p><strong>TEXT KAZI TO 88022!</strong></p>
      </div>
      
      <Navbar />
      
      <main id="main-content">
        <HeroSection />
        <PlatformSection />
        <VoiceSection />
        <NewsSection />
        <div className="watch-more">
          <a href="#videos" className="btn">Watch More Videos</a>
        </div>
        <ShopSection />
        <DonationSection />
        <JoinSection />
        <Footer />
      </main>
      
      <Popup 
        id="popup-christmas" 
        show={showChristmasPopup} 
        onClose={closeChristmasPopup}
        title="WAIT!"
        subtitle="Get ahead on your MAGA Christmas Shopping!"
        description="Check out my MAGA CHRISTMAS MERCH SALE happening right now."
        isChristmas={true}
      />
      
      <Popup 
        id="popup-contribute" 
        show={showContributePopup} 
        onClose={closeContributePopup}
        title="I'll never stop"
        subtitle="Fighting for you!"
        description="Contribute Today:"
        isContribute={true}
      />
    </div>
  );
}

export default App;
