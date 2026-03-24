import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Vite']
    },
    {
      title: 'Backend',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      skills: ['Python', 'Django', 'Flask', 'REST APIs', 'MySQL', 'PostgreSQL', 'SQLite']
    },
    {
      title: 'Tools & Platforms',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      skills: ['Git', 'GitHub', 'VS Code', 'Netlify', 'npm', 'Postman']
    },
    {
      title: 'Currently Learning',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      skills: ['Docker', 'TypeScript', 'AWS', 'CI/CD']
    }
  ];

  return (
    <div className="skills">
      <div className="skills-bg">
        <div className="skills-orb skills-orb-1"></div>
        <div className="skills-orb skills-orb-2"></div>
      </div>

      <div className="skills-header">
        <span className="section-tag">What I Work With</span>
        <h1 className="gradient-text">Skills & Technologies</h1>
        <p>The tools and technologies I use to build things</p>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="skill-category glass-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2>{category.title}</h2>
            </div>
            <div className="skills-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-chip">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
