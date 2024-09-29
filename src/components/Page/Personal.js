import React from "react";
import { Container } from "react-bootstrap";

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
    ></Container>
  );
}

export default Personal;
