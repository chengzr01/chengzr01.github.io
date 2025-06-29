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
        <p
          style={{
            fontSize: "1.5em",
            marginBottom: "0.5em",
            marginTop: "0.5em",
          }}
        >
          Personal
        </p>
      </Row>
    </Container>
  );
}

export default Personal;
