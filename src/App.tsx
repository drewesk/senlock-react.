import { useState } from "react";
import "./App.css";
import InteractiveCursor from "./components/InteractiveCursor";
import BookingPage from "./components/BookingPage";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  // Stock photo URL for hero section (professional seniors with technology)
  const heroImageUrl =
    "https://images.unsplash.com/photo-1514415008039-efa173293080?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const Navigation = () => (
    <header className="header">
      <div className="container">
        <h1 className="logo">🔐 Senior-Lock</h1>
        <nav className="nav">
          <button className="nav-btn" onClick={() => setCurrentSection("home")}>
            Home
          </button>
          <button
            className="nav-btn"
            onClick={() => setCurrentSection("services")}
          >
            Services
          </button>
          <button
            className="nav-btn"
            onClick={() => setCurrentSection("about")}
          >
            About
          </button>
          <button
            className="nav-btn consult"
            onClick={() => setCurrentSection("booking")}
          >
            Book a Consult
          </button>
        </nav>
      </div>
    </header>
  );

  const HeroSection = () => (
    <section
      className="hero"
      style={{ position: "relative", padding: "0 2rem 4rem 2rem" }}
    >
      <InteractiveCursor />
      <div
        className="hero-content"
        style={{ position: "relative", zIndex: 2, marginTop: "110px" }}
      >
        <h1 className="hero-title">Senior-Lock</h1>
        <p className="hero-tagline">
          Equipping Seniors as we enter into "The AI-Era"
        </p>
        <img
          src={heroImageUrl}
          alt="Confident seniors using technology safely"
          className="hero-image"
        />
        <p className="hero-description">
          Digital security consulting specifically designed for educating and
          equiping Seniors. Stay ahead of AI-driven scams, protect your privacy,
          and navigate the digital world with confidence.
        </p>
        <div>
          <button
            className="hero-cta"
            onClick={() => setCurrentSection("services")}
          >
            Explore Our Services
          </button>
          <button
            className="hero-cta secondary"
            onClick={() => setCurrentSection("contact")}
          >
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => (
    <section className="section services">
      <div className="container">
        <h2 className="section-title gradient">
          Protecting Seniors from AI‑Era Threats
        </h2>
        <p className="section-subtitle">
          Clear, practical guidance focused on the most common risks seniors
          face today: Identity Theft & Password‑Lock, Phone Call Scams, Email
          Phishing Attacks, and Tech Etiquette & Conventions.
        </p>

        <div className="cards-grid">
          <div className="card">
            <h3>🪪 Identity Theft & Password‑Lock</h3>
            <p>
              Lock down your identity and secure every account with strong,
              memorable protection and easy recovery options.
            </p>
            <ul>
              <li>Unique passwords for every account</li>
              <li>Password manager setup and training</li>
              <li>Two‑factor authentication (2FA) everywhere possible</li>
              <li>Account recovery and lockout prevention</li>
            </ul>
          </div>

          <div className="card">
            <h3>📞 Phone Call Scams</h3>
            <p>
              Seniors and those with significant assets are prime targets for
              scam calls — including bank impersonation and urgent “act now”
              fraud. Learn simple steps to stay safe.
            </p>
            <ul>
              <li>Caller verification (never trust caller ID alone)</li>
              <li>Anti‑spoofing and do‑not‑call protections</li>
              <li>Bank fraud red flags and safe callback routines</li>
              <li>Calm scripts for high‑pressure calls</li>
            </ul>
          </div>

          <div className="card">
            <h3>✉️ Email Phishing Attacks</h3>
            <p>
              Malware and AI‑advanced tools can compromise your system. Train
              your eye to spot bad emails and protect your inbox.
            </p>
            <ul>
              <li>Phishing detection made simple</li>
              <li>Safe links and attachments checklist</li>
              <li>Email security settings (spam, filters, forwarding)</li>
              <li>Anti‑malware and safe update habits</li>
            </ul>
          </div>

          <div className="card">
            <h3>📗 Tech Etiquette & Conventions</h3>
            <p>
              In this new frontier of AI, we teach modern tech “dos and don’ts”
              so seniors can navigate with confidence.
            </p>
            <ul>
              <li>Scam‑safe texting and messaging norms</li>
              <li>Social media privacy and sharing boundaries</li>
              <li>App permissions and safe installs</li>
              <li>Backups and updates without the headaches</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section className="section light">
      <div className="container">
        <h2 className="section-title">Why Senior-Lock?</h2>
        <p className="section-subtitle">
          The digital landscape is changing rapidly, and seniors are
          increasingly targeted by sophisticated AI-powered scams
        </p>

        <div className="cards-grid">
          <div className="card">
            <h3>🎯 Senior-Focused Expertise</h3>
            <p>
              We understand the unique challenges seniors face in the digital
              world. Our approach is patient, clear, and designed specifically
              for your generation's needs and learning style.
            </p>
          </div>

          <div className="card">
            <h3>⚡ AI-Era Protection</h3>
            <p>
              As artificial intelligence becomes more sophisticated, so do the
              scams targeting seniors. We stay ahead of these threats to keep
              you protected.
            </p>
          </div>

          <div className="card">
            <h3>🤝 Personal Touch</h3>
            <p>
              Unlike generic cybersecurity companies, we provide personalized,
              one-on-one consulting that builds lasting relationships and
              genuine peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section className="section dark">
      <div className="container">
        <h2 className="section-title">Get Your Free Consultation</h2>
        <p className="section-subtitle">
          Ready to protect yourself in the AI era? Let's start with a
          complimentary security assessment.
        </p>

        <div className="cards-grid">
          <div className="card">
            <h3>📞 Schedule a Call</h3>
            <p>
              Book a free 30-minute consultation to discuss your specific
              security concerns and learn how our services can protect you.
            </p>
            <button className="hero-cta">Book Free Call</button>
          </div>

          <div className="card">
            <h3>✉️ Send Us a Message</h3>
            <p>
              Have questions? Send us a message and we'll get back to you within
              24 hours with personalized recommendations.
            </p>
            <button className="hero-cta secondary">Contact Us</button>
          </div>

          <div className="card">
            <h3>🚨 Emergency Support</h3>
            <p>
              Think you're currently being targeted by a scam? Contact our
              emergency hotline for immediate assistance and guidance.
            </p>
            <button
              className="hero-cta"
              style={{ background: "var(--warning)" }}
            >
              Emergency Help
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case "services":
        return <ServicesSection />;
      case "about":
        return <AboutSection />;
      case "contact":
        return <ContactSection />;
      case "booking":
        return <BookingPage />;
      default:
        return (
          <>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
          </>
        );
    }
  };

  return (
    <div className="app">
      <Navigation />

      <main className="main">{renderCurrentSection()}</main>

      <footer className="footer">
        <div className="container">
          <p>
            © 2024 Senior-Lock Consulting - Equipping and protecting seniors as
            AI hits critical mass.
          </p>
          <p>Professional digital security services for the 65+ community</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
