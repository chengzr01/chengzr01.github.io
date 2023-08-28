import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Card } from "react-bootstrap";
import Zurich_tower from "../../Assets/Misc/Zurich_tower.jpg";
import Luzern from "../../Assets/Misc/Luzern.jpg";
import Geneva from "../../Assets/Misc/Geneva.jpg";
import SanDiego from "../../Assets/Misc/SanDiego.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="miscellaneous-heading" style={{ textAlign: "center" }}>
          <strong className="purple"> Miscellaneous </strong>
        </h1>
        <Row style={{ padding: "10px" }}>
          <h4 style={{ textAlign: "left" }}>
            <b>Recent Footsteps</b>
          </h4>
          <hr></hr>
        </Row>
        <Carousel fade>
          <Carousel.Item>
            <Card
              style={{
                padding: 10,
                border: 0,
              }}
            >
              <Card.Img src={SanDiego} />
            </Card>
            <Carousel.Caption>
              <h4>
                <b>San Diego, 2023</b>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ padding: 10, border: 0 }}>
              <Card.Img src={Zurich_tower} />
            </Card>
            <Carousel.Caption>
              <h4>
                <b>Zürich, 2023</b>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ padding: 10, border: 0 }}>
              <Card.Img src={Luzern} />
            </Card>
            <Carousel.Caption>
              <h4>
                <b>Luzern, 2023</b>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ padding: 10, border: 0 }}>
              <Card.Img src={Geneva} />
            </Card>
            <Carousel.Caption>
              <h4>
                <b>Genève, 2023</b>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <br />
        <br />
        <p name="footstep" style={{ textAlign: "left" }}>
          <i>
            "If you are lucky enough to have lived in{" "}
            <font color="gray">Paris</font> as a young man, then wherever you go
            for the rest of your life, it stays with you, for{" "}
            <font color="gray">Paris</font> is a movable feast."
          </i>{" "}
        </p>
        <p style={{ textAlign: "right" }}>- Ernest Hemingway, 1950.</p> */}
      </Container>
    </Container>
  );
}

export default About;
