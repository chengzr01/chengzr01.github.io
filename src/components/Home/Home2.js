import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import Card from "react-bootstrap/Card";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} width="50%" className="img-fluid" />
            </Tilt>
            <br />
            <p style={{ fontSize: "1.8em" }}>
              <span className="purple"> Zirui Cheng </span>
            </p>
            <p style={{ fontSize: "1.8em" }}>
              <span className="purple"> 程子睿 </span>
            </p>
            <p style={{ fontSize: "1.2em" }}>
              <span className="purple"> chengzr19@mails.tsinghua.edu.cn </span>
            </p>
            <Row>
              <Col md={12} className="home-about-social">
                {/* <ul className="home-about-social-links">
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
                </ul> */}
                [<a href={"/#/curriculum_vitae"}>Curriculum Vitae</a>] [
                <a href="https://scholar.google.com/citations?user=tndPyfwAAAAJ&hl=en">
                  Google Scholar
                </a>
                ] [<a href={"https://twitter.com/Zirui_Cheng_"}>Twitter</a>] [
                <a href={"https://www.linkedin.com/in/zirui-cheng-044024284/"}>
                  LinkedIn
                </a>
                ]
              </Col>
            </Row>
          </Col>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              <h4>
                <b>About</b>
              </h4>
              Welcome! I am Zirui Cheng (pronunciation: [tsɿʐui tʂʰəŋ]). I am a
              fourth-year undergraduate student in the{" "}
              <a href={"https://www.cs.tsinghua.edu.cn/csen/"}>
                Department of Computer Science and Technology
              </a>{" "}
              at{" "}
              <a href={"https://www.tsinghua.edu.cn/en/"}>
                Tsinghua University
              </a>
              . <br />
              My research seeks to mitigate the gap between principles of
              Human-Computer Interaction (HCI) and realities of Artificial
              Intelligence (AI) by researching the challenges in{" "}
              <i>designing</i>, <i>developing</i>, and <i>evaluating</i>{" "}
              AI-enabled systems.
              <br />
              During my undergraduate life, I have been fortunate to work with
              Prof.{" "}
              <a href={"https://www.thecoalalab.com/kenholstein"}>
                Ken Holstein
              </a>{" "}
              at Carnegie Mellon University, Prof.{" "}
              <a href="http://shift-3.com/">Haojian Jin</a> at University of
              California San Diego, and Prof.{" "}
              <a href="https://pi.cs.tsinghua.edu.cn/lab/people/YuntaoWang/en/">
                Yuntao Wang
              </a>{" "}
              at Tsinghua University.<br></br>
              <br></br>
              <h4>
                <b>Updates</b>
              </h4>
              <Card
                className="info-card"
                style={{ marginTop: 20, marginBottom: 20 }}
              >
                <Card.Text>
                  📢 I am looking for <b>a Ph.D. position</b> in Human-Computer
                  Interaction or Artificial Intelligence starting from{" "}
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
