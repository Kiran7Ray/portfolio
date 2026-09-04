import React from "react";
import "../styles/global.css";
import "../styles/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <h2 className="footer_name">Kiran Phuyal</h2>
        <h4 className="footer_subtitle">Computer Engineering Student</h4>

        <div className="socials">
          <ul>
            <li>
              <a
                href="https://github.com/Kiran7Ray"
                target="_blank"
                rel="noopener noreferrer"
                className="social_btn"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/kiran-phuyal-9a0999371"
                target="_blank"
                rel="noopener noreferrer"
                className="social_btn"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social_btn"
              >
                Facebook
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
