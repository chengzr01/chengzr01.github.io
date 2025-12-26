import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Misc() {
  return (
    <Container
      fluid
      style={{
        boxSizing: "border-box",
        paddingTop: "2em",
        paddingBottom: "2em",
        width: "80%",
      }}
      id="misc"
    >
      <Row style={{ marginTop: "2em" }}>
        <Col md={12} style={{ textAlign: "left" }}>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Essays
          </p>
          <ul>
            <li>
              Mechanism Design for Human-AI Alignment. <br />{" "}
              <i>
                Coursework Project for Algorithmic Game Theory, 2025 Fall.
                Advised by Prof. Ruta Mehta.
              </i>{" "}
              <br />[
              <a
                href={require("../../Assets/Projects/cheng2025mechanism.pdf")}
                target="_blank"
                rel="noreferrer"
              >
                Essay
              </a>
              ]
            </li>
          </ul>
        </Col>
      </Row>
      {/* <Row style={{ marginTop: "2em" }}>
        <Col md={12} style={{ textAlign: "left" }}>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Coursework
          </p>
          <ul>
            <li>
              <b>Computer Science</b>: Algorithmic Game Theory, Statistical
              Reinforcement Learning, Advanced Natural Language Processing.
            </li>
            <li>
              <b>Economics</b>: Intermediate Microeconomics, Intermediate
              Macroeconomics, Econometrics (I), Econometrics (II), Game Theory.
            </li>
          </ul>
        </Col>
      </Row> */}
      <Row>
        <Col md={12} style={{ textAlign: "left" }}>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Personal
          </p>
          <ul>
            <li>
              I speak Chinese, English, German, and French. Although my native
              language is Mandarin, I can speak both the Wu and Yue dialects of
              Chinese.
            </li>
            <li>
              Outside of research, I enjoy indoor workouts and outdoor
              adventures.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Misc;
