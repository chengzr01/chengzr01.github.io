import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Page() {
  return (
    <Container
      fluid
      style={{
        boxSizing: "border-box",
        paddingTop: "2em",
        paddingBottom: "2em",
        width: "80%",
      }}
      id="about"
    >
      <Row
        style={{
          width: "100%",
          marginBottom: "1em",
          marginTop: "1em",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "2em",
            marginBottom: "1em",
            marginTop: "1em",
          }}
        >
          Zirui Cheng
        </p>

        <Col md={9} style={{ textAlign: "left" }}>
          <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            Hi! I am Zirui Cheng (程子睿). I am an M.S. student in Computer
            Science at the{" "}
            <a href="https://www.illinois.edu/">
              University of Illinois Urbana-Champaign
            </a>{" "}
            (UIUC), starting from 2024 Fall. I have been fortunate to work with
            Prof. Hao Peng at UIUC. Previously, I received my Bachelor's degrees
            in Computer Science and Technology and Economics and Finance from{" "}
            <a href={"https://www.tsinghua.edu.cn/"}>Tsinghua University</a>. I
            have also been a visiting student at Princeton University.
          </p>
          <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            My research broadly lies at the intersection of machine learning,
            natural language processing, economics and computation, and
            reinforcement learning. Recently, I have been focusing on enabling
            language models as strategic agents. My research explores the{" "}
            <b>theoretical foundations</b>, <b>algorithmic approaches</b>, and{" "}
            <b>societal impacts</b> related to the strategic behaviors in these
            systems. In doing so, I aim to advance the general intelligence of
            language models, while also providing algorithmic insights into
            alignment and oversight.
          </p>
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}></div>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Recent Work
          </p>
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
                [Code]
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>ResearchTown: Simulator of Human Research Community</b>
                <br />
                Haofei Yu*, Zhaochen Hong*,{" "}
                <u>
                  <b>Zirui Cheng</b>
                </u>
                *, Kunlun Zhu*, Keyang Xuan, Jinwei Yao, Tao Feng, Jiaxuan You.
                <br />
                <b>ICML 2025</b> – Forty-second International Conference on
                Machine Learning.
                <br />[<a href="https://arxiv.org/abs/2412.17767">arXiv</a>] [
                <a href="https://github.com/ulab-uiuc/research-town">Code</a>]
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
              src={require("../../Assets/Profile_Bayern.jpg")}
              width="75%"
              className="img-fluid"
            />
          </Tilt>
          <i style={{ fontSize: "0.75em", color: "lightgray" }}>
            Bayern, Deutschland
          </i>
          <Row style={{ marginBottom: "0.5em", marginTop: "0.5em" }}></Row>
          <p
            style={{
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            [
            <a
              href={require("../../Assets/Resume/Curriculum_Vitae.pdf")}
              target="_blank"
            >
              Curriculum Vitae
            </a>
            ] [<a href={"https://twitter.com/Zirui_Cheng_"}>X (Twitter)</a>] [
            <a href="https://scholar.google.com/citations?user=tndPyfwAAAAJ&hl=en">
              Google Scholar
            </a>
            ] [
            <a href="https://www.linkedin.com/in/zirui-cheng-044024284/">
              LinkedIn
            </a>
            ]
          </p>
          <p
            style={{
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            ziruic4@illinois.edu
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Page;
