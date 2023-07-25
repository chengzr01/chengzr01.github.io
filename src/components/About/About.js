import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Zurich from "../../Assets/Misc/Zurich.jpg";
import Luzern from "../../Assets/Misc/Luzern.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ padding: "10px" }}>
          <h4 style={{ textAlign: "left" }}>
            <b>Recent Footsteps</b>
          </h4>
          <hr></hr>
          <p style={{ textAlign: "left" }}>
            <i>
              "If you are lucky enough to have lived in Paris as a young man,
              then wherever you go for the rest of your life, it stays with you,
              for Paris is a movable feast."
            </i>{" "}
          </p>
          <p style={{ textAlign: "right" }}>- Ernest Hemingway, 1950.</p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4}>
              <Card style={{ padding: 10 }}>
                <Container>
                  <Card.Img style={{ padding: 10 }} src={Zurich} />
                  <Card.Text>
                    <i>Zürich | 苏黎世</i>
                  </Card.Text>
                </Container>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ padding: 10 }}>
                <Container>
                  <Card.Img style={{ padding: 10 }} src={Luzern} />
                  <Card.Text>
                    <i>Lucerne | 卢塞恩</i>
                  </Card.Text>
                </Container>
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          {/* <h4 style={{ textAlign: "left" }}>
            <b>Personal Moments</b>
          </h4>
          <hr></hr> */}
        </Row>
      </Container>
    </Container>
  );
}

export default About;
