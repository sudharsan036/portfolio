import Head from "next/head";
import Navbar from "../components/Navbar";


const projects = [
  {
    title: "Fantastic Fourzz",
    description: "A smart event ticket booking platform with real-time updates, integrated with payment gateways and event discovery features.",
    image: "/f4-high-resolution-logo-removebg-preview.png", // Ensure this image is inside /public/images/
    video: "/videos/fanstastic.mp4", // Ensure this video is inside /public/videos/
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express.js"],
    liveDemo: "https://fantastic-fourzz.vercel.app",
    github: "https://github.com/sudharsan036/sample"
  },
  {
    title: "eCommerce Website",
    description: "A fully functional online store with Razorpay payment integration, real-time order tracking, and a user-friendly interface.",
    image: "/lenovo-high-resolution-logo__1_-removebg-preview.png", // Ensure this image exists
    video: "/videos/ecommerce.mp4", // Ensure this video exists
    technologies: ["Next.js", "MongoDB", "Razorpay", "Tailwind CSS"],
    liveDemo: "https://ecommerce-.vercel.app",
    github: "https://github.com/sudharsan036/lenovo-website"
  }
];

export default function Projects() {
  return (
    <div className="projects-container">
      <Head>
        <title>Projects | My Portfolio</title>
      </Head>

      <Navbar />

      <section className="projects-section">
        <h1 className="projects-heading">My Projects</h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <video controls className="project-video">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="project-technologies">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <div className="project-links">
                <a href={project.liveDemo} target="_blank" className="button live-demo">Live Demo</a>
                <a href={project.github} target="_blank" className="button github">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
