import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ padding: "10px" }}>
          <h4 style={{ textAlign: "left" }}>
            <b>Recent Footsteps</b>
          </h4>
          <hr class="dotted"></hr>
          <p style={{ textAlign: "left" }}>
            <i>
              "If you are lucky enough to have lived in Paris as a young man,
              then wherever you go for the rest of your life, it stays with you,
              for Paris is a movable feast."
            </i>{" "}
          </p>
          <p style={{ textAlign: "right" }}>- Ernest Hemingway, 1950.</p>
          <br />
          <br />
          <h4 style={{ textAlign: "left" }}>
            <b>Personal Moments</b>
          </h4>
          <hr class="dotted"></hr>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
