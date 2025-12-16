import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <span className="about-badge">About HealthEase</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Revolutionizing Healthcare
              <br />
              <span className="gradient-text">For Everyone</span>
            </h2>
            <p className="about-description">
              HealthEase is India's leading smart healthcare platform, connecting millions 
              of patients with top-quality medical services. We believe healthcare should 
              be accessible, affordable, and available to everyone, everywhere.
            </p>
            <p className="about-description">
              Our mission is to leverage technology to bridge the gap between patients 
              and healthcare providers, making quality medical care just a click away. 
              With our comprehensive suite of services, we're transforming how Indians 
              access and experience healthcare.
            </p>
            
            <div className="about-features">
              <div className="about-feature">
                <span className="feature-check">✓</span>
                <span>Verified & Experienced Doctors</span>
              </div>
              <div className="about-feature">
                <span className="feature-check">✓</span>
                <span>Secure & Confidential</span>
              </div>
              <div className="about-feature">
                <span className="feature-check">✓</span>
                <span>Transparent Pricing</span>
              </div>
              <div className="about-feature">
                <span className="feature-check">✓</span>
                <span>Multi-language Support</span>
              </div>
            </div>
            
            <div className="about-buttons">
              <button className="btn btn-primary">Start Your Journey</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-grid">
              <div className="grid-item item-1">
                <span className="grid-emoji">👨‍⚕️</span>
                <p>Expert Care</p>
              </div>
              <div className="grid-item item-2">
                <span className="grid-emoji">💊</span>
                <p>Medication</p>
              </div>
              <div className="grid-item item-3">
                <span className="grid-emoji">📱</span>
                <p>Easy Access</p>
              </div>
              <div className="grid-item item-4">
                <span className="grid-emoji">🏥</span>
                <p>Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;