import React, { useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "../styles/global.css";
import "../styles/contact.css";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    const currentTimestamp = new Date().toLocaleString();

    emailjs
      .sendForm("service_yxafxzo", "template_88e9hs6", form.current, {
        publicKey: "_ZVUlJ5dJEb8lpzJ4",
        templateParams: {
          time: ` (Sent at: ${currentTimestamp})`,
        },
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message, please try again.");
          setIsSending(false);
        },
      );
  };

  return (
    <div className="contact_section">
      <div className="contact_left_section">
        <h3>GET IN TOUCH</h3>
        <h1>Let's Connect</h1>

        <p className="contact_lead">
          Have a project opportunity, or idea? Feel free to get in touch.
        </p>

        <p className="contact_body">
          I'm currently open to internships, collaborative projects, and
          learning opportunities. Whether you're a recruiter, a fellow
          developer, or just want to say hello—{" "}
          <strong>my inbox is always open.</strong>
        </p>

        <div className="contact_info">
          <div className="info_card">
            <div className="icon_header">
              <FaEnvelope size={22} color="#ffffff" />
            </div>
            <div>
              <h2>Email</h2>
              <a href="mailto:keyrun602@gmail.com">keyrun602@gmail.com</a>
            </div>
          </div>

          <div className="info_card">
            <div className="icon_header">
              <FaGithub size={22} color="#ffffff" />
            </div>
            <div>
              <h2>GitHub</h2>
              <a
                href="https://github.com/Kiran7Ray"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kiran7Ray
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_right_section">
        <form className="contact_form" ref={form} onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name" // Maps directly to {{name}}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email" // Maps directly to {{email}}
              placeholder="name@email.com"
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message" // Maps directly to {{message}}
              placeholder="Your message..."
              required
            />
          </div>

          <button type="submit" className="submit_btn" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}{" "}
            {!isSending && <FaPaperPlane size={14} />}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
