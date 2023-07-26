import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Zurich from "../../Assets/Misc/Zurich.jpg";
import Luzern from "../../Assets/Misc/Luzern.jpg";
import Interlaken from "../../Assets/Misc/Interlaken.jpg";
import Aba from "../../Assets/Misc/Aba.jpg";

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
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4}>
            <Card style={{ padding: 0, border: 0 }}>
              <Card.Img src={Zurich} />
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ padding: 0, border: 0 }}>
              <Card.Img src={Luzern} />
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ padding: 0, border: 0 }}>
              <Card.Img src={Aba} />
            </Card>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
    </Container>
  );
}

export default About;
