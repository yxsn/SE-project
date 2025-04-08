import React from "react";
import "./homepage.css";

const homepage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <img
            src="https://img.icons8.com/?size=100&id=9345&format=png&color=000000"
            alt="EcoRide Logo"
            className="logo"
          />
          <h1 className="home-title">EcoRide</h1>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#how-it-works" className="nav-link">
            How It Works
          </a>
          <a href="#rewards" className="nav-link">
            Rewards
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2 className="hero-title">
          Track Your Carbon. Share Your Ride. Earn Rewards.
        </h2>
        <p className="hero-description">
          EcoRide helps you reduce carbon emissions by carpooling. Earn
          carbon-points for every shared ride and redeem them for gift cards.
        </p>
        <div className="cta-container">
          <a href="#join-now" className="cta-button">
            Join Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        {features.map(({ icon, title, description, image }) => (
          <div key={title} className="feature-card">
            <img src={image} alt={title} className="feature-image" />
            <h3 className="feature-title">
              {icon} {title}
            </h3>
            <p className="feature-description">{description}</p>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 EcoRide. Drive green. Live clean.</p>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: "🌱",
    title: "Eco-Friendly",
    description:
      "Every ride you share helps reduce the carbon footprint and promotes a sustainable future.",
    image: "https://img.icons8.com/?size=100&id=81373&format=png&color=000000",
  },
  {
    icon: "📊",
    title: "Track Emissions",
    description:
      "Get detailed insights on your emission savings for every trip you take.",
    image: "https://img.icons8.com/?size=100&id=111270&format=png&color=000000",
  },
  {
    icon: "🎁",
    title: "Carbon-Points",
    description:
      "Earn carbon-points and redeem them for exciting gift cards and offers.",
    image: "https://img.icons8.com/?size=100&id=66724&format=png&color=000000",
  },
];

export default homepage;
