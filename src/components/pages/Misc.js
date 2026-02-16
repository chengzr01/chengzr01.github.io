import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhotoCard from "../shared/PhotoCard";

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
            <li>My name is pronounced as [tsɿʐui tʂʰəŋ].</li>
            <li>I speak Chinese, English, and German.</li>
            <li>
              Outside of research, I enjoy indoor workouts and outdoor
              adventures.
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Gallery
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Paris.png")}
            description="Paris, France"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Alajuela.jpg")}
            description="Alajuela, Costa Rica"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Munich.jpg")}
            description="Munich, Germany"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Oregon.png")}
            description="Portland, USA"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Suzhou.jpg")}
            description="Suzhou, China"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../Assets/Misc/Geneva.jpg")}
            description="Geneva, Switzerland"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Misc;
