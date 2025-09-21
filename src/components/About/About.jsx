import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import manikWithPcImage from '../../assets/manik-with-pc.jpg';
import './About.css';

const About = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  // Animation variants for scroll-triggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      className={`about ${theme}`} 
      id="about"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="about-container">
        <motion.div className="about-content" variants={containerVariants}>
          {/* Left Side - Image */}
          <motion.div className="about-image-section" variants={slideInLeft}>
            <motion.div className="image-container" variants={scaleIn}>
              <div className="image-placeholder">
                <motion.img 
                  src={manikWithPcImage} 
                  alt="Manik with PC" 
                  className="about-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="image-glow"></div>
                <div className="gaming-overlay"></div>
              </div>
              <div className="floating-elements">
                {/* Professional Gaming HUD Elements */}
                <motion.div 
                  className="hud-element terminal-window"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                  <div className="terminal-content">
                    <span className="terminal-text">$ code --version</span>
                    <div className="cursor-blink"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="hud-element code-panel"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                   <div className="code-lines">
                     <div className="code-line">class Developer {'{'}</div>
                     <div className="code-line">  skills: 'expert';</div>
                     <div className="code-line">{'}'}</div>
                   </div>
                   <div className="syntax-highlight"></div>
                 </motion.div>
                
                <motion.div 
                  className="hud-element game-stats"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <div className="stat-bar">
                    <div className="stat-label">EXP</div>
                    <div className="stat-progress">
                      <div className="stat-fill"></div>
                    </div>
                  </div>
                  <div className="level-indicator">PRO</div>
                </motion.div>
                
                {/* Interactive Glitch Particles */}
                <div className="glitch-particles">
                  <div className="glitch-particle" style={{"--delay": "0s", "--x": "20%", "--y": "30%"}}></div>
                  <div className="glitch-particle" style={{"--delay": "2s", "--x": "80%", "--y": "60%"}}></div>
                  <div className="glitch-particle" style={{"--delay": "4s", "--x": "60%", "--y": "20%"}}></div>
                  <div className="glitch-particle" style={{"--delay": "6s", "--x": "30%", "--y": "80%"}}></div>
                  <div className="glitch-particle" style={{"--delay": "8s", "--x": "70%", "--y": "40%"}}></div>
                </div>
                
                {/* Digital Grid Overlay */}
                
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div className="about-text-section" variants={slideInRight}>
            <motion.div className="about-text" variants={containerVariants}>
              <motion.h1 className="about-heading" variants={fadeInUp}>
                About Me
              </motion.h1>
              
              <motion.h2 className="about-subheading" variants={fadeInUp}>
                Full-Stack & Game Developer
              </motion.h2>
              
              <motion.p className="about-description" variants={fadeInUp}>
                I bring creative visions to life through code, specializing in both web platforms and interactive games. With expertise in full-stack development and game engineering, I build robust systems and optimize performance for seamless experiences. I believe great technology should feel invisible, empowering users to fully immerse themselves in digital worlds.
              </motion.p>
              <motion.p className="about-description" variants={fadeInUp}>
                My focus is on clean, maintainable code and scalable architecture. Whether architecting web applications or developing game mechanics, I approach every project with precision and a user-first mindset.
              </motion.p>

              {/* Skills Columns */}
              <motion.div className="skills-container" variants={containerVariants}>
                <motion.div className="skill-column" variants={scaleIn}>
                  <motion.div 
                    className="skill-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3 className="skill-title" variants={fadeInUp}>Full-Stack Development</motion.h3>
                    <motion.p className="skill-description" variants={fadeInUp}>
                      Building modern, responsive web applications with optimized frontend interfaces and scalable backend systems.
                    </motion.p>
                  </motion.div>
                </motion.div>
                
                <motion.div className="skill-column" variants={scaleIn}>
                  <motion.div 
                    className="skill-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3 className="skill-title" variants={fadeInUp}>Game Development</motion.h3>
                    <motion.p className="skill-description" variants={fadeInUp}>
                      Creating engaging gameplay experiences with performant code, intuitive mechanics, and immersive worlds.
                    </motion.p>
                  </motion.div>
                </motion.div>
                
                <motion.div className="skill-column" variants={scaleIn}>
                  <motion.div 
                    className="skill-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3 className="skill-title" variants={fadeInUp}>Technical Problem-Solving</motion.h3>
                    <motion.p className="skill-description" variants={fadeInUp}>
                      Architecting elegant solutions to complex technical challenges across different platforms and domains.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Professional Gaming Background */}
        <div className="about-bg">
          <div className="circuit-pattern"></div>

          <div className="glitch-overlay"></div>
          <div className="scan-grid"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;