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
            <li>Mechanism Design for Human-AI Alignment</li>
          </ul>
        </Col>
      </Row>
      <Row style={{ marginTop: "2em" }}>
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
      </Row>
      {/* <Row>
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
              I was born and raised in Huai'an, a beautiful city in Jiangsu,
              China.
            </li>
            <li>
              I speak Chinese, English, and German. Although my native language
              is Mandarin, I can speak both the Wu and Yue dialects.
            </li>
            <li>
              Outside of research, I enjoy indoor workouts and outdoor
              adventures.
            </li>
          </ul>
        </Col>
      </Row> */}
    </Container>
  );
}

export default Misc;
