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
              I was born and raised in{" "}
              <a href="https://en.wikipedia.org/wiki/Huai%27an">
                Huai'an, China
              </a>
              . During my undergraduate, I have also lived in Beijing, China and
              Pittsburgh, PA.
            </li>
            <li>
              Outside of research, I enjoy indoor workouts 🏃 and outdoor
              adventures 🏔️.
            </li>
            <li>
              I speak Chinese, English, and German. Although my native language
              is Mandarin, I can speak both the Wu and Yue dialects.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Personal;
