import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhotoCard from "./PhotoCard";

function Personal() {
  return (
    <Container
      fluid
      style={{
        boxSizing: "border-box",
        paddingTop: "2em",
        paddingBottom: "2em",
        width: "80%",
      }}
      id="about"
    >
      <Row>
        <Col xs={4}>
          <PhotoCard
            width="300px"
            height="200px"
            url={require("../../Assets/Misc/Zurich.jpg")}
            description="Zurich, Switzerland"
          />
        </Col>
        <Col xs={4}>
          <PhotoCard
            width="300px"
            height="200px"
            url={require("../../Assets/Misc/Munich.jpg")}
            description="Munich, Germany"
          />
        </Col>
        <Col xs={4}>
          <PhotoCard
            width="300px"
            height="200px"
            url={require("../../Assets/Misc/San Diego.jpg")}
            description="San Diego, USA"
          />
        </Col>
        <Col xs={4}>
          {" "}
          <PhotoCard
            width="300px"
            height="200px"
            url={require("../../Assets/Misc/Geneva.jpg")}
            description="Geneva, Switzerland"
          />
        </Col>
        <Col xs={4}>
          <PhotoCard
            width="300px"
            height="200px"
            url={require("../../Assets/Misc/Jeddah.jpg")}
            description="Jeddah, Saudi Arabia"
          />
        </Col>
        <Col xs={4}>
          <PhotoCard
            width="300px"
            height="200px"
            url={require("../../Assets/Misc/Suzhou.jpg")}
            description="Suzhou, China"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Personal;
