import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Blogs() {
  return (
    <Container
      fluid
      style={{
        boxSizing: "border-box",
        paddingTop: "2em",
        paddingBottom: "2em",
        width: "80%",
      }}
      id="blogs"
    >
      <Row>
        <Col md={12} style={{ textAlign: "left" }}>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Blogs
          </p>
          <ul>
            <li>
              <b>Mechanism Design for Human-AI Alignment</b> [
              <a
                href={require("../../Assets/Projects/cheng2025mechanism.pdf")}
                target="_blank"
                rel="noreferrer"
              >
                File
              </a>
              ] <br />{" "}
              <i>
                Course Project for Algorithmic Game Theory, 2025 Fall. Advised
                by Prof. Ruta Mehta.
              </i>{" "}
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Blogs;
