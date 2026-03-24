import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const roles = ['Full Stack Developer', 'Python Enthusiast', 'React Developer', 'Creative Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, isDeleting ? text.length - 1 : text.length + 1));
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="home">
      {/* Animated background elements */}
      <div className="bg-decoration">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
        <div className="bg-grid"></div>
      </div>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Available for opportunities</span>
          </div>
          <h1 className="hero-greeting">Hi, I'm</h1>
          <h2 className="hero-name gradient-text">Sonal Chavan</h2>
          <div className="hero-role">
            <span className="role-text">{text}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description">
            I craft elegant, performant web applications with modern technologies.
            Passionate about creating seamless user experiences and turning complex 
            problems into simple, beautiful solutions.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="cta-primary">
              <span>View My Work</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link to="/contact" className="cta-secondary">Get in Touch</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-ring">
            <div className="avatar-glow"></div>
            <div className="avatar-container">
              <img src="/my_photo.png" alt="Sonal Chavan" />
            </div>
          </div>
          <div className="floating-tags">
            <span className="float-tag tag-1"> React</span>
            <span className="float-tag tag-2"> Django</span>
            <span className="float-tag tag-3"> Flask</span>
            <span className="float-tag tag-4"> MySQL</span>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
