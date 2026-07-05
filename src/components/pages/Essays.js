import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Essays() {
  return (
    <Container fluid className="page-container" id="essays">
      <Row>
        <Col md={12} style={{ textAlign: "left" }}>
          <h2 className="section-title">Essays</h2>
          <ul>
            <li>
              <Link to="/essays/mechanism-design-for-human-ai-alignment">
                <b>Mechanism Design for Human-AI Alignment</b>
              </Link>{" "}
              <br /> <i>December 2025.</i>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Essays;
