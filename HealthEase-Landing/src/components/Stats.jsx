import "./Stats.css";

const Stats = () => {
  const stats = [
    {
      number: "50,000+",
      label: "Happy Patients",
      icon: "😊"
    },
    {
      number: "1,000+",
      label: "Expert Doctors",
      icon: "👨‍⚕️"
    },
    {
      number: "100+",
      label: "Hospitals Connected",
      icon: "🏥"
    },
    {
      number: "24/7",
      label: "Emergency Support",
      icon: "🚨"
    }
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon-bg">
                <span className="stat-icon">{stat.icon}</span>
              </div>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;