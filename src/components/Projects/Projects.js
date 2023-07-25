import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import privacy_picture from "../../Assets/Projects/privacy.png";
import privacy_paper from "../../Assets/Projects/privacy.pdf";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> Publication </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <Card className="project-card-view">
              <Container>
                <Row
                  style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                  <Col md={2}>
                    <Card.Img
                      variant="top"
                      src={privacy_picture}
                      alt="card-img"
                    />
                  </Col>
                  <Col md={10}>
                    <Card.Body>
                      <Card.Title style={{ textAlign: "left" }}>
                        <b>
                          Modeling the Trade-off of Privacy Presearvation and
                          Activity Recognition on Low-Resolution Images
                        </b>
                      </Card.Title>
                      <Card.Text style={{ textAlign: "left" }}>
                        Yuntao Wang*,{" "}
                        <u>
                          <b>Zirui Cheng</b>
                        </u>
                        *, Xin Yi, Yan Kong, Xueyang Wang, Xuhai Xu, Yukang Yan,
                        Chun Yu, Shwetak Patel, Yuanchun Shi. <i>(CHI'23)</i>
                        <br />[
                        <a href={privacy_paper} target="_blank">
                          Paper
                        </a>
                        ] [
                        <a href="https://www.youtube.com/watch?v=QVe-tPDPT18">
                          Video
                        </a>
                        ]
                      </Card.Text>
                      {"\n"}
                      {"\n"}
                    </Card.Body>
                  </Col>
                </Row>
              </Container>
            </Card>
          </Col>
        </Row>
        <p>* indicates co-first authorship.</p>
      </Container>
    </Container>
  );
}

export default Projects;
