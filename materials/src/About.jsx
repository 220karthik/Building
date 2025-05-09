import React from "react";
import "./About.css";

const achievements = [
  { title: "10,000+ Deliveries", description: "Delivered materials to over 10,000 construction sites with excellence." },
  { title: "20 Years of Excellence", description: "Two decades of trusted service in the construction industry." },
  { title: "Certified Materials", description: "Providing ISO-certified, top-grade materials only." },
];

const projects = [
  {
    name: "Pollachi mahalingam college",
    image: "https://drmcet.ac.in/wp-content/uploads/2022/06/banner2-1000x400-1.jpg",
    description: "Supplied structural and finishing materials for a this building."
  },
  {
    name: "Green Valley Villas",
    image: "https://i.pinimg.com/736x/f5/7c/6c/f57c6cd313dff7f52b20de401a925f2b.jpg",
    description: " Build and Delivered eco-conscious supplies to 30+ luxury villas."
  },
  {
    name: "City Shop Renovation",
    image: "https://imagecdn.99acres.com/media1/11938/19/238779775M-1734839581320.webp",
    description: "Material partner in this retail refurbishment."
  }
];

export default function AboutUs() {
  return (
    <div className="about-background">
      <div className="about-overlay">
        <div className="about-container">
          <p className="about-title">We are a premier supplier of high-quality construction materials, serving developers and contractors
            with unmatched reliability, certified products, and on-time delivery across all project scales</p>
          <h1 className="about-description">
           ABOUT US
          </h1>

          <section className="achievements">
            <h2 className="section-title">Our Achievements</h2>
            <div className="card-grid">
              {achievements.map((item, idx) => (
                <div key={idx} className="card">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="projects">
            <h2 className="section-title">Our Past Projects</h2>
            <div className="project-grid">
              {projects.map((project, idx) => (
                <div key={idx} className="project-card">
                  <img src={project.image} alt={project.name} className="project-image" />
                  <div className="project-content">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
