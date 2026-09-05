import React from "react";
import { FaBrain } from "react-icons/fa";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiMysql,
  SiPostgresql,
  SiOpencv,
  SiGit,
  SiGithub,
} from "react-icons/si";
import "../styles/global.css";
import "../styles/skills.css";
function Skills() {
  return (
    <div className="skills_section">
      <div className="skills_header">
        <h3>WHAT I KNOW</h3>
        <h1>My Skills</h1>
      </div>

      <div className="skills_boxes">
        {/* Programming */}
        <div className="skill_card">
          <h2>Programming</h2>
          <ul>
            <li>
              <SiPython className="skill_icon" color="#3776AB" /> Python
            </li>
            <li>
              <SiCplusplus className="skill_icon" color="#00599C" /> C / C++
            </li>
            <li>
              <SiJavascript className="skill_icon" color="#F7DF1E" /> JavaScript
            </li>
          </ul>
        </div>

        {/* Web Development */}
        <div className="skill_card">
          <h2>Web Development</h2>
          <ul>
            <li>
              <SiReact className="skill_icon" color="#61DAFB" /> React
            </li>
            <li>
              <SiNextdotjs className="skill_icon" color="#ffffff" /> Next.js
            </li>
            <li>
              <SiHtml5 className="skill_icon" color="#E34F26" /> HTML5
            </li>
            <li>
              <SiCss className="skill_icon" color="#1572B6" /> CSS
            </li>
          </ul>
        </div>

        {/* Database */}
        <div className="skill_card">
          <h2>Database</h2>
          <ul>
            <li>
              <SiMysql className="skill_icon" color="#4479A1" /> MySQL
            </li>
            <li>
              <SiPostgresql className="skill_icon" color="#4169E1" /> PostgreSQL
            </li>
          </ul>
        </div>

        {/* AI / Machine Learning */}
        <div className="skill_card">
          <h2>AI / Machine Learning</h2>
          <ul>
            <li>
              <FaBrain className="skill_icon" color="#e50b0b" /> Machine
              Learning
            </li>
            <li>
              <SiOpencv className="skill_icon" color="#5C3EE8" /> OpenCV
            </li>
            <li>
              <SiPython className="skill_icon" color="#3776AB" /> Data
              Engineering
            </li>
          </ul>
        </div>
        {/* Tools */}
        <div className="skill_card">
          <h2>Tools</h2>
          <ul>
            <li>
              <SiGit className="skill_icon" color="#F05032" /> Git
            </li>
            <li>
              <SiGithub className="skill_icon" color="#ffffff" /> GitHub
            </li>
          </ul>
        </div>

        {/* Extra Card */}
        <div className="skill_card extra_card">
          <h2>// Always Learning...</h2>
          <p>
            Continuously expanding knowledge in deep learning, cloud
            infrastructure, and system design.
          </p>
          <br />
          <div className="current_status">
            <h3>Currently exploring</h3>
            <p>
              <span className="tag">Python</span>
              <span className="tag">OpenCV</span>
              <span className="tag">React</span>
              <span className="tag">Next.js</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
