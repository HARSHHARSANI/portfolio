import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me Sitting With My Lptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <l1 className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="CursorImage" />
            <div className={styles.aboutItemText}>
              <h3>Front-end Developer</h3>
              <p>
                I'm a Full-stack Developer with Experience in Building
                Responsive and Optimized Sites
              </p>
            </div>
          </l1>
          <l1 className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="serverIcon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and Optimized back-end systems
                and APIs
              </p>
            </div>
          </l1>
        </ul>
      </div>
    </section>
  );
};
