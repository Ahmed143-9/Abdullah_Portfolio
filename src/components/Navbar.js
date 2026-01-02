import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    // If we're on home page
    if (location.pathname === '/') {
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
        closeMobileMenu();
      }
    } else {
      // If we're on another page, navigate to home with hash
      navigate(`/${href}`);
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
    }
  };

  return (
    <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <button 
          className="mobile-menu-toggle" 
          aria-label="Toggle navigation menu"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className="nav-logo">
          <div className="logo-border-top"></div>
          <div className="logo-stars">★★★★★</div>
          <div className="logo-content">
            <div className="logo-names">
              <Link to="/" className="logo-link" onClick={handleLogoClick}>
                <span className="logo-trump">KAZI'S</span>
                <span className="logo-vance">VANCE</span>
              </Link>
            </div>
            <div className="logo-tagline"> AV TECH PERFORMANCE GREAT!</div>
          </div>
          <div className="logo-year">2026</div>
          <div className="logo-border-bottom"></div>
        </div>
        
        <div className="nav-links">
          <a 
            href="#platform" 
            className="nav-link" 
            onClick={(e) => scrollToSection(e, '#platform')}
          >
            PLATFORM
          </a>
          <a 
            href="#news" 
            className="nav-link" 
            onClick={(e) => scrollToSection(e, '#news')}
          >
            NEWS
          </a>
          <a 
            href="#gallery" 
            className="nav-link" 
            onClick={(e) => scrollToSection(e, '#gallery')}
          >
            GALLERY
          </a>
          <a 
            href="#events" 
            className="nav-link" 
            onClick={(e) => scrollToSection(e, '#events')}
          >
            EVENTS
          </a>
          <Link to="/get-involved" className="nav-link">GET INVOLVED</Link>
        </div>
        
        <div className="nav-actions">
          <a 
            href="#donation" 
            className="btn-nav btn-contribute" 
            onClick={(e) => scrollToSection(e, '#donation')}
          >
            DONATION
          </a>
          <a 
            href="#shop" 
            className="btn-nav btn-shop-nav" 
            onClick={(e) => scrollToSection(e, '#shop')}
          >
            SHOP
          </a>
        </div>
      </div>
      
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-links">
          <a 
            href="#platform" 
            className="nav-link" 
            onClick={(e) => scrollToSection(e, '#platform')}
          >
            PLATFORM
          </a>
          <a 
            href="#news" 
            className="nav-link" 
            onClick={(e) => scrollToSection(e, '#news')}
          >
            NEWS
          </a>
          <a 
            href="#gallery" 
            className="nav-link" 
            onClick={(e) => scrollToSection(e, '#gallery')}
          >
            GALLERY
          </a>
          <a 
            href="#events" 
            className="nav-link" 
            onClick={(e) => scrollToSection(e, '#events')}
          >
            EVENTS
          </a>
          <Link 
            to="/get-involved" 
            className="nav-link" 
            onClick={closeMobileMenu}
          >
            GET INVOLVED
          </Link>
          <a 
            href="#donation" 
            className="btn-nav btn-contribute" 
            onClick={(e) => scrollToSection(e, '#donation')}
          >
            DONATION
          </a>
          <a 
            href="#shop" 
            className="btn-nav btn-shop-nav" 
            onClick={(e) => scrollToSection(e, '#shop')}
          >
            SHOP
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;