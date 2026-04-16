import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Page() {
  return (
    <Container fluid className="page-container" id="about">
      <Row
        style={{
          width: "100%",
          marginBottom: "1em",
          marginTop: "1em",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            paddingTop: "1em",
            paddingBottom: "1em",
          }}
        >
          ZIRUI CHENG
        </h1>

        <Col md={9} style={{ textAlign: "left" }}>
          <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            Hi! I am Zirui Cheng (程子睿). I am an M.S. student in Computer
            Science at the{" "}
            <a href="https://illinois.edu">
              University of Illinois Urbana-Champaign
            </a>{" "}
            (UIUC), starting from 2024 Fall. I have been fortunate to work with
            Prof. Hao Peng at UIUC. I have also been a visiting student at{" "}
            <a href="https://www.princeton.edu">Princeton University</a>,
            working with Prof. Peter Henderson. Previously, I completed my
            undergraduate studies in Computer Science and Economics at{" "}
            <a href="https://www.tsinghua.edu.cn/">Tsinghua University</a>.
          </p>
          <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            My interest broadly lies at the intersection of machine learning,
            natural language processing, and economics and computation.
            Recently, I have been focusing on enabling language models as
            strategic agents. My research explores the theoretical foundations,
            algorithmic mechanisms, and societal impacts related to the
            strategic behaviors in these systems. In doing so, I aim to improve
            the societal impacts of language models, while also providing
            algorithmic insights into alignment and oversight.
          </p>
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}></div>
          <h2 className="section-title">Recent Updates</h2>
          <ul>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                I will be joining Princeton University as a Ph.D. student in
                Computer Science in Fall 2026.
              </div>
            </li>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                I will be attending ICLR 2026 in Rio de Janeiro, Brazil.
              </div>
            </li>
          </ul>
          <h2 className="section-title">Recent Work</h2>
          <ul>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>Towards Strategic Persuasion with Language Models</b>
                <br />
                <u>
                  <b>Zirui Cheng</b>
                </u>
                , Jiaxuan You.
                <br />
                <b>ICLR 2026</b> – Fourteenth International Conference on
                Learning Representations.
                <br />[<a href="https://arxiv.org/abs/2509.22989">arXiv</a>]
              </div>
            </li>
          </ul>
        </Col>
        <Col md={3} style={{ textAlign: "center" }}>
          <Tilt
            style={{
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            <img
              src={require("../../assets/Profile_Louisiana.jpg")}
              width="75%"
              className="img-fluid"
            />
          </Tilt>
          <i style={{ fontSize: "0.75em", color: "lightgray" }}>
            Louisiana, USA
          </i>
          <Row
            style={{
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            <p
              style={{
                marginBottom: "0.5em",
                marginTop: "0.5em",
                textAlign: "center",
              }}
            >
              [
              <a href="https://scholar.google.com/citations?user=tndPyfwAAAAJ&hl=en">
                Google Scholar
              </a>
              ] [<a href={"https://twitter.com/Zirui_Cheng_"}>X</a>] [
              <a href="https://www.linkedin.com/in/zirui-cheng-044024284/">
                LinkedIn
              </a>
              ]
            </p>
            <p
              style={{
                marginBottom: "0.5em",
                marginTop: "0.5em",
                textAlign: "center",
              }}
            >
              ziruic4@illinois.edu
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Page;
