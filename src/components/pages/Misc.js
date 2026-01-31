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
      <Row>
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
      <Row>
        <Col md={12} style={{ textAlign: "left" }}>
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}></div>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Teaching
          </p>
          <ul>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>Software Design Lab</b>, Teaching Assistant [
                <a href="https://cs222-uiuc.pages.dev/">Website</a>]
              </div>
            </li>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>Deep Learning with Graphs</b>, Teaching Assistant [
                <a href="https://ulab-uiuc.github.io/CS598/">Website</a>]
              </div>
            </li>
          </ul>
        </Col>
      </Row>
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
            <li>My name is pronounced as [tsɿʐui tʂʰəŋ] in IPA.</li>
            <li>I speak Chinese, English, and German.</li>
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
