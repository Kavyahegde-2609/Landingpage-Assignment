import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Quick responses and instant connectivity"
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "End-to-end encryption for all your data"
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Access from any device, anywhere"
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Quality healthcare at transparent prices"
    },
    {
      icon: "🌟",
      title: "Expert Doctors",
      description: "Verified and experienced professionals"
    },
    {
      icon: "🕐",
      title: "24/7 Support",
      description: "Round-the-clock customer assistance"
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-header">
          <div className="features-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Why Choose HealthEase?
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>
              We combine cutting-edge technology with compassionate care to deliver 
              the best healthcare experience for you and your loved ones.
            </p>
          </div>
          
          <div className="features-visual">
            <div className="visual-circle circle-1"></div>
            <div className="visual-circle circle-2"></div>
            <div className="visual-circle circle-3"></div>
            <span className="visual-emoji">💚</span>
          </div>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon-wrapper">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;