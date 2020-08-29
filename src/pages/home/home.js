import React from "react";
import "./home.css";
import ReactContactForm from "react-mail-form";
import Typed from "react-typed";
import mgikunda from "./mgikunda.jpg";
import CssBaseline from "@material-ui/core/CssBaseline";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Container from "@material-ui/core/Container";
import Mycard from "../../components/card/mycard";
import ScrollAnimation from "react-animate-on-scroll";
const home = () => {
  return (
    <>
      <div className="sidebar">
        <img src={mgikunda} alt="pict" id="mg" />
        <AnchorLink className="aa" href="#home">
          Home
        </AnchorLink>
        <AnchorLink className="aa" href="#about">
          About
        </AnchorLink>
        <AnchorLink className="aa" href="#skills">
          skills
        </AnchorLink>
        <AnchorLink className="aa" href="#resume">
          Resume
        </AnchorLink>
        <AnchorLink className="aa" href="#card">
          projects
        </AnchorLink>
        <div style={{ marginTop: "50px" }}>
          {" "}
          <p>petermbiriri8957@gmail.com</p>
          <p>copyright &copy; Mgikunda:2020</p>
        </div>
      </div>
      <div id="nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#" id="gg">
            Mgikunda
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <AnchorLink className="nav-link" href="#home">
                  Home <span className="sr-only">(current)</span>
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#about">
                  About <span className="sr-only">(current)</span>
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#skills">
                  skills <span className="sr-only">(current)</span>
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#resume">
                  resume <span className="sr-only">(current)</span>
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#card">
                  Projects <span className="sr-only">(current)</span>
                </AnchorLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="content">
        <section id="home">
          <img src={mgikunda} alt="pict" id="mobi" />
          <Typed strings={["Hi,Am Mgikunda"]} typeSpeed={40} showCursor={false}>
            <h1 />
          </Typed>
          <br />

          <Typed
            strings={[
              "I am a fullstack web developer",
              "I am an IOT enthusiast",
              "I enjoy writing code",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </section>
        <section id="about">
          <h2 id="ac">ABOUT ME</h2>

          <p>
            I am a self-taught fullstack web developer from Kenya.I am also an
            IOT enthusiast practising with arduino
          </p>
          <p>
            I have a passion in coding because it solves the challenges we face
            in our daily lives.I dream of making an impact in society by making
            the best softwares.
          </p>
        </section>
        <section id="skills">
          <p className="w3-large">
            <b>
              <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
              Skills
            </b>
          </p>
          <p>Node.js & es6</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div
              className="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "90%" }}
            >
              90%
            </div>
          </div>

          <p>Mongodb&Firebase</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div
              className="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "95%" }}
            >
              95%
            </div>
          </div>

          <p>git</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div
              className="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "99%" }}
            >
              99%
            </div>
          </div>
          <p>jest</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div
              className="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "90%" }}
            >
              90%
            </div>
          </div>
          <p>Html5,css3,bootstrap</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div
              className="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "99%" }}
            >
              99%
            </div>
          </div>
          <p>React&redux</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div
              className="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "99%" }}
            >
              99%
            </div>
          </div>

          <p>Javascript</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div
              className="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "95%" }}
            >
              95%
            </div>
          </div>
          <p>Data analysis:Python;pandas</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div
              className="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "99%" }}
            >
              90%
            </div>
          </div>
        </section>
        <section id="resume">
          <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
              Education
            </h2>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Moi University-Electrical and Electronics Engineering</b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>Sep 2018
                - <span className="w3-tag w3-teal w3-round">Current</span>
              </h6>
              <p>
                I pursue a bachelor's degree in electrical and electonics
                engineering at Moi University which is one of my interests. I
                love undestanding how electronics function and what other better
                way than to pursue this course.I love what I get from the
                school.
              </p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Jovian.ml</b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>Aug 2020
                - <span className="w3-tag w3-teal w3-round">Current</span>
              </h6>
              <p>
                Writing code is something I enjoy.Freecodecamp offer the one of
                the best programming course .That makes me try out most of their
                courses.
              </p>
              <hr />
            </div>
          </div>
        </section>
        <section id="card">
          <ScrollAnimation animateIn="fadeIn">
            <h2 id="projo">
              <b>Projects I have done</b>
            </h2>
            <Mycard />
          </ScrollAnimation>
        </section>
        <section>
          <footer>
            <div style={{ textAlign: "center", backgroundColor: "beige" }}>
              {" "}
              <p>petermbiriri8957@gmail.com</p>
              <p>copyright &copy; Mgikunda:2020</p>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
};

export default home;

/* <CssBaseline />
      <Container maxWidth="sm">
        <div classNameName="hero" id="home">
          <img src={mgikunda} alt="the devs pic" classNameName="pic" />
          <div classNameName="hero-text">
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
      </Container> */
