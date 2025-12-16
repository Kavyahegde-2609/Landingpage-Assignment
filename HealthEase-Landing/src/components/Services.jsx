import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: "👨‍⚕️",
      title: "Online Consultation",
      description: "Connect with experienced doctors instantly via video call or chat",
      color: "#667eea"
    },
    {
      icon: "🚑",
      title: "Ambulance Tracking",
      description: "Real-time GPS tracking for emergency ambulance services",
      color: "#00d4aa"
    },
    {
      icon: "📅",
      title: "Appointment Booking",
      description: "Schedule appointments with specialists at your convenience",
      color: "#f5576c"
    },
    {
      icon: "📋",
      title: "Health Records",
      description: "Secure digital storage for all your medical records and reports",
      color: "#ffa726"
    },
    {
      icon: "💊",
      title: "Medicine Delivery",
      description: "Order prescribed medicines online with doorstep delivery",
      color: "#26c6da"
    },
    {
      icon: "🩺",
      title: "Lab Tests",
      description: "Book diagnostic tests and get reports delivered online",
      color: "#ab47bc"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive healthcare solutions designed to make your life easier and healthier
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon" style={{ background: `${service.color}15` }}>
                <span style={{ fontSize: '3rem' }}>{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-link" style={{ color: service.color }}>
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;