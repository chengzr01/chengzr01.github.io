import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhotoCard from "./PhotoCard";

function Photography() {
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
        <p
          style={{
            fontSize: "1.5em",
            marginBottom: "0.5em",
            marginTop: "0.5em",
          }}
        >
          Photography
        </p>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Colorado Springs.jpg")}
            description="Colorado Springs, USA"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/San José.jpg")}
            description="San José, Costa Rica"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Alajuela.jpg")}
            description="Alajuela, Costa Rica"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Chicago.jpg")}
            description="Chicago, USA"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Salzburg.jpg")}
            description="Salzburg, Austria"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Munich.jpg")}
            description="Munich, Germany"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/San Diego.jpg")}
            description="San Diego, USA"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Jeddah.jpg")}
            description="Jeddah, Saudi Arabia"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Geneva.jpg")}
            description="Geneva, Switzerland"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Zurich.jpg")}
            description="Zurich, Switzerland"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Beijing.jpg")}
            description="Beijing, China"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Suzhou.jpg")}
            description="Suzhou, China"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Photography;
