import React from "react";
import "./Contact.module.css";
import { getImageUrl } from "../../utils.js";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to reach Out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="EmailIcon" />
          <a href="mailto:harshharsani007@gmail.com">harshharsani007</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedinIcon"
          />
          <a href="https://www.linkedin.com/in/hharsani/">linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="githubIcon" />
          <a href="https://github.com/HARSHHARSANI">github</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
