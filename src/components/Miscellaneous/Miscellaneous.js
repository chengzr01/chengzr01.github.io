import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Card } from "react-bootstrap";
import Zurich from "../../Assets/Misc/Zurich.jpg";
import Luzern from "../../Assets/Misc/Luzern.jpg";
import Geneva from "../../Assets/Misc/Geneva.jpg";
import SanDiego from "../../Assets/Misc/San Diego.jpg";
import Pittsburgh from "../../Assets/Misc/Pittsburgh.jpg";
import Jeddah from "../../Assets/Misc/Jeddah.jpg";
import Suzhou from "../../Assets/Misc/Suzhou.jpg";

function Miscellaneous() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ padding: "10px" }}>
          <h1>
            <b>Travelling</b>
          </h1>
          <div style={{ textAlign: "center", padding: "10px" }}>
            <i>Der Mensch kann zwar tun, was er will.</i>
            <br></br>
            <i>aber er kann nicht wollen, was er will.</i>
            <br></br>– Arthur Schopenhauer
          </div>
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
                <b>San Diego</b>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Card
              style={{
                padding: 10,
                border: 0,
              }}
            >
              <Card.Img src={Pittsburgh} />
            </Card>
            <Carousel.Caption>
              <h4>
                <b>Pittsburgh</b>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ padding: 10, border: 0 }}>
              <Card.Img src={Zurich} />
            </Card>
            <Carousel.Caption>
              <h4>
                <b>Zürich</b>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ padding: 10, border: 0 }}>
              <Card.Img src={Geneva} />
            </Card>
            <Carousel.Caption>
              <h4>
                <b>Genève</b>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ padding: 10, border: 0 }}>
              <Card.Img src={Luzern} />
            </Card>
            <Carousel.Caption>
              <h4>
                <b>Luzern</b>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ padding: 10, border: 0 }}>
              <Card.Img src={Jeddah} />
            </Card>
            <Carousel.Caption>
              <h4>
                <b>جدة</b>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ padding: 10, border: 0 }}>
              <Card.Img src={Suzhou} />
            </Card>
            <Carousel.Caption>
              <h4>
                <b>苏州</b>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
}

export default Miscellaneous;