import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">✨</span>
            <span>India's #1 Smart Healthcare Platform</span>
          </div>
          
          <h1 className="hero-title">
            Smart Healthcare,
            <br />
            <span className="gradient-text">Simplified</span>
          </h1>
          
          <p className="hero-subtitle">
            Access quality healthcare anytime, anywhere. Book appointments, 
            track ambulances, and consult with top doctors instantly—all in one platform.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">
              Get Started Free
              <span className="btn-icon">→</span>
            </button>
            <button className="btn btn-secondary">
              Watch Demo
              <span className="btn-icon">▶</span>
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Happy Patients</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Expert Doctors</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-container">
            <div className="floating-card card-1">
              <span className="card-icon">🏥</span>
              <div>
                <p className="card-title">Quick Appointment</p>
                <p className="card-subtitle">Book in 2 minutes</p>
              </div>
            </div>
            
            <div className="floating-card card-2">
              <span className="card-icon">🚑</span>
              <div>
                <p className="card-title">Emergency Care</p>
                <p className="card-subtitle">Available 24/7</p>
              </div>
            </div>
            
            <div className="floating-card card-3">
              <span className="card-icon">💊</span>
              <div>
                <p className="card-title">Online Pharmacy</p>
                <p className="card-subtitle">Doorstep delivery</p>
              </div>
            </div>
            
            <div className="hero-illustration">
              <div className="illustration-circle"></div>
              <span className="illustration-emoji">🏥</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;