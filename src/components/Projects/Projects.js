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
        </Row>
        <h4
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <b>Papers Under Reivew</b>
        </h4>
        <p
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <b>
            TreeQuestion: Assessing Conceptual Learning Outcomes with
            LLM-Generated Multiple-Choice Questions
          </b>{" "}
          (<i>as the leading author</i>)
          <br />
          <b>
            TeacherLM: Teaching to Fish Rather Than Giving the Fish, Language
            Modeling Likewise
          </b>{" "}
          (<i>as a supporting author</i>)
        </p>
        <p
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          * indicates co-first authorship.
        </p>
      </Container>
    </Container>
  );
}

export default Projects;
