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
            Hi! I'm Zirui Cheng (程子睿), an incoming Ph.D. student in Computer
            Science at{" "}
            <a href="https://www.princeton.edu">Princeton University</a>,
            working with Prof. Peter Henderson. Previously, I received my B.Eng.
            in Computer Science and Economics from{" "}
            <a href="https://www.tsinghua.edu.cn/">Tsinghua University</a>, and
            my M.S. in Computer Science from the{" "}
            <a href="https://illinois.edu">
              University of Illinois Urbana-Champaign
            </a>
            .
          </p>
          <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            My research interest lies in <b>machine learning</b>,{" "}
            <b>economics and computation</b>, and{" "}
            <b>natural language processing</b>. I study language models as
            strategic agents for society and science. My research explores the
            theoretical foundations, algorithmic methods, and societal impacts
            related to the strategic behaviors in these systems.
          </p>
          <div style={{ marginBottom: "1em", marginTop: "1em" }}></div>
          <h2 className="section-title">Recent Work</h2>
          <ul>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>
                  Using Cognitive Models to Improve Language Model Simulation of
                  Human Persuasion Games
                </b>
                <br />
                <u>
                  <b>Zirui Cheng</b>
                </u>
                *, Zeyu Shen*, Thomas L. Griffiths, and Peter Henderson.
                <br />
                <i>Preprint</i>.
                <br />[<a href="https://arxiv.org/abs/2606.17657">arXiv</a>] [
                <a href="https://github.com/chengzr01/persuasion-gym">code</a>]
                [
                <a href="https://princeton-polaris-lab.github.io/persuasion-webpage/index.html">
                  website
                </a>
                ]
              </div>
            </li>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>
                  Rhetorical Misalignment: Unintended Exploitation of Cognitive
                  Biases by Language Models
                </b>
                <br />
                <u>
                  <b>Zirui Cheng</b>
                </u>
                , Joey Chan, Simo Du, Chenhao Tan, Yue Guo, Hao Peng.
                <br />
                <i>Preprint</i>.
                <br />
                {/* [
                <a
                  href={require("../../assets/paper/cheng2026rhetorical.pdf")}
                  target="_blank"
                  rel="noreferrer"
                >
                  paper
                </a>
                ]  */}{" "}
                [arXiv] [
                <a href="https://github.com/chengzr01/rhetorical-misalignment">
                  code
                </a>
                ]
              </div>
            </li>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>Towards Strategic Persuasion with Language Models</b>
                <br />
                <u>
                  <b>Zirui Cheng</b>
                </u>
                , Jiaxuan You.
                <br />
                <i>
                  ICLR 2026 – Fourteenth International Conference on Learning
                  Representations
                </i>
                .
                <br /> [<a href="https://arxiv.org/abs/2509.22989">arXiv</a>]
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
              zirui.cheng@princeton.edu
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Page;
