import React from "react";
import "./home.css";
import Typed from "react-typed";
import mgikunda from "./mgikunda.jpg";
import CssBaseline from "@material-ui/core/CssBaseline";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Container from "@material-ui/core/Container";
import Mycard from "../../components/card/mycard";
const home = () => {
  return (
    <>
      <div className="sidebar">
        <img src={mgikunda} alt="pict" />
        <AnchorLink className="aa" href="#home">
          Home
        </AnchorLink>
        <AnchorLink className="aa" href="#about">
          About
        </AnchorLink>
        <AnchorLink className="aa" href="#skills">
          Contact
        </AnchorLink>
        <AnchorLink className="aa" href="#card">
          About
        </AnchorLink>
      </div>

      <div className="content">
        <section id="home">
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
          <p>Hi,</p>
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
          <p>Adobe Photoshop</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div
              className="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "90%" }}
            >
              90%
            </div>
          </div>
          <p>Photography</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div
              className="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "80%" }}
            >
              <div className="w3-center w3-text-white">80%</div>
            </div>
          </div>
          <p>Illustrator</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div
              className="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "75%" }}
            >
              75%
            </div>
          </div>
          <p>Media</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div
              className="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "50%" }}
            >
              50%
            </div>
          </div>
        </section>
        <section id="about">
          <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
              Work Experience
            </h2>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Front End Developer / w3schools.com</b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015
                - <span className="w3-tag w3-teal w3-round">Current</span>
              </h6>
              <p>
                Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel
                in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora
                soluta ea et odio, unde doloremque repellendus iure, iste.
              </p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Web Developer / something.com</b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012
                - Dec 2014
              </h6>
              <p>
                Consectetur adipisicing elit. Praesentium magnam consectetur vel
                in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora
                soluta ea et odio, unde doloremque repellendus iure, iste.
              </p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Graphic Designer / designsomething.com</b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010
                - Mar 2012
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              <br />
            </div>
          </div>
        </section>
        <section id="card">
          <Mycard />

          <p>jjkk</p>
          <p>jjkk</p>
          <p>jjkk</p>
          <p>jjkk</p>
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
