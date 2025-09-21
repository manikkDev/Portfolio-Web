import { useTheme } from '../../hooks/useTheme';
import manikWithPcImage from '../../assets/manik-with-pc.jpg';
import './About.css';

const About = () => {
  const { theme } = useTheme();

  return (
    <section className={`about ${theme}`} id="about">
      <div className="about-container">
        <div className="about-content">
          {/* Left Side - Image */}
          <div className="about-image-section">
            <div className="image-container">
              <div className="image-placeholder">
                <img src={manikWithPcImage} alt="Manik with PC" className="about-image" />
                <div className="image-glow"></div>
                <div className="gaming-overlay"></div>
              </div>
              <div className="floating-elements">
                {/* Professional Gaming HUD Elements */}
                <div className="hud-element terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                  <div className="terminal-content">
                    <span className="terminal-text">$ code --version</span>
                    <div className="cursor-blink"></div>
                  </div>
                </div>
                
                <div className="hud-element code-panel">
                   <div className="code-lines">
                     <div className="code-line">class Developer {'{'}</div>
                     <div className="code-line">  skills: 'expert';</div>
                     <div className="code-line">{'}'}</div>
                   </div>
                   <div className="syntax-highlight"></div>
                 </div>
                
                <div className="hud-element game-stats">
                  <div className="stat-bar">
                    <div className="stat-label">EXP</div>
                    <div className="stat-progress">
                      <div className="stat-fill"></div>
                    </div>
                  </div>
                  <div className="level-indicator">PRO</div>
                </div>
                
                {/* Interactive Glitch Particles */}
                <div className="glitch-particles">
                  <div className="glitch-particle" style={{"--delay": "0s", "--x": "20%", "--y": "30%"}}></div>
                  <div className="glitch-particle" style={{"--delay": "2s", "--x": "80%", "--y": "60%"}}></div>
                  <div className="glitch-particle" style={{"--delay": "4s", "--x": "60%", "--y": "20%"}}></div>
                  <div className="glitch-particle" style={{"--delay": "6s", "--x": "30%", "--y": "80%"}}></div>
                  <div className="glitch-particle" style={{"--delay": "8s", "--x": "70%", "--y": "40%"}}></div>
                </div>
                
                {/* Digital Grid Overlay */}
                <div className="digital-grid">
                  <div className="grid-line horizontal" style={{"--position": "25%"}}></div>
                  <div className="grid-line horizontal" style={{"--position": "75%"}}></div>
                  <div className="grid-line vertical" style={{"--position": "30%"}}></div>
                  <div className="grid-line vertical" style={{"--position": "70%"}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-text-section">
            <div className="about-text">
              <h1 className="about-heading">
                About Me
              </h1>
              
              <h2 className="about-subheading">
                Full-Stack & Game Developer
              </h2>
              
              <p className="about-description">
                I bring creative visions to life through code, specializing in both web platforms and interactive games. With expertise in full-stack development and game engineering, I build robust systems and optimize performance for seamless experiences. I believe great technology should feel invisible, empowering users to fully immerse themselves in digital worlds.
              </p>
              <p className="about-description">
                My focus is on clean, maintainable code and scalable architecture. Whether architecting web applications or developing game mechanics, I approach every project with precision and a user-first mindset.
              </p>

              {/* Skills Columns */}
              <div className="skills-container">
                <div className="skill-column">
                  <div className="skill-card">
                    <h3 className="skill-title">Full-Stack Development</h3>
                    <p className="skill-description">
                      Building modern, responsive web applications with optimized frontend interfaces and scalable backend systems.
                    </p>
                  </div>
                </div>
                
                <div className="skill-column">
                  <div className="skill-card">
                    <h3 className="skill-title">Game Development</h3>
                    <p className="skill-description">
                      Creating engaging gameplay experiences with performant code, intuitive mechanics, and immersive worlds.
                    </p>
                  </div>
                </div>
                
                <div className="skill-column">
                  <div className="skill-card">
                    <h3 className="skill-title">Technical Problem-Solving</h3>
                    <p className="skill-description">
                      Architecting elegant solutions to complex technical challenges across different platforms and domains.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Gaming Background */}
        <div className="about-bg">
          <div className="circuit-pattern"></div>
          <div className="data-streams">
            <div className="data-stream stream-1"></div>
            <div className="data-stream stream-2"></div>
            <div className="data-stream stream-3"></div>
          </div>
          <div className="glitch-overlay"></div>
          <div className="scan-grid"></div>
        </div>
      </div>
    </section>
  );
};

export default About;