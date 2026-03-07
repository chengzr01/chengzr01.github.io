import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhotoCard from "../shared/PhotoCard";

function Misc() {
  return (
    <Container fluid className="page-container" id="misc">
      <Row>
        <Col md={12} style={{ textAlign: "left" }}>
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}></div>
          <h2 className="section-title">Teaching</h2>
          <ul>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>Software Design Lab</b>, University of Illinois at
                Urbana-Champaign [
                <a href="https://cs222-uiuc.pages.dev/">Website</a>]
              </div>
            </li>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>Deep Learning with Graphs</b>, University of Illinois at
                Urbana-Champaign [
                <a href="https://ulab-uiuc.github.io/CS598/">Website</a>]
              </div>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12} style={{ textAlign: "left" }}>
          <h2 className="section-title">Personal</h2>
          <ul>
            <li>My name is pronounced as [tsɿʐui tʂʰəŋ].</li>
            <li>I speak Chinese, English, and German.</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2 className="section-title">Gallery</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../assets/misc/Paris.png")}
            description="Paris, France"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../assets/misc/Alajuela.jpg")}
            description="Alajuela, Costa Rica"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../assets/misc/Munich.jpg")}
            description="Munich, Germany"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../assets/misc/Oregon.png")}
            description="Portland, USA"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../assets/misc/Suzhou.jpg")}
            description="Suzhou, China"
          />
        </Col>
        <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <PhotoCard
            width="360px"
            height="240px"
            url={require("../../assets/misc/Geneva.jpg")}
            description="Geneva, Switzerland"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Misc;
