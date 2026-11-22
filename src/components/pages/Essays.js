import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Essays() {
  return (
    <Container fluid className="page-container" id="essays">
      <Row>
        <Col md={12} style={{ textAlign: "left" }}>
          <h2 className="section-title">Essays</h2>
          <ul>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>Mechanism Design for Human-AI Alignment</b>
                <br />
                <u>
                  <b>Zirui Cheng</b>
                </u>
                .
                <br />
                <i>December 2025.</i>
                <br />[
                <a
                  href={require("../../assets/paper/cheng2025mechanism.pdf")}
                  target="_blank"
                  rel="noreferrer"
                >
                  paper
                </a>
                ]
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Essays;
