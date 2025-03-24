import { useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";


export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active"); // Apply the scroll effect
          } else {
            entry.target.classList.remove("active"); // Remove effect when out of view
          }
        });
      },
      { threshold: 0.3 } // 30% of the element must be visible
    );

    const sections = document.querySelectorAll(".scroll-effect");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


    // Remove cursor after typing effect completes
    setTimeout(() => {
        document.getElementById("typewriter-text").classList.add("done");
    }, 3000); // Matches animation duration


  return (
    <div className="home-container">
      <Head>
        <title>My Portfolio</title>
      </Head>

      <Navbar />

      {/* ✅ Hero Section */}
      <header className="home-header scroll-effect">
        <div className="home-content">
          <h1 className="neon-text">Hello, I'm Your Sudharsan</h1>
          <h2 class="typewriter-container" id="typewriter-text">I'M A PASSIONATE WEB DEVELOPER</h2>
          <br></br>
          <p>
            I specialize in building modern, user-friendly, and high-performance web applications.
          </p>
          <p>
          "I’m a B.Tech IT final-year student with a strong passion for web development. I have experience building scalable applications using modern tech stacks, including Next.js, Laravel, MongoDB, and Express.js. My goal is to craft seamless user experiences with efficient and maintainable code."
          </p>
          <a href="/Projects" className="neon-button">View My Work</a>
        </div>

        {/* ✅ Profile Image */}
        <div className="home-image">
        <img src="/profile.png.png" alt="My Profile" className="profile-pic" />

        </div>
      </header>

      {/* ✅ About Section */}
      <section className="home-about scroll-effect">
        <h2 className="neon-text">About Me</h2>
        <p>
          I'm a <strong>frontend web developer</strong> with expertise in <strong>HTML, CSS, JavaScript, and Next.js</strong>.
          My focus is on <strong>creating visually appealing, responsive, and high-performance web applications</strong>.
        </p>
      </section>

      {/* ✅ Skills Section */}
      <section className="home-skills scroll-effect">
        <h2 className="neon-text">My Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">✨ HTML, CSS, JavaScript</div>
          <div className="skill-item">⚡ React & Next.js</div>
          <div className="skill-item">🛠 Node.js, Express.js, MongoDB</div>
          <div className="skill-item">💳 Payment Gateway Integration</div>
          <div className="skill-item">🚀 Event Discovery Algorithms</div>
        </div>
      </section>

      {/* ✅ Projects Section */}
      <section className="home-projects scroll-effect">
        <h2 className="neon-text">Projects</h2>
        <div className="projects-list">
          <div className="project-card">
            <h3>Fantastic Fourzz</h3>
            <p>🎟️ A smart event ticket booking platform with real-time updates.</p>
          </div>
          <div className="project-card">
            <h3>eCommerce Website</h3>
            <p>🛒 A fully functional online store integrated with <strong>Razorpay payment gateway</strong>.</p>
          </div>
        </div>
      </section>

      {/* ✅ Contact Section */}
      <section className="home-contact scroll-effect">
        <h2 className="neon-text">Let's Connect</h2>
        <p>📧 Email: <a href="mailto:your.email@example.com">rsansudha798@gmail.com</a></p>
        <p>📱 LinkedIn: <a href="www.linkedin.com/in/sudharsanrofficial" target="_blank">www.linkedin.com/in/sudharsanrofficial</a></p>
      </section>
    </div>
  );
}
