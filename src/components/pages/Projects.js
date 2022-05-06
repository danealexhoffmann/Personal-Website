import React from "react";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <div className="projects-title">
          <h1 className="projects-titleText">Projects.</h1>
          <div className="projects-cards">
            <div className="projects-card 1">
              <img
                className="screenshot"
                src="./images/personal-site.jpg"
                alt="Personal Site Screenshot"
              />
              <h6 className="project-name">Personal Website</h6>
              <p className="project-description">
                My personal website which was built using
                <br /> React, React-dom and pure CSS. I built this
                <br /> to tell you a little bit about myself as well as
                <br /> show off my portfolio.
              </p>
              <div className="project-buttons">
                <a
                  class="button"
                  href="https://github.com/danealexhoffmann/Personal-Website"
                >
                  Live Demo
                </a>

                <a
                  class="button"
                  href="https://github.com/danealexhoffmann/Personal-Website"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="projects-card 2">
              <img
                className="screenshot"
                src="./images/daily-planner.jpg"
                alt="Personal Site Screenshot"
              />
              <h6 className="project-name name-two">Daily Planner</h6>
              <p className="project-description">
                I built this web-app while learning how to
                <br /> implement Redux inside of React. <br />
                Building this minimal Todo app helped me
                <br /> understand how state can be managed
                <br /> effectively using Redux and React-Redux.
              </p>
              <div className="project-buttons">
                <a class="button" href="https://dailyplanner2022.netlify.app/">
                  Live Demo
                </a>

                <a
                  class="button"
                  href="https://github.com/danealexhoffmann/Daily-Planner"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="projects-card 3">
              <img
                className="screenshot"
                src="./images/crypto-dashboard.jpg"
                alt="Personal Site Screenshot"
              />
              <h6 className="project-name name-three">Crypto Dashboard</h6>
              <p className="project-description description-three">
                I used multiple REST APIs in this web-app
                <br /> to fetch the latest information on various <br />
                crypto currencies, allowing you to make
                <br /> coversion calculations, see how a certian
                <br /> currency is peforming in the market and <br />
                see the latest news headlines in the
                <br /> crypto space.
              </p>
              <div className="project-buttons">
                <a
                  class="button"
                  href="https://cryptodailydashboard.netlify.app/"
                >
                  Live Demo
                </a>

                <a
                  class="button"
                  href="https://github.com/danealexhoffmann/Crypto-Dashboard"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
