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
                  . During my undergraduate life, I also worked as a research
                  intern at Carnegie Mellon University and University of
                  California San Diego.
                </p>
                <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                  I am broadly interested in machine learning, natural language
                  processing, and human-computer interaction.
                  <br />
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
                </ul>
              </div>
            </p>
          </Col>
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
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
