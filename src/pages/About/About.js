import React, { useEffect } from "react";
import "animate.css";
import WOW from "wowjs";
import Title from "../../components/Title/Title";
import styles from "./about.module.scss";
import { FaDownload } from "react-icons/fa";
import myImage from "../../assets/myImage2.png";

export default function About() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <div style={{ paddingTop: 70 }} id="about">
      <div className={styles.about}>
        <div className="container">
          <Title className={styles.title} title={"About me"} />
          <div className={styles.aboutContainer}>
            <div
              className={`${styles.aboutLeft} wow animate__animated animate__fadeInLeft`}
            >
              <img src={myImage} alt="" />
            </div>
            <div
              className={`${styles.aboutRight} wow animate__animated animate__fadeInRight`}
            >
              <p>
                Hi, I'm Long Do, my interests are in Front End Engineering, and
                I love to create beautiful and performant products with
                delightful user experiences.
              </p>
              <p>
                I'm eager to learn and grow in the field, actively seeking
                opportunities to enhance my skills.
              </p>
              <p>
                I can work with ReactJS and Javascript at a basic level. I'm
                trying to learn more day by day to become more proficient. Good
                communication and always listen to people. I also have
                experience in HTML, SCSS, ES6,...
              </p>
              <div className={styles.aboutBtn}>
                <a
                  target="_blank"
                  href="https://www.topcv.vn/xem-cv/CAJUBANdU1YBBVsIDQ5dBAFVBAUDUFQBVwsADA9d2a?ta_source=EditCVInAfterSaveCV"
                  rel="noreferrer"
                >
                  <FaDownload /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
