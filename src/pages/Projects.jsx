import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'StockLens',
      description: 'A full-stack stock prediction portal featuring live prices for commodities (Gold, Silver, Crude Oil) in INR, real-time currency rates, and Indian government bond yields. Built with a Django REST backend and React frontend with user authentication.',
      technologies: ['React', 'Vite', 'Django', 'REST API', 'PostgreSQL', 'Python'],
      image: '/StockLens_img.png',
      liveLink: 'https://stock-lens-six.vercel.app/',
      githubLink: 'https://github.com/csonal0947/StockLens'
    },
    {
      title: 'MyDiary - Django Blog',
      description: 'A full-featured blog application built with Django. Users can create, read, update, and delete blog posts with a clean, user-friendly interface. Includes authentication, rich text editing, and responsive design.',
      technologies: ['Python', 'Django', 'HTML', 'CSS', 'SQLite'],
      image: '/MyDiary.png',
      liveLink: 'https://github.com/csonal0947/Django-Blog'
    },
    {
      title: 'Expense Tracker',
      description: 'A Flask-based expense tracking application to manage and monitor personal finances. Features include adding, editing, and deleting expenses with an intuitive user interface.',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'SQLite'],
      image: '/Expense_tracker.png',
      liveLink: 'https://github.com/csonal0947/Expense-Tracker'
    },
    {
      title: 'Weather Forecast App',
      description: 'A weather forecast application featuring real-time temperature, humidity, wind speed, and city-based search. Built by connecting frontend with OpenWeather API for hands-on API integration experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      image: '/weather-app.png',
      liveLink: 'https://lnkd.in/dzh26Vsw'
    },
    {
      title: 'Twitter Clone',
      description: 'A lightweight Twitter-clone with features including compose tweets, like/retweet, explore feed, bookmarks, and user profile.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      image: '/twitter-clone.png',
      liveLink: 'https://lnkd.in/dvtA8S_S'
    },
    {
      title: 'Vegetable Market Website',
      description: 'A responsive vegetable market website that strengthened skills in layout design, responsiveness, and clean UI development.',
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      image: '/vegetable-market.png',
      liveLink: 'https://lnkd.in/dGKf-7CA'
    },
    {
      title: 'Montana Resort',
      description: 'A clean and modern hotel website frontend showcasing elegant design principles and responsive layout for the hospitality industry.',
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      image: '/Montana-Resort.png',
      liveLink: 'https://lnkd.in/dyEZrK8R'
    },
    {
      title: 'Pomodoro Timer App',
      description: 'A minimalist productivity app implementing the Pomodoro Technique. Features customizable focus & break durations, animated circular progress ring, dark/light theme toggle, session tracking & statistics, confetti celebration on completion, and audio notifications.',
      technologies: ['React 18', 'Vite', 'CSS Variables', 'Web Audio API'],
      image: '/Pomodoro_timer_app.png',
      liveLink: 'https://adorable-mochi-ecf53f.netlify.app/'
    }
  ];

  return (
    <div className="projects">
      <div className="projects-bg">
        <div className="projects-orb projects-orb-1"></div>
        <div className="projects-orb projects-orb-2"></div>
      </div>

      <div className="projects-header">
        <span className="section-tag">Portfolio</span>
        <h1 className="gradient-text">Featured Projects</h1>
        <p>A showcase of my recent work and experiments</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card glass-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image-wrapper">
              <div className="project-image">
                {project.image.startsWith('/') ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <span className="project-emoji">{project.image}</span>
                )}
              </div>
              <div className="project-overlay">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="overlay-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  <span>View Project</span>
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
