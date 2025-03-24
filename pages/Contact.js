import { useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";


export default function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll(".scroll-effect");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="contact-page">
      <Head>
        <title>Contact Me</title>
      </Head>

      <Navbar />

      {/* ✅ Contact Section */}
      <section className="contact-container scroll-effect">
        <div className="contact-box">
          <h1 className="neon-text">Get in Touch</h1>
          <p className="contact-text">
            Have a project in mind? Let’s collaborate!
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" className="input" />
            <input type="email" placeholder="Your Email" className="input" />
            <textarea placeholder="Your Message" className="textarea"></textarea>
            <button type="submit" className="gg-button">Send Message</button>
          </form>

          {/* ✅ Contact Info */}
          <div className="contact-info">
            <p>📧 Email: <a href="mailto:rsansudha798@gmail.com">rsansudha798@gmail.com</a></p>
            <p>📱 LinkedIn: <a href="https://www.linkedin.com/in/sudharsanrofficial" target="_blank">linkedin.com/in/sudharsanrofficial</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}