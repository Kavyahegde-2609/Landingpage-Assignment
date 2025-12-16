import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">💚</span>
              <span className="logo-text">HealthEase</span>
            </div>
            <p className="footer-description">
              Making healthcare accessible, affordable, and available for everyone.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <span>📘</span>
              </a>
              <a href="#" className="social-link">
                <span>📸</span>
              </a>
              <a href="#" className="social-link">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link">
                <span>💼</span>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Online Consultation</a></li>
              <li><a href="#services">Ambulance Tracking</a></li>
              <li><a href="#services">Appointments</a></li>
              <li><a href="#services">Lab Tests</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-links">
              <li>📧 support@healthease.com</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 Bengaluru, India</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © 2025 HealthEase. All rights reserved. | Built with React.js
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="divider">•</span>
            <a href="#">Terms of Service</a>
            <span className="divider">•</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;