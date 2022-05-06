import React from "react";
import "./Home.css";
import SocialLinks from "../SocialLinks";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1 className="hero-text">
          Dane Alex
          <br />
          Hoffmann.
        </h1>
        <h5 className="hero-subtext">software developer & digital designer</h5>
        <SocialLinks />
      </div>
    </div>
  );
};
