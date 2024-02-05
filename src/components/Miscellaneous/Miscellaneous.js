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
    <Container
      fluid
      style={{
        textAlign: "left",
        position: "relative",
        paddingBottom: "30px",
        paddingTop: "150px",
        width: "60%",
      }}
    >
      <Container>
        <h2
          style={{
            textAlign: "center",
          }}
        >
          <b>Miscellaneous</b>
        </h2>
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "0.5em",
            paddingBottom: "0.5em",
          }}
        >
          <h4>
            <b>Travelling</b>
          </h4>
        </Row>
        {/* <Row
          style={{
            justifyContent: "center",
            paddingTop: "0.5em",
            paddingBottom: "0.5em",
          }}
        >
          <i>
            Der Mensch kann zwar tun, was er will. Aber er kann nicht wollen,
            was er will.
          </i>
          <p>– Arthur Schopenhauer</p>
        </Row> */}
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "0.5em",
            paddingBottom: "0.5em",
          }}
        >
          <Carousel fade>
            <Carousel.Item>
              <Card>
                <Card.Img src={SanDiego} />
              </Card>
              <Carousel.Caption>
                <h4>
                  <b>San Diego</b>
                </h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Img src={Pittsburgh} />
              </Card>
              <Carousel.Caption>
                <h4>
                  <b>Pittsburgh</b>
                </h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Img src={Zurich} />
              </Card>
              <Carousel.Caption>
                <h4>
                  <b>Zürich</b>
                </h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Img src={Geneva} />
              </Card>
              <Carousel.Caption>
                <h4>
                  <b>Genève</b>
                </h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Img src={Luzern} />
              </Card>
              <Carousel.Caption>
                <h4>
                  <b>Luzern</b>
                </h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Img src={Jeddah} />
              </Card>
              <Carousel.Caption>
                <h4>
                  <b>جدة</b>
                </h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Img src={Suzhou} />
              </Card>
              <Carousel.Caption>
                <h4>
                  <b>苏州</b>
                </h4>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <br />
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "0.5em",
            paddingBottom: "0.5em",
          }}
        >
          <h4>
            <b>Personal</b>
          </h4>
        </Row>
        <Row
          style={{
            paddingTop: "0.5em",
            paddingBottom: "0.5em",
          }}
        >
          <p>
            Before joining the Department of Computer Science and Technology, I
            studied in the{" "}
            <a href="https://www.sem.tsinghua.edu.cn/en/">
              School of Economics and Management
            </a>{" "}
            at Tsinghua University. Back then, I also worked as a financial
            analyst at banking companies including{" "}
            <a href="https://www.group.citic/en/">CITIC Securities</a>.
          </p>
        </Row>
      </Container>
    </Container>
  );
}

export default Miscellaneous;
