import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import pdf from "../../Assets/Resume/Curriculum_Vitae.pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Home() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} width="50%" className="img-fluid" />
            </Tilt>
            <br />
            <p
              style={{
                fontSize: "2em",
                marginBottom: "0.5em",
                marginTop: "0.5em",
              }}
            >
              <span className="purple"> Zirui Cheng </span>
            </p>
            <p
              style={{
                fontSize: "2em",
                marginBottom: "0.5em",
                marginTop: "0.5em",
              }}
            >
              <span className="purple"> 程子睿 </span>
            </p>
            <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
              chengzr19@mails.tsinghua.edu.cn
            </p>
            <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
              [
              <a href={pdf} target="_blank">
                Curriculum Vitae
              </a>
              ] [
              <a href="https://scholar.google.com/citations?user=tndPyfwAAAAJ&hl=en">
                Google Scholar
              </a>
              ] [<a href={"https://twitter.com/Zirui_Cheng_"}>Twitter</a>]
            </p>
          </Col>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              <h4>
                <b>About</b>
              </h4>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                  Welcome! I am Zirui Cheng (pronunciation: [tsɿʐui tʂʰəŋ]). I
                  am a fourth-year undergraduate student in the{" "}
                  <a href={"https://www.cs.tsinghua.edu.cn/csen/"}>
                    Department of Computer Science and Technology
                  </a>{" "}
                  at{" "}
                  <a href={"https://www.tsinghua.edu.cn/en/"}>
                    Tsinghua University
                  </a>
                  . <br />
                </p>
                <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                  My research interests lie in and <b>Machine Learning</b> and
                  <b> Human-Computer Interaction</b>. In my research, I seek to
                  mitigate the gap between principles of Human-Computer
                  Interaction and realities of Machine Learning in the practice
                  of designing, developing, and evaluating ML-enabled systems.
                  <br />
                </p>
                <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                  {/* During my undergraduate life, I have been fortunate to work
                  with Prof.{" "}
                  <a href={"https://www.thecoalalab.com/kenholstein"}>
                    Ken Holstein
                  </a>{" "}
                  at Carnegie Mellon University, Prof.{" "}
                  <a href="http://shift-3.com/">Haojian Jin</a> at University of
                  California San Diego, and Prof.{" "}
                  <a href="https://pi.cs.tsinghua.edu.cn/lab/people/YuntaoWang/en/">
                    Yuntao Wang
                  </a>{" "}
                  at Tsinghua University. */}
                  During my undergraduate life, I also worked as a research
                  intern at Carnegie Mellon University and University of
                  California San Diego.
                </p>
              </div>
              <h4>
                <b>Updates</b>
              </h4>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <ul>
                  <li>
                    (May 2024) I will be attending ICLR 2024 in Vienna, Austria.
                  </li>
                  <li>
                    (July 2023) I will be attending DIS 2023 in Pittsburgh,
                    Pennsylvania, USA.
                  </li>
                  <li>
                    (April 2023) I will be attending CHI 2023 in Hamburg,
                    Germany.
                  </li>
                </ul>
              </div>
              {/* <Card
                className="info-card"
                style={{ marginBottom: "0.5em", marginTop: "0.5em" }}
              >
                <Card.Text>
                  📢 I am looking for a Ph.D. position starting from 2024 Fall!
                </Card.Text>
              </Card> */}
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
