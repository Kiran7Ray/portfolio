import React from "react";
import "../styles/global.css";
import "../styles/about.css";
import myImage from "../assets/profilepic.jpg";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";

function About() {
  return (
    <div className="aboutme_section">
      <div className="aboutme_left_section">
        <h3>WHO I AM</h3>
        <h1>About Me</h1>
        <img src={myImage} alt="Kiran Phuyal pic" className="profile_img" />
      </div>

      <div className="aboutme_right_section">
        <p className="part1">
          Hi! I'm <span>Kiran Phuyal</span>, a Computer Engineering student with
          a passion for building intelligent systems and meaningful software. I
          enjoy bridging the gap between hardware and software, with a
          particular interest in Data Engineering and AI/ML applications.
        </p>

        <p className="part2">
          I'm driven by curiosity and the desire to create tools that solve
          real-world problems. Whether it's a computer vision system, a
          full-stack application, or a data pipeline,{" "}
          <strong>I'm always eager to learn and build.</strong>
        </p>

        <div className="education">
          <h1>Education</h1>
          <div>
            <div className="icon-header">
              <FaGraduationCap size={30} color="#E2A04A" />
            </div>
            <h2>Bachelor in Computer Engineering</h2>
            <h3>National College of Engineering, Tribhuvan University</h3>
            <p className="date">2026 - Present</p>
          </div>

          <div>
            <div className="icon-header">
              <FaUniversity size={30} color="#50E3C2" />
            </div>
            <h2>High School </h2>
            <h3>Liverpool Int´l College</h3>
            <p className="date">2021 - 2023</p>
          </div>

          <div>
            <div className="icon-header">
              <FaSchool size={30} color="#4A90E2" />
            </div>
            <h2>School </h2>
            <h3>Occidental Public School</h3>

            <h3>Anamnagar,Kathmandu</h3>
            <p className="date"></p>
          </div>
        </div>
      </div>

      <div className="interest">
        <h2>INTERESTS</h2>
        <ul>
          <li>AI & Machine Learning</li>
          <li>Data Engineering</li>
          <li>Computer Vision</li>
          <li>Full-Stack Development</li>
          <li>Software Architecture</li>
        </ul>
      </div>

      <div className="career_goal">
        <p>
          I aim to work at the intersection of AI research and practical
          software engineering, building systems that are not only technically
          sound but genuinely useful. Long term, I want to contribute to
          AI-driven products that improve how people work and learn.
        </p>
        <button className="resume_button" type="button">
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default About;
