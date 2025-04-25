import { useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active"); // Apply the scaling effect
          } else {
            entry.target.classList.remove("active"); // Remove on scroll out
          }
        });
      },
      { threshold: 0.3 } // 30% of the element must be visible
    );

    const cards = document.querySelectorAll(".about-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="about-container">
      <Head>
        <title>About Me</title>
      </Head>
      <Navbar />

      <header className="about-header">
        <h1 className="neon-text">About Me</h1>
        <p className="subtitle">Passionate Web Developer | Frontend Specialist</p>
      </header>

      <section className="about-content">
        <div className="about-card">
          <h2>Who Am I?</h2>
          <p>
            Hi! I&apos;m a <strong>web developer</strong> with expertise in <strong>HTML, CSS, JavaScript, and Next.js</strong>.
            I love building user-friendly and modern web applications.
          </p>
        </div>

        <div className="about-card">
          <h2>My Journey</h2>
          <p>
            I started learning web development during my <strong>B.Tech in IT</strong> and have since built various projects,
            including <strong>Fantastic Fourzz</strong> (an event ticket booking platform) and <strong>eCommerce websites</strong>.
          </p>
        </div>

        <div className="about-card">
          <h2>What I Do</h2>
          <ul>
            <li>🔹 Build modern web applications with <strong>Next.js &amp; React</strong></li>
            <li>🔹 Design responsive and interactive UI</li>
            <li>🔹 Work with <strong>Node.js, Express.js, and MongoDB</strong></li>
            <li>🔹 Implement <strong>payment gateways &amp; event discovery algorithms</strong></li>
          </ul>
        </div>
      </section>

      <section className="about-contact">
        <h2>Let&apos;s Connect</h2>
        <p>📧 Feel free to reach out via email:  
          <strong className="email"> rsansudha798@gmail.com </strong>
        </p>
        
        <p>🔗 Connect with me on LinkedIn: 
          <a href="https://www.linkedin.com/in/sudharsanrofficial" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin-link">
            www.linkedin.com/in/sudharsanrofficial <i className="fab fa-linkedin"></i>
          </a>
        </p>
        <p>📥 Download CV:
         <a href="/SUDHARSAN RESUME.pdf" download className="download-button">
             Click Here to Download
         </a>
        </p>
      </section>
    </div>
  );
}