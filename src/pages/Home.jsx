import React from "react";
import "../styles/global.css";
import "../styles/home.css";
import { Link } from "react-router-dom";
import myImage from "../assets/profilepic.jpg";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
function Home() {
  return (
    <div className="home_container">
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
          Web development, and engineering applications.
        </p>

        <div className="action_area">
          <div className="main_buttons">
            {/* Applied classes directly to Link, removed the <button> wrap */}
            <Link to="/skills" className="btn skills_btn">
              View skills
            </Link>

            <Link to="/contact" className="btn contact_btn">
              Contact Me
            </Link>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="social_links_button">
          <ul>
            <li>
              <button
                onClick={() =>
                  window.open("https://github.com/Kiran7Ray", "_blank")
                }
                className="social_btn"
              >
                <FaGithub style={{ fontSize: "25px", color: "#f2f6f9" }} />
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/kiran-phuyal-9a0999371",
                    "_blank",
                  )
                }
                className="social_btn"
              >
                <FaLinkedin style={{ fontSize: "25px", color: "#0A66C2" }} />
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  window.open("https://www.facebook.com/", "_blank")
                }
                className="social_btn"
              >
                <FaFacebook style={{ fontSize: "25px", color: "#1877F2" }} />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT COLUMN: MEDIA & TECH */}
      <div className="right_section">
        <div className="image_wrapper">
          <img src={myImage} alt="Kiran Phuyal pic" className="profile_img" />
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
  );
}

export default Home;
