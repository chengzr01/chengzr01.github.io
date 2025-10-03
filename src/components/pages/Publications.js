import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Publications() {
  return (
    <Container
      fluid
      style={{
        boxSizing: "border-box",
        paddingTop: "2em",
        paddingBottom: "2em",
        width: "80%",
      }}
      id="publications"
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
            Publications
          </p>
          <ul>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>Towards Strategic Persuasion with Language Models</b>
                <br />
                <u>
                  <b>Zirui Cheng</b>
                </u>
                , Jiaxuan You.
                <br />
                <i>Preprint. Under Review.</i>
                <br />[<a href="https://arxiv.org/abs/2509.22989">arXiv</a>] [
                <a
                  href={require("../../Assets/Projects/cheng2025persuasion.pdf")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Paper
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

export default Publications;
