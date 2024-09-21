import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
      <Row style={{ width: "100%", marginBottom: "1em", marginTop: "1em" }}>
        <p
          style={{
            fontSize: "2em",
            marginBottom: "1em",
            marginTop: "1em",
          }}
        >
          Zirui Cheng
        </p>
      </Row>
      <Row style={{ width: "100%", marginBottom: "1em", marginTop: "1em" }}>
        <p>
          [<a href="/#/home">Home</a>]
        </p>
      </Row>
    </Container>
  );
}

export default Personal;
