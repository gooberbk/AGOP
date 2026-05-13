import { useState, useEffect } from 'react'

function App() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const closeNav = () => {
    setIsNavActive(false);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const targetId = e.target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerOffset = 72;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        closeNav();
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleScroll));
    };
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <img src="/AgopLogo.png" alt="AGOP Logo" className="logo-img" />
            <span className="logo-text">AGOP</span>
          </div>
          <nav className={`nav-menu ${isNavActive ? 'active' : ''}`} id="nav-menu">
            <a href="#about" className="nav-link">About</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How it Works</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#team" className="nav-link">Team</a>
          </nav>
          <button 
            className="mobile-toggle" 
            id="mobile-toggle" 
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <i className={`fa-solid ${isNavActive ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero section">
          <div className="container hero-container">
            <div className="hero-content">
              <span className="tagline">Smarter Agriculture for the Arab World</span>
              <h1 className="hero-title">Cultivate smarter with AI-Powered farming</h1>
              <p className="hero-subtitle">Bringing real-time weather insights, task management, and LightGBM-driven irrigation recommendations directly to small-scale farmers.</p>
              <div className="hero-actions">
                <a href="https://github.com/gooberbk" target="_blank" rel="noreferrer" className="btn btn-primary">View Project on GitHub</a>
                <a href="#features" className="btn btn-secondary">Explore Features</a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <img src="/screen_home.jpg" alt="AGOP Home Screen" className="hero-image" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about section bg-surface">
          <div className="container">
            <div className="about-grid">
              <div className="about-image-wrapper">
                <img src="/welcometoAgop.jpg" alt="Welcome to AGOP" className="about-image" />
              </div>
              <div className="about-content">
                <h2>The Agricultural Challenge</h2>
                <p>Agriculture is a vital pillar of the Algerian economy. However, the majority of small and medium-scale farmers still rely on experience-based, manual decision-making. Daily decisions regarding irrigation, fertilization, and harvesting are made without structured support, leading to resource waste and sub-optimal yields.</p>
                <p>AGOP provides a free, mobile-first, intelligent farming assistant accessible on standard Android smartphones. It combines real-time weather data with a LightGBM machine learning model to generate personalised, yield-based irrigation recommendations tailored to North African agriculture.</p>
                
                <div className="stats-container">
                  <div className="stat-item">
                    <span className="stat-value">&lt; 200ms</span>
                    <span className="stat-label">API Response Time</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">12</span>
                    <span className="stat-label">Functional Tests Passed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features section">
          <div className="container">
            <div className="section-header center">
              <h2>Intelligent Farming at Your Fingertips</h2>
              <p>Replacing manual, intuition-based decisions with structured, data-driven support.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon"><i className="fa-solid fa-cloud-sun-rain"></i></div>
                <h3>Real-Time Weather Data</h3>
                <p>Get GPS-based current weather conditions and a 5-day forecast including temperature, humidity, wind, and UV index.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><i className="fa-solid fa-seedling"></i></div>
                <h3>Crop Management</h3>
                <p>Register multiple crops across different fields. Track soil type, surface area, and automatically monitor growth stages.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><i className="fa-solid fa-brain"></i></div>
                <h3>AI Irrigation Engine</h3>
                <p>Our LightGBM model predicts yield gain (t/ha) and provides personalised, confidence-rated irrigation recommendations.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><i className="fa-solid fa-list-check"></i></div>
                <h3>Smart Task Manager</h3>
                <p>Schedule, track, and complete daily activities like watering, fertilizing, and harvesting seamlessly.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><i className="fa-solid fa-language"></i></div>
                <h3>Localised Context</h3>
                <p>Built specifically for the needs, crop types, and climate conditions of North African agriculture.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><i className="fa-solid fa-mobile-screen-button"></i></div>
                <h3>Free & Accessible</h3>
                <p>An intuitive mobile-first interface designed for non-technical users, requiring no paid subscriptions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="how-it-works section bg-surface">
          <div className="container">
            <div className="section-header center">
              <h2>How AGOP Works</h2>
              <p>Start optimizing your farm's yield in three simple steps.</p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Register Fields</h3>
                <p>Add your crops with type, field name, soil, and planting date. AGOP handles growth stage tracking.</p>
                <img src="/screen_add_crop.jpg" alt="Add Crop Screen" className="step-image" />
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Monitor Tasks</h3>
                <p>Check your dashboard for weather insights and track your watering, fertilizing, and harvesting tasks.</p>
                <img src="/screen_tasks.jpg" alt="Tasks Screen" className="step-image" />
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>AI Recommendations</h3>
                <p>Request an AI irrigation recommendation to receive data-driven advice with predicted yield gains.</p>
                <img src="/screen_ai.jpg" alt="AI Recommendation Screen" className="step-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="gallery section">
          <div className="container">
            <div className="section-header">
              <h2>Application Interface</h2>
              <p>Clean, mobile-first design tailored for quick access in the field.</p>
            </div>
            <div className="gallery-grid">
              <img src="/screen_login.jpg" alt="Login Interface" className="gallery-image" />
              <img src="/screen_register.jpg" alt="Registration Interface" className="gallery-image" />
              <img src="/screen_crops.jpg" alt="Crops Dashboard" className="gallery-image" />
              <img src="/screen_weather.jpg" alt="Weather Forecast" className="gallery-image" />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="team section bg-surface">
          <div className="container">
            <div className="section-header center">
              <h2>Meet the Team</h2>
              <p>The minds behind AGOP from ESTIN.</p>
            </div>
            <div className="team-grid">
              {/* Mahdi (Leader) */}
              <div className="team-card">
                <img src="/your_photo.png" alt="Boukandoul Mahdi" className="team-photo" />
                <h3>Boukandoul Mahdi</h3>
                <span className="team-role">Team Leader,<br/>Documentation & AI Responsible</span>
                <div className="team-socials">
                  <a href="https://github.com/gooberbk" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/mahdi-boukendoul/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
              
              {/* Aissa (Frontend) */}
              <div className="team-card">
                <div className="team-photo placeholder-photo"><i className="fa-solid fa-user"></i></div>
                <h3>Aissa Kifouch</h3>
                <span className="team-role">Frontend Developer</span>
              </div>
              
              {/* Mohyiddin (Backend & DB) */}
              <div className="team-card">
                <div className="team-photo placeholder-photo"><i className="fa-solid fa-user"></i></div>
                <h3>Boukhenchouch Mohyiddin</h3>
                <span className="team-role">Backend & Database Responsible</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <img src="/AgopLogo.png" alt="AGOP Logo" className="logo-img footer-logo" />
                <span className="logo-text">AGOP</span>
              </div>
              <p>Delivering agricultural intelligence to farmers through accessible smartphones.</p>
            </div>
            <div className="footer-links-group">
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#how-it-works">How it Works</a>
              <a href="#team">Team</a>
            </div>
            <div className="footer-links-group">
              <h4>Connect</h4>
              <a href="https://github.com/gooberbk" target="_blank" rel="noreferrer">GitHub Repository</a>
              <a href="mailto:contact@example.com">Contact Us</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 AGOP App. Designed for the 2CP Multidisciplinary Project, ESTIN.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
