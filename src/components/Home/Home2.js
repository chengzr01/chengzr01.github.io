import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import Card from "react-bootstrap/Card";

function Home2() {
  const [nameHover, setNameHover] = useState(false);
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} width="50%" className="img-fluid" />
            </Tilt>
            <p style={{ fontSize: "2.4em" }}>
              <br /> <span className="purple"> Zirui Cheng </span>
            </p>
            <p style={{ fontSize: "1.8em" }}>
              <span className="purple"> [tsɿʐui tʂʰəŋ] 程子睿 </span>
            </p>
            <p style={{ fontSize: "1.2em" }}>
              <span className="purple"> chengzr19@mails.tsinghua.edu.cn </span>
            </p>
            <Row>
              <Col md={12} className="home-about-social">
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://scholar.google.com/citations?user=tndPyfwAAAAJ&hl=en"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <SiGooglescholar />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/Zirui_Cheng_"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/zirui-cheng-044024284/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillLinkedin />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/cheng_zirui"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              <h4>
                <b>About</b>
              </h4>
              I am an undergraduate student in the{" "}
              <a href={"https://www.cs.tsinghua.edu.cn/csen/"}>
                Department of Computer Science and Technology
              </a>{" "}
              at{" "}
              <a href={"https://www.tsinghua.edu.cn/en/"}>
                Tsinghua University
              </a>
              , expected to graduate in June, 2024.
              <br />
              My research focuses on designing, developing, and evaluating
              AI-enabled systems for human-facing tasks. I draw on approaches
              from Human-Computer Interaction, Artificial Intelligence, and
              Software Engineering. Please find more information in my{" "}
              <a href={"/#/curriculum_vitae"}>curriculum vitae</a>.<br></br>
              <br></br>
              <h4>
                <b>Updates</b>
              </h4>
              <ul>
                <li>
                  (July, 2023) I will be attending{" "}
                  <a href={"https://dis.acm.org/2023/"}>DIS 2023</a> in
                  Pittsburgh, PA, USA.
                </li>
                <li>
                  (April, 2023) I will be attending{" "}
                  <a href={"https://chi2023.acm.org/"}>CHI 2023</a> in Hamburg,
                  Germany.
                </li>
              </ul>
              <br></br>
              <Card className="info-card">
                <Card.Text>
                  📢 I am looking for <b>a Ph.D. position</b> in Human-Computer
                  Interaction or Software Engineering starting from{" "}
                  <b>2024 Fall</b>!
                </Card.Text>
              </Card>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
