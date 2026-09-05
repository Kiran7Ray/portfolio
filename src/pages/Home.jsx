import React from "react";
import "../styles/global.css";
import "../styles/home.css";
import { Link } from "react-router-dom";
import myImage from "../assets/profilepic.jpg";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Home() {
  const projects = [
    {
      id: 1,
      title: "CCTV Automated Attendance System",
      description:
        "Computer vision pipeline that automates student attendance using real-time facial recognition.",
      tags: ["Python", "OpenCV", "MTCNN", "FACENET", "Deep Learning"],
      github: "https://github.com/Kiran7Ray/CCTV-based-attendace-system",
    },
  ];

  return (
    <div className="home_container">
      <div className="hero_section">
        {/* LEFT COLUMN: INTRO */}
        <div className="left_section">
          <h3 className="mini_title">Hello, I'm</h3>
          <h1 className="max_title">
            <span className="its_k">K</span>iran{" "}
            <span className="last_name">Phuyal</span>
          </h1>
          <p className="para1">Computer Engineering Student</p>
          <p className="para2">
            Interested in Artificial Intelligence, software development, <br />
            web development, and engineering applications.
          </p>

          <div className="action_area">
            <div className="main_buttons">
              <Link to="/skills" className="btn skills_btn">
                View skills
              </Link>
              <Link to="/contact" className="btn contact_btn">
                Contact Me
              </Link>
            </div>

            <div className="social_links_button">
              <ul>
                <li>
                  <a
                    href="https://github.com/Kiran7Ray"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_btn"
                  >
                    <FaGithub style={{ fontSize: "25px", color: "#f2f6f9" }} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/kiran-phuyal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_btn"
                  >
                    <FaLinkedin
                      style={{ fontSize: "25px", color: "#0A66C2" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/kiran.phuyal.556401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_btn"
                  >
                    <FaFacebook
                      style={{ fontSize: "25px", color: "#1877F2" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: MEDIA & TECH */}
        <div className="right_section">
          <div className="image_wrapper">
            <img src={myImage} alt="Kiran Phuyal" className="profile_img" />
          </div>

          <div className="current_status">
            <h3>Currently exploring</h3>
            <ul className="tech_tags">
              <li>
                <span className="tag">Python</span>
              </li>
              <li>
                <span className="tag">OpenCV</span>
              </li>
              <li>
                <span className="tag">React</span>
              </li>
              <li>
                <span className="tag">Next.js</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FEATURED PROJECTS SECTION */}
      <section className="featured_project">
        <div className="section_title_area">
          <h3>Featured Projects</h3>
        </div>

        <div className="project_grid">
          {projects.map((project) => (
            <div key={project.id} className="project_card">
              <div className="project_content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project_tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project_tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project_links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card_link"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
