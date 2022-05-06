import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            className="dane-profile"
            src="./images/dane-profile.jpg"
            alt="dane-profile"
          />
        </div>
        <div className="about-text">
          <h2 className="about-titleText">About.</h2>
          <p className="about-bodyText">
            I am a software developer and digital designer from Cape Town, South
            Africa. I am passionate about finding the intersection between
            beautiful design and seamless functionality. In my spare time you
            can find me looking for new music and artists to obsess about.
          </p>
          <div className="resume-button-container">
            <a
              className="resume-button"
              class="button"
              href="https://drive.google.com/file/d/1ySQx-zn0rr7fnfA_87SNfO4G6cyaxhXO/view?usp=sharing"
            >
              See My Resume!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
