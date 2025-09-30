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
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            About
          </p>
          <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            Hi! I am Zirui Cheng (程子睿, [tsɿʐui tʂʰəŋ]). I am an M.S. student
            in Computer Science at the{" "}
            <a href="https://www.illinois.edu/">
              University of Illinois Urbana-Champaign
            </a>{" "}
            (UIUC), starting from 2024 Fall. I have been fortunate to work with
            Prof. <a href={"https://haopeng-nlp.github.io/"}>Hao Peng</a> and
            Prof. <a href={"https://cs.stanford.edu/~jiaxuan/"}>Jiaxuan You</a>{" "}
            at UIUC. Previously, I received my Bachelor's degree in{" "}
            <a href={"https://www.cs.tsinghua.edu.cn/"}>
              Computer Science and Technology
            </a>{" "}
            (major) and{" "}
            <a href={"https://www.sem.tsinghua.edu.cn/"}>
              Economics and Finance
            </a>{" "}
            (minor) from{" "}
            <a href={"https://www.tsinghua.edu.cn/"}>Tsinghua University</a>.
          </p>
          <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            My research broadly lies at the intersection of machine learning,
            natural language processing, and economics and computation.
            Recently, I have been focusing on the foundations of game theory and
            reinforcement learning for language models,with the aim of advancing
            language models as strategic agents, while also providing insights
            into problems in alignment, oversight, and societal impacts.
            <br />
          </p>
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}></div>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Updates
          </p>
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            <ul>
              <li>
                (November 2024) I will be attending CSCW 2024 in San José, Costa
                Rica.
              </li>
            </ul>
          </div>
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}></div>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Recent Publications
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
                <i>Preprint. Under Review.</i>
                <br />[<a href="https://arxiv.org/abs/2509.22989">arXiv</a>] [
                <a
                  href={require("../../Assets/Projects/cheng2025persuasion.pdf")}
                  target="_blank"
                >
                  Paper
                </a>
                ]
              </div>
            </li>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>ResearchTown: Simulator of Human Research Community</b>
                <br />
                Haofei Yu*, Zhaochen Hong*,{" "}
                <u>
                  <b>Zirui Cheng</b>
                </u>
                * , Kunlun Zhu*, Keyang Xuan, Jinwei Yao, Tao Feng, Jiaxuan You.
                (* indicates co-first author)
                <br />
                <b>ICML 2025</b> –{" "}
                <i>
                  Forty-second International Conference on Machine Learning.
                </i>
                <br />[<a href="https://arxiv.org/abs/2412.17767">arXiv</a>] [
                <a
                  href={require("../../Assets/Projects/yu2024researchtown.pdf")}
                  target="_blank"
                >
                  Paper
                </a>
                ] [<a href="https://github.com/ulab-uiuc/research-town">Code</a>
                ]
              </div>
            </li>
          </ul>
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}></div>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Teaching
          </p>
          <ul>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>CS222: Software Design Lab</b>, Teaching Assistant [
                <a href="https://cs222-uiuc.pages.dev/">Website</a>
                ]
                <br /> University of Illinois Urbana-Champaign, 2025 Spring
              </div>
            </li>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>CS598: Deep Learning with Graphs</b>, Teaching Assistant [
                <a href="https://ulab-uiuc.github.io/CS598/">Website</a>
                ]
                <br /> University of Illinois Urbana-Champaign, 2024 Fall
              </div>
            </li>
          </ul>
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}></div>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Miscellaneous
          </p>
          <div
            style={{
              marginBottom: "0.5em",
              marginTop: "0.5em",
              paddingLeft: "1.5em",
            }}
          >
            {/* [<a href="/#/personal">Personal</a>]  */}[
            <a href="/#/photos">Photos</a>]
          </div>
        </Col>
        <Col md={3} style={{ textAlign: "center" }}>
          <Tilt
            style={{
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            <img
              src={require("../../Assets/Profile.jpg")}
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
