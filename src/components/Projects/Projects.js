import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import privacy_picture from "../../Assets/Projects/trade-off-CHI'23.png";
import privacy_paper from "../../Assets/Projects/trade-off-CHI'23.pdf";
import Card from "react-bootstrap/Card";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> Publications </strong>
        </h1>
        {/* <p
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          * indicates co-first authorship
        </p> */}
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <h4>
            <b>Peer-Reviewed Publications</b>
          </h4>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Card className="project-card-view">
            <Container>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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
                        Modeling the Trade-off of Privacy Preservation and
                        Activity Recognition on Low-Resolution Images
                      </b>
                    </Card.Title>
                    <Card.Text style={{ textAlign: "left" }}>
                      <u>
                        <b>Zirui Cheng</b>
                      </u>
                      *, Yuntao Wang*, Xin Yi, Yan Kong, Xueyang Wang, Xuhai Xu,
                      Yukang Yan, Chun Yu, Shwetak Patel, Yuanchun Shi. *
                      indicates co-first authorship. <i>(CHI'23)</i>
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;