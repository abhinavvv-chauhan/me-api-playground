import { useState, useEffect } from 'react';
import axios from 'axios';
import { Github, Linkedin, ExternalLink, Search, Briefcase, GraduationCap, Code } from 'lucide-react';
import './App.css';

function App() {
  const [profile, setProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    axios.get('https://me-api-playground-mucp.onrender.com/api/profile')
      .then(response => {
        setProfile(response.data);
        setFilteredProjects(response.data.projects);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (!profile) return;
    const filtered = profile.projects.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query)
    );
    setFilteredProjects(filtered);
  };

  if (!profile) return <div style={{padding: '50px', textAlign: 'center', color: '#fff'}}>Loading Profile...</div>;

  return (
    <div className="app">
      
      <header className="header">
        <div className="container flex-row">
          <div>
            <h1>{profile.name}</h1>
            <p className="subtitle">{profile.education}</p>
            <div className="social-links">
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="social-link">
                <Github size={20} /> GitHub
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="social-link">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href={profile.links.portfolio} target="_blank" rel="noreferrer" className="social-link">
                <ExternalLink size={20} /> Portfolio
              </a>
            </div>
          </div>
          <div className="email-card">
            <small style={{display:'block', marginBottom:'4px', fontWeight:'bold', color:'#a1a1aa', fontSize: '0.7rem', textTransform: 'uppercase'}}>Contact</small>
            <strong style={{color: '#f4f4f5'}}>{profile.email}</strong>
          </div>
        </div>
      </header>

      <main className="container">


        <section className="section" style={{marginBottom: '4rem'}}>
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'1.5rem'}}>
            <Code size={24} />
            <h2>Technical Skills</h2>
          </div>
          <div>
            {profile.skills.map(skill => (
              <span key={skill} className="pill">{skill}</span>
            ))}
          </div>
        </section>


        <div className="search-container">
          <Search size={20} style={{position:'absolute', left:'15px', top:'50%', transform:'translateY(-50%)', color:'#a1a1aa'}} />
          <input
            type="text"
            className="search-input"
            placeholder="Search projects (e.g. React)..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>


        <section style={{marginBottom: '4rem'}}>
          <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
            <Briefcase size={24} />
            <h2>Featured Projects</h2>
          </div>
          
          {filteredProjects.length === 0 ? (
            <p className="text-muted">No projects found for "{searchQuery}"</p>
          ) : (
            <div className="grid">
              {filteredProjects.map(project => (
                <div key={project._id} className="card">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="text-muted">{project.description}</p>
                  </div>
                  <div className="card-links">
                     {project.links.github && (
                       <a href={project.links.github} target="_blank" rel="noreferrer" className="social-link">
                          <Github size={18} /> Code
                       </a>
                     )}
                     {project.links.demo && (
                       <a href={project.links.demo} target="_blank" rel="noreferrer" className="social-link" style={{color: '#fff'}}>
                          <ExternalLink size={18} /> Live Demo
                       </a>
                     )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>


        <section>
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'1.5rem'}}>
            <GraduationCap size={24} />
            <h2>Experience</h2>
          </div>
          <div>
            {profile.work.map((job, index) => (
              <div key={index} className="job-item">
                <div className="job-date">{job.duration}</div>
                <div>
                  <h3 style={{fontSize:'1.1rem'}}>{job.position}</h3>
                  <div className="job-company">{job.company}</div>
                  <p className="text-muted">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer>
        <p>Built with React, Node.js & Mongo.</p>
      </footer>
    </div>
  );
}

export default App;