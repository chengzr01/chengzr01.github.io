import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Blogs() {
  return (
    <Container fluid className="page-container" id="blogs">
      <Row>
        <Col md={12} style={{ textAlign: "left" }}>
          <h2 className="section-title">Blogs</h2>
          <ul>
            <li>
              <b>Mechanism Design for Human-AI Alignment</b> [
              <a
                href={require("../../assets/projects/cheng2025mechanism.pdf")}
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
