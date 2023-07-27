import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Card } from "react-bootstrap";
import Zurich_tower from "../../Assets/Misc/Zurich_tower.jpg";
import Luzern from "../../Assets/Misc/Luzern.jpg";
import Geneva from "../../Assets/Misc/Geneva.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ padding: "10px" }}>
          <h4 style={{ textAlign: "left" }}>
            <b>Recent Footsteps</b>
          </h4>
          <hr></hr>
        </Row>
        <Carousel>
          <Carousel.Item>
            <Card style={{ padding: 10, border: 0 }}>
              <Card.Img src={Zurich_tower} />
            </Card>
            <Carousel.Caption>
              <h4>
                <i>
                  <b>Zurich, 2023</b>
                </i>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ padding: 10, border: 0 }}>
              <Card.Img src={Luzern} />
            </Card>
            <Carousel.Caption>
              <h4>
                <i>
                  <b>Luzern, 2023</b>
                </i>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ padding: 10, border: 0 }}>
              <Card.Img src={Geneva} />
            </Card>
            <Carousel.Caption>
              <h4>
                <i>
                  <b>Geneva, 2023</b>
                </i>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
        <br />
        <p style={{ textAlign: "left" }}>
          <i>
            "If you are lucky enough to have lived in Paris as a young man, then
            wherever you go for the rest of your life, it stays with you, for
            Paris is a movable feast."
          </i>{" "}
        </p>
        <p style={{ textAlign: "right" }}>- Ernest Hemingway, 1950.</p>
      </Container>
    </Container>
  );
}

export default About;
