import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('main')
  const [animateStats, setAnimateStats] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setAnimateStats(true)
    
    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scamStats = {
    annualLosses: 3.1, // billion USD
    victimsPerYear: 92000,
    averageLoss: 18000,
    reportingRate: 40 // percentage who report
  }

  const AnimatedCounter = ({ target, label, prefix = '', suffix = '' }: { target: number, label: string, prefix?: string, suffix?: string }) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      if (!animateStats) return
      const duration = 2000
      const steps = 60
      const increment = target / steps
      const stepDuration = duration / steps
      
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(current)
        }
      }, stepDuration)
      
      return () => clearInterval(timer)
    }, [target, animateStats])
    
    return (
      <div className="stat-card">
        <div className="stat-number">
          {prefix}{Math.floor(count).toLocaleString()}{suffix}
        </div>
        <div className="stat-label">{label}</div>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">🛡️ Senior Digital Security</h1>
          <nav className="nav">
            <button 
              className="pricing-nav-btn"
              onClick={() => setCurrentSection('pricing')}
            >
              🚀 Get Premium Protection - Start $5/mo 🛡️
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        {currentSection === 'main' && (
          <>
            {/* Hero Section with Parallax */}
            <div className="section home-section" style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              opacity: Math.max(0.3, 1 - scrollY / 800)
            }}>
              <div className="container">
                <div className="hero">
                  <h2 className="hero-title">Protect Yourself in the Digital World</h2>
                  <p className="hero-subtitle">
                    Learn essential digital security skills to stay safe from scams, 
                    protect your privacy, and navigate emerging technology with confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Scam Statistics */}
            <section className="stats-section" style={{
              transform: `translateY(${scrollY * 0.2}px)`
            }}>
              <div className="container">
                <h3>Senior Scam Statistics - The Reality</h3>
                <div className="stats-grid">
                  <AnimatedCounter 
                    target={scamStats.annualLosses} 
                    label="Billion Lost Annually" 
                    prefix="$" 
                    suffix="B"
                  />
                  <AnimatedCounter 
                    target={scamStats.victimsPerYear} 
                    label="Seniors Targeted Yearly"
                  />
                  <AnimatedCounter 
                    target={scamStats.averageLoss} 
                    label="Average Loss Per Victim" 
                    prefix="$"
                  />
                  <AnimatedCounter 
                    target={scamStats.reportingRate} 
                    label="Actually Report Scams" 
                    suffix="%"
                  />
                </div>
                <p className="stats-note">
                  *Data from FTC, FBI, and AARP Fraud Watch Network 2023-2024 reports
                </p>
              </div>
            </section>

            {/* Common Scams Section */}
            <div className="section scams-section" style={{
              transform: `translateY(${scrollY * 0.1}px)`
            }}>
              <div className="container">
                <h2>Common Scams Targeting Seniors</h2>
                <div className="scam-categories">
                  <div className="scam-card">
                    <h3>📞 Phone Scams</h3>
                    <ul>
                      <li>Medicare/Health Insurance fraud</li>
                      <li>Social Security impersonation</li>
                      <li>Fake tech support calls</li>
                      <li>Grandparent emergency scams</li>
                    </ul>
                  </div>
                  <div className="scam-card">
                    <h3>💌 Email & Online Scams</h3>
                    <ul>
                      <li>Phishing emails</li>
                      <li>Romance/dating scams</li>
                      <li>Lottery and sweepstakes fraud</li>
                      <li>Fake charity donations</li>
                    </ul>
                  </div>
                  <div className="scam-card">
                    <h3>💰 Financial Scams</h3>
                    <ul>
                      <li>Investment and pension fraud</li>
                      <li>Cryptocurrency scams</li>
                      <li>Reverse mortgage fraud</li>
                      <li>Insurance scams</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Censorship Education Section */}
            <div className="section censorship-section" style={{
              transform: `translateY(${scrollY * 0.15}px)`
            }}>
              <div className="container">
                <h2>Understanding Censorship & Digital Rights</h2>
                <div className="content-grid">
                  <div className="content-card">
                    <h3>What is Digital Censorship?</h3>
                    <p>Learn how governments and corporations can restrict access to information online and why this matters for your freedom.</p>
                  </div>
                  <div className="content-card">
                    <h3>Your Digital Rights</h3>
                    <p>Understand your fundamental rights to privacy, free speech, and access to information in the digital age.</p>
                  </div>
                  <div className="content-card">
                    <h3>Recognizing Censorship</h3>
                    <p>How to identify when information is being restricted, filtered, or manipulated in your online experience.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emerging Technology Section */}
            <div className="section technology-section" style={{
              transform: `translateY(${scrollY * 0.08}px)`
            }}>
              <div className="container">
                <h2>Emerging Technology Education</h2>
                <div className="tech-topics">
                  <div className="tech-card">
                    <h3>🤖 Artificial Intelligence</h3>
                    <p>Understanding AI, deepfakes, and how to spot AI-generated content that might be used to deceive you.</p>
                  </div>
                  <div className="tech-card">
                    <h3>🏠 Smart Home Security</h3>
                    <p>Protecting your privacy with smart devices, securing your home network, and understanding data collection.</p>
                  </div>
                  <div className="tech-card">
                    <h3>📱 Social Media Safety</h3>
                    <p>Privacy settings, avoiding scams on social platforms, and protecting your personal information online.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Tools Section */}
            <div className="section privacy-section" style={{
              transform: `translateY(${scrollY * 0.05}px)`
            }}>
              <div className="container">
                <h2>Privacy Tools & Anti-Tracking</h2>
                <div className="privacy-content">
                  <div className="privacy-card">
                    <h3>🐧 Linux for Beginners</h3>
                    <p>Step-by-step guide to using Linux operating systems for better privacy and security than Windows or Mac.</p>
                    <ul>
                      <li>Why Linux is more secure</li>
                      <li>Beginner-friendly distributions</li>
                      <li>Basic commands and usage</li>
                    </ul>
                  </div>
                  <div className="privacy-card">
                    <h3>🕵️ Tails OS - Ultimate Privacy</h3>
                    <p>Learn how to use Tails (The Amnesic Incognito Live System) to browse completely anonymously.</p>
                    <ul>
                      <li>What is Tails and why use it</li>
                      <li>How to download and verify Tails</li>
                      <li>Step-by-step usage guide</li>
                    </ul>
                  </div>
                  <div className="privacy-card">
                    <h3>🛡️ Anti-Tracking Techniques</h3>
                    <p>Fight being tracked at every corner with these essential privacy tools and practices.</p>
                    <ul>
                      <li>VPN setup and usage</li>
                      <li>Browser privacy extensions</li>
                      <li>Secure search engines</li>
                      <li>Email encryption</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {currentSection === 'pricing' && (
          <div className="section pricing-section">
            <div className="container">
              <div className="pricing-hero">
                <button 
                  className="back-btn"
                  onClick={() => setCurrentSection('main')}
                >
                  ← Back to Main Page
                </button>
                <h2>Choose Your Protection Level</h2>
                <p className="pricing-subtitle">
                  Invest in your digital security - it's cheaper than losing $18,000 to scammers
                </p>
              </div>

              <div className="pricing-grid">
                {/* Free Tier */}
                <div className="pricing-card free-tier">
                  <div className="tier-header">
                    <h3>🆓 Free Access</h3>
                    <div className="price">
                      <span className="currency">$</span>
                      <span className="amount">0</span>
                      <span className="period">/month</span>
                    </div>
                  </div>
                  <div className="tier-features">
                    <h4>What's Included:</h4>
                    <ul>
                      <li>✅ Basic scam awareness</li>
                      <li>✅ Common fraud examples</li>
                      <li>✅ General safety tips</li>
                      <li>❌ Advanced privacy tools</li>
                      <li>❌ Linux/Tails tutorials</li>
                      <li>❌ Personal support</li>
                    </ul>
                  </div>
                  <button className="cta-button free-cta">
                    Continue with Free
                  </button>
                </div>

                {/* Intro Tier */}
                <div className="pricing-card intro-tier">
                  <div className="tier-badge">MOST POPULAR</div>
                  <div className="tier-header">
                    <h3>🎯 Intro Protection</h3>
                    <div className="price">
                      <span className="currency">$</span>
                      <span className="amount">5</span>
                      <span className="period">/month</span>
                    </div>
                  </div>
                  <div className="tier-features">
                    <h4>Everything in Free, plus:</h4>
                    <ul>
                      <li>✅ Detailed scam case studies</li>
                      <li>✅ Censorship recognition guide</li>
                      <li>✅ Basic privacy tools setup</li>
                      <li>✅ Emerging tech explanations</li>
                      <li>✅ Email security guide</li>
                      <li>✅ Browser safety setup</li>
                    </ul>
                  </div>
                  <button className="cta-button intro-cta">
                    Start Intro Protection - $5/mo
                  </button>
                  <div className="savings-note">
                    💡 Save $17,995 vs average scam loss!
                  </div>
                </div>

                {/* Premium Tier */}
                <div className="pricing-card premium-tier">
                  <div className="tier-badge premium-badge">COMPLETE PROTECTION</div>
                  <div className="tier-header">
                    <h3>🔒 Premium Security</h3>
                    <div className="price">
                      <span className="currency">$</span>
                      <span className="amount">20</span>
                      <span className="period">/month</span>
                    </div>
                  </div>
                  <div className="tier-features">
                    <h4>Everything in Intro, plus:</h4>
                    <ul>
                      <li>✅ Complete Linux setup guide</li>
                      <li>✅ Tails OS mastery course</li>
                      <li>✅ Advanced anti-tracking tools</li>
                      <li>✅ VPN & encryption setup</li>
                      <li>✅ Personal security audit</li>
                      <li>✅ 24/7 email support</li>
                      <li>✅ Monthly security updates</li>
                      <li>✅ Exclusive webinars</li>
                    </ul>
                  </div>
                  <button className="cta-button premium-cta">
                    Get Premium Security - $20/mo
                  </button>
                  <div className="savings-note">
                    🛡️ Complete digital anonymity & protection
                  </div>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="value-section">
                <h3>Why Invest in Your Digital Security?</h3>
                <div className="value-grid">
                  <div className="value-card">
                    <div className="value-icon">💸</div>
                    <h4>Average Senior Loses $18,000</h4>
                    <p>Our $5-$20/month investment can save you thousands in potential losses</p>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">🎯</div>
                    <h4>You're Being Targeted</h4>
                    <p>92,000+ seniors targeted yearly - don't be an easy target</p>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">🔐</div>
                    <h4>Privacy is Your Right</h4>
                    <p>Learn tools that governments and corporations don't want you to know</p>
                  </div>
                </div>
              </div>

              {/* Money Back Guarantee */}
              <div className="guarantee-section">
                <div className="guarantee-card">
                  <h3>🎯 30-Day Money Back Guarantee</h3>
                  <p>
                    If you don't feel more confident and secure online within 30 days, 
                    we'll refund every penny. No questions asked.
                  </p>
                  <div className="guarantee-features">
                    <span>✅ Cancel anytime</span>
                    <span>✅ No hidden fees</span>
                    <span>✅ Instant access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 Senior Digital Security Education - Empowering seniors with digital knowledge</p>
        </div>
      </footer>
    </div>
  )
}

export default App
