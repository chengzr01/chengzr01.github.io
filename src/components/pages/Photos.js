import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhotoCard from "../shared/PhotoCard";

function Photos() {
  return (
    <Container
      fluid
      style={{
        boxSizing: "border-box",
        paddingTop: "2em",
        paddingBottom: "2em",
        width: "80%",
      }}
      id="photos"
    >
      <Row>
        <p
          style={{
            fontSize: "1.5em",
            marginBottom: "0.5em",
            marginTop: "0.5em",
          }}
        >
          Photos
        </p>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../assets/misc/Paris.png")}
            description="Paris, France"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../assets/misc/Alajuela.jpg")}
            description="Alajuela, Costa Rica"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../assets/misc/Munich.jpg")}
            description="Munich, Germany"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../assets/misc/Oregon.png")}
            description="Portland, USA"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../assets/misc/Suzhou.jpg")}
            description="Suzhou, China"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../assets/misc/Geneva.jpg")}
            description="Geneva, Switzerland"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Photos;
