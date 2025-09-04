import { useState } from 'react'
import './App.css'
import InteractiveCursor from './components/InteractiveCursor'
import BookingPage from './components/BookingPage'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  // Stock photo URL for hero section (professional seniors with technology)
  const heroImageUrl = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80"

  const Navigation = () => (
    <header className="header">
      <div className="container">
        <h1 className="logo">🔐 Senior-Lock</h1>
        <nav className="nav">
          <button 
            className="nav-btn" 
            onClick={() => setCurrentSection('home')}
          >
            Home
          </button>
          <button 
            className="nav-btn" 
            onClick={() => setCurrentSection('services')}
          >
            Services
          </button>
          <button 
            className="nav-btn" 
            onClick={() => setCurrentSection('about')}
          >
            About
          </button>
          <button 
            className="nav-btn consult" 
            onClick={() => setCurrentSection('booking')}
          >
            Book a Consult
          </button>
        </nav>
      </div>
    </header>
  )

  const HeroSection = () => (
    <section className="hero" style={{ position: 'relative', padding: '0 2rem 4rem 2rem' }}>
      <InteractiveCursor />
      <div className="hero-content" style={{ position: 'relative', zIndex: 2, marginTop: '110px' }}>
        <h1 className="hero-title">Senior-Lock</h1>
        <p className="hero-tagline">
          "Equipping and protecting seniors as AI hits critical mass."
        </p>
        <img 
          src={heroImageUrl}
          alt="Confident seniors using technology safely"
          className="hero-image"
        />
        <p className="hero-description">
          Professional digital security consulting specifically designed for seniors. 
          Stay ahead of AI-driven scams, protect your privacy, and navigate the digital world with confidence.
        </p>
        <div>
          <button 
            className="hero-cta"
            onClick={() => setCurrentSection('services')}
          >
            Explore Our Services
          </button>
          <button 
            className="hero-cta secondary"
            onClick={() => setCurrentSection('contact')}
          >
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  )

  const ServicesSection = () => (
    <section className="section services">
      <div className="container">
        <h2 className="section-title gradient">Our Consulting Services</h2>
        <p className="section-subtitle">
          Comprehensive digital security solutions tailored specifically for seniors facing the AI revolution
        </p>
        
        <div className="cards-grid">
          <div className="card">
            <h3>🤖 AI Threat Assessment</h3>
            <p>
              Understand how artificial intelligence is being weaponized against seniors and 
              learn to identify deepfakes, AI-generated scams, and automated fraud attempts.
            </p>
            <ul>
              <li>Deepfake detection training</li>
              <li>AI scam recognition</li>
              <li>Voice cloning awareness</li>
              <li>Automated fraud identification</li>
            </ul>
          </div>

          <div className="card">
            <h3>🛡️ Personal Security Audit</h3>
            <p>
              Comprehensive review of your digital footprint, devices, and online accounts 
              to identify vulnerabilities and create a personalized protection plan.
            </p>
            <ul>
              <li>Device security assessment</li>
              <li>Password audit & management</li>
              <li>Privacy settings optimization</li>
              <li>Account security hardening</li>
            </ul>
          </div>

          <div className="card">
            <h3>📚 Digital Literacy Training</h3>
            <p>
              One-on-one or small group training sessions to build confidence using 
              modern technology safely and effectively.
            </p>
            <ul>
              <li>Safe internet browsing</li>
              <li>Email security practices</li>
              <li>Social media privacy</li>
              <li>Online banking safety</li>
            </ul>
          </div>

          <div className="card">
            <h3>🔍 Scam Prevention Program</h3>
            <p>
              Stay ahead of the latest scams targeting seniors with our continuously 
              updated threat intelligence and prevention strategies.
            </p>
            <ul>
              <li>Monthly threat briefings</li>
              <li>Real-time scam alerts</li>
              <li>Emergency response plan</li>
              <li>Recovery assistance</li>
            </ul>
          </div>

          <div className="card">
            <h3>📞 24/7 Support Hotline</h3>
            <p>
              Direct access to our security experts whenever you encounter something 
              suspicious or need immediate assistance.
            </p>
            <ul>
              <li>Immediate threat response</li>
              <li>Technical support</li>
              <li>Incident investigation</li>
              <li>Peace of mind guarantee</li>
            </ul>
          </div>

          <div className="card">
            <h3>👨‍👩‍👧‍👦 Family Protection Plans</h3>
            <p>
              Extend security awareness to your entire family with coordinated 
              protection strategies and communication protocols.
            </p>
            <ul>
              <li>Family security training</li>
              <li>Emergency communication plans</li>
              <li>Multi-generational education</li>
              <li>Coordinated response protocols</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )

  const AboutSection = () => (
    <section className="section light">
      <div className="container">
        <h2 className="section-title">Why Senior-Lock?</h2>
        <p className="section-subtitle">
          The digital landscape is changing rapidly, and seniors are increasingly targeted by sophisticated AI-powered scams
        </p>
        
        <div className="cards-grid">
          <div className="card">
            <h3>🎯 Senior-Focused Expertise</h3>
            <p>
              We understand the unique challenges seniors face in the digital world. Our approach is 
              patient, clear, and designed specifically for your generation's needs and learning style.
            </p>
          </div>

          <div className="card">
            <h3>⚡ AI-Era Protection</h3>
            <p>
              As artificial intelligence becomes more sophisticated, so do the scams targeting seniors. 
              We stay ahead of these threats to keep you protected.
            </p>
          </div>

          <div className="card">
            <h3>🤝 Personal Touch</h3>
            <p>
              Unlike generic cybersecurity companies, we provide personalized, one-on-one consulting 
              that builds lasting relationships and genuine peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  )

  const ContactSection = () => (
    <section className="section dark">
      <div className="container">
        <h2 className="section-title">Get Your Free Consultation</h2>
        <p className="section-subtitle">
          Ready to protect yourself in the AI era? Let's start with a complimentary security assessment.
        </p>
        
        <div className="cards-grid">
          <div className="card">
            <h3>📞 Schedule a Call</h3>
            <p>
              Book a free 30-minute consultation to discuss your specific security concerns 
              and learn how our services can protect you.
            </p>
            <button className="hero-cta">Book Free Call</button>
          </div>

          <div className="card">
            <h3>✉️ Send Us a Message</h3>
            <p>
              Have questions? Send us a message and we'll get back to you within 24 hours 
              with personalized recommendations.
            </p>
            <button className="hero-cta secondary">Contact Us</button>
          </div>

          <div className="card">
            <h3>🚨 Emergency Support</h3>
            <p>
              Think you're currently being targeted by a scam? Contact our emergency 
              hotline for immediate assistance and guidance.
            </p>
            <button className="hero-cta" style={{background: 'var(--warning)'}}>
              Emergency Help
            </button>
          </div>
        </div>
      </div>
    </section>
  )

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'services':
        return <ServicesSection />
      case 'about':
        return <AboutSection />
      case 'contact':
        return <ContactSection />
      case 'booking':
        return <BookingPage />
      default:
        return (
          <>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
          </>
        )
    }
  }

  return (
    <div className="app">
      <Navigation />
      
      <main className="main">
        {renderCurrentSection()}
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2024 Senior-Lock Consulting - Equipping and protecting seniors as AI hits critical mass.</p>
          <p>Professional digital security services for the 65+ community</p>
        </div>
      </footer>
    </div>
  )
}

export default App
