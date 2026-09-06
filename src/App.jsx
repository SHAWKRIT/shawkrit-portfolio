import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      number: "01",
      title: "TikiTopple",
      type: "Real-Time Multiplayer Strategy Game",
      description:
        "A real-time multiplayer strategy game where players use secret Tikis and action cards to outrank each other. I worked with Firebase Firestore to synchronize live game state across players.",
      tags: ["React", "JavaScript", "Firebase", "Firestore"],
    },
    {
      number: "02",
      title: "Flashcard AI",
      type: "Interactive Learning Application",
      description:
        "An application that converts lecture notes and PDFs into interactive, multilingual flashcards. The project includes PDF parsing, asynchronous file handling, and 3D flip-card animations.",
      tags: ["React", "PDF Parsing", "JavaScript", "3D UI"],
    },
    {
      number: "03",
      title: "CGPA Calculator",
      type: "Academic Utility",
      description:
        "A student-focused application designed to calculate and track academic performance, making CGPA calculation easier and more convenient.",
      tags: ["Web Development", "JavaScript", "Education"],
    },
    {
      number: "04",
      title: "Arduino Quiz Buzzer",
      type: "Hardware-Based System",
      description:
        "An Arduino-based quiz buzzer system where multiple participants can respond to a question and the system identifies the first participant to press the buzzer.",
      tags: ["Arduino", "C/C++", "Hardware", "Logic"],
    },
  ];

  const skills = [
    {
      category: "Programming",
      items: ["C", "C++", "Python"],
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      category: "Database",
      items: ["MySQL", "Firebase", "Firestore"],
    },
    {
      category: "Soft Skills",
      items: [
        "Problem Solving",
        "Teamwork",
        "Time Management",
        "Adaptability",
      ],
    },
  ];
 const certifications = [
  {
    title: "Programming Fundamentals using Python — Part 1",
    file: "/certificates/python part1.pdf",
  },
  {
    title: "Programming Fundamentals using Python — Part 2",
    file: "/certificates/python part2.pdf",
  },
  {
    title: "React — Infosys Springboard",
    file: "/certificates/react.pdf",
  },
  {
    title: "CV / Resume",
    file: "/certificates/Cv shawkrit.pdf",
  },
  {
    title: "Indian Laws",
    file: "/certificates/indian laws.pdf",
  },
  {
    title: "Board2Code Hackathon",
    file: "/certificates/board2code.pdf",
  },
];

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Certifications",
    "Contact",
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <button
          className="logo"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          <span>SR</span>
          <small>SHAWKRIT RAJ</small>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Hero */}
      <main>
        <section id="home" className="hero section">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              B.TECH CSE STUDENT · DEVELOPER
            </p>

            <h1>
              Building ideas
              <br />
              into <span>working products.</span>
            </h1>

            <p className="hero-description">
              I'm Shawkrit Raj, a Computer Science student at Lovely
              Professional University focused on software development,
              web applications, and learning through hands-on projects.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => scrollToSection("projects")}
              >
                Explore my work <span>↗</span>
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("contact")}
              >
                Get in touch
              </button>
            </div>
            <div className="hero-photo">
 <img src="/image/profile.jpeg" alt="Shawkrit Raj" />
</div>
          

            <div className="hero-stats">
              <div>
                <strong>8.0</strong>
                <span>CGPA</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Featured Projects</span>
              </div>

              <div>
                <strong>2026</strong>
                <span>Active Builder</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="code-card">
              <div className="code-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>shawkrit.js</span>
              </div>

              <div className="code-body">
                <p>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span> = {"{"}
                </p>

                <p className="indent">
                  <span className="code-green">name</span>:{" "}
                  <span className="code-yellow">"Shawkrit Raj"</span>,
                </p>

                <p className="indent">
                  <span className="code-green">role</span>:{" "}
                  <span className="code-yellow">"Developer"</span>,
                </p>

                <p className="indent">
                  <span className="code-green">focus</span>: [
                </p>

                <p className="double-indent">
                  <span className="code-yellow">"Software"</span>,
                </p>

                <p className="double-indent">
                  <span className="code-yellow">"Web Development"</span>,
                </p>

                <p className="double-indent">
                  <span className="code-yellow">"Problem Solving"</span>
                </p>

                <p className="indent">],</p>

                <p className="indent">
                  <span className="code-green">mindset</span>:{" "}
                  <span className="code-yellow">"Build & Improve"</span>
                </p>

                <p>{"};"}</p>

                <p className="code-comment">
                  // learning by doing, one project at a time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section about-section">
          <div className="section-heading">
            <span>01</span>
            <h2>About me</h2>
          </div>

          <div className="about-grid">
            <div className="about-intro">
              <p className="large-text">
                I believe the best way to learn technology is to{" "}
                <span>build with it.</span>
              </p>
            </div>

            <div className="about-content">
              <p>
                I'm a second-year B.Tech Computer Science and Engineering
                student at Lovely Professional University. I joined LPU in
                August 2025 and currently maintain a CGPA of 8.0.
              </p>

              <p>
                Alongside my coursework, I've been actively developing my
                technical skills through self-driven projects. I enjoy
                understanding a problem, building a functional solution, and
                continuously improving it.
              </p>

              <p>
                One experience that helped me grow was teaching Python
                fundamentals through YouTube during June and July 2026.
                Creating educational content pushed me to understand
                programming concepts deeply and explain them clearly.
              </p>

              <div className="about-highlight">
                <span>MY APPROACH</span>
                <strong>
                  Understand the problem → Build the solution → Keep improving
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <span>02</span>
            <h2>Skills</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <div className="skill-card" key={skillGroup.category}>
                <span className="skill-number">
                  {String(skills.indexOf(skillGroup) + 1).padStart(2, "0")}
                </span>

                <h3>{skillGroup.category}</h3>

                <div className="skill-list">
                  {skillGroup.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <span>03</span>
            <h2>Selected projects</h2>
          </div>

          <p className="section-description">
            A collection of self-driven projects built to turn ideas into
            practical, working experiences.
          </p>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">{project.number}</div>

                <div className="project-main">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="project-arrow">↗</div>
              </article>
            ))}
          </div>

          <div className="github-box">
            <div>
              <span className="github-label">MORE ON GITHUB</span>
              <h3>Explore my repositories</h3>
            </div>

            <a
              href="https://github.com/SHAWKRIT?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              GitHub ↗
            </a>
          </div>
        </section>

        {/* Experience / Activities */}
        <section id="education" className="section journey-section">
          <div className="section-heading">
            <span>04</span>
            <h2>Journey</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">AUG 2025 — PRESENT</div>

              <div className="timeline-content">
                <span>EDUCATION</span>
                <h3>Lovely Professional University</h3>
                <p>B.Tech — Computer Science & Engineering</p>
                <strong>CGPA: 8.0 / 10</strong>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">JUN — JUL 2026</div>

              <div className="timeline-content">
                <span>TEACHING · SELF-DRIVEN</span>
                <h3>Python Fundamentals Educator</h3>
                <p>
                  Created educational content and taught Python fundamentals
                  through YouTube, focusing on making programming concepts
                  simple and understandable.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2026</div>

              <div className="timeline-content">
                <span>HACKATHON</span>
                <h3>Board2Code Hackathon</h3>
                <p>
                  Participated in Board2Code Hackathon 2026 organized through
                  NetPractice Campus × Lovely Professional University.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2026</div>

              <div className="timeline-content">
                <span>HACKATHON</span>
                <h3>Devstrom Hackathon</h3>
                <p>
                  Participated in a collaborative development environment,
                  gaining practical experience in building and presenting
                  technology-based solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="section certifications-section">
          <div className="section-heading">
            <span>05</span>
            <h2>Certifications</h2>
          </div>

         <div className="certifications-grid">
  {certifications.map((certificate, index) => (
    <a
      className="certificate-card"
      key={certificate.title}
      href={certificate.file}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{String(index + 1).padStart(2, "0")}</span>

      <p>{certificate.title}</p>

      <span className="certificate-arrow">↗</span>
    </a>
  ))}
</div>

          <div className="learning-note">
            <span>CONTINUOUS LEARNING</span>
            <p>
              I treat learning as an ongoing process — not something that
              stops after completing one course.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact-section">
          <div className="contact-content">
            <p className="eyebrow">LET'S CONNECT</p>

            <h2>
              Have an idea?
              <br />
              <span>Let's build it.</span>
            </h2>

            <p>
              I'm always interested in learning, building new projects, and
              connecting with people who enjoy creating useful technology.
            </p>

            <div className="contact-links">
              <a
                href="https://github.com/SHAWKRIT?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=shawkrit@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-link"
>
  Email ↗
</a>

               <a
    href="https://www.linkedin.com/in/shawkrit-raj"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Shawkrit Raj</p>

        <p>
          Built with <span>React</span> · Designed to keep learning
        </p>

        <button onClick={() => scrollToSection("home")}>
          Back to top ↑
        </button>
      </footer>
    </div>
  );
}

export default App;