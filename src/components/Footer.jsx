import React from "react";
import "../styles/global.css";
import "../styles/footer.css";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <h2 className="footer_name">Kiran Phuyal</h2>
        <p className="footer_subtitle">Computer Engineering Student</p>

        <div className="socials">
          <ul>
            <li>
              <a
                href="https://github.com/Kiran7Ray"
                target="_blank"
                rel="noopener noreferrer"
                className="social_btn"
                aria-label="Kiran Phuyal on GitHub (opens in a new tab)"
              >
                <FaGithub aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kiran-phuyal"
                target="_blank"
                rel="noopener noreferrer"
                className="social_btn"
                aria-label="Kiran Phuyal on LinkedIn (opens in a new tab)"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/kiran.phuyal.556401"
                target="_blank"
                rel="noopener noreferrer"
                className="social_btn"
                aria-label="Kiran Phuyal on Facebook (opens in a new tab)"
              >
                <FaFacebook aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Kiran Phuyal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
