import React from "react";
import "./home.css";
import Typed from "react-typed";
import mgikunda from "./mgikunda.jpg";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
const home = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="hero">
          <img src={mgikunda} alt="the devs pic" className="pic" />
          <div className="hero-text">
            <h1>I am Mgikunda</h1>
            <Typed
              strings={[
                "I am a fullstack Web Developer",
                "I am an IOT enthusiast",
                "I enjoy writing code",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default home;
