const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-links-footer">
          <a href="#" className="social-link">Go to Truth Social Page</a>
          <a href="#" className="social-link">Go to Rumble Page</a>
          <a href="#" className="social-link">Go to Twitter Page</a>
        </div>
      </div>
      <div className="footer-legal">
        <p>Paid for by Never Surrender, Inc. and not authorized by any candidate or candidate's committee.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#press">Press</a>
          <a href="#careers">Careers</a>
          <a href="#powered">Powered by Nucleus</a>
        </div>
        <p className="footer-disclaimer">The appearance of U.S. Department of Defense personnel or other visual information does not imply or constitute DoD endorsement.</p>
      </div>
    </footer>
  );
};

export default Footer;