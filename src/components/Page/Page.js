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
            Hi! I am Zirui Cheng (程子睿, [tsɿʐui tʂʰəŋ]). I am a M.S. student
            in Computer Science at the{" "}
            <a href="https://www.illinois.edu/">
              University of Illinois Urbana-Champaign
            </a>{" "}
            starting from 2024 Fall. I received my Bachelor of Engineering
            degree in{" "}
            <a href={"https://www.cs.tsinghua.edu.cn/"}>
              Computer Science and Technology
            </a>{" "}
            (major) and Bachelor of Economics degree in{" "}
            <a href={"https://www.sem.tsinghua.edu.cn/"}>
              Economics and Finance
            </a>{" "}
            (minor) from{" "}
            <a href={"https://www.tsinghua.edu.cn/"}>Tsinghua University</a>.
            Previously, I also worked as a research intern at Carnegie Mellon
            University and University of California San Diego.
          </p>
          <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            My research interest lies at the intersection of{" "}
            <b>machine learning</b> and <b>human-computer interaction</b>. I
            have been interested in building systems to scaffold human
            interactions with AI systems as well as developing algorithms to
            advance AI systems through human interactions.
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
              <li>
                (May 2024) I will be attending ICLR 2024 in Vienna, Austria.
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
            Publications
          </p>
          <p
            style={{
              fontSize: "1em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            <i>Peer-Reviewed Papers</i>
          </p>
          <ul>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>How Far Are We From AGI?</b>
                <br />
                Tao Feng*, Chuanyang Jin*, Jingyu Liu*, Kunlun Zhu*, Haoqin Tu,{" "}
                <u>
                  <b>Zirui Cheng</b>
                </u>
                , Guanyu Lin, Jiaxuan You.
                <br />
                <b>TMLR 2024</b> –{" "}
                <i>Transactions on Machine Learning Research (Forthcoming).</i>
              </div>
            </li>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>
                  Wikibench: Community-Driven Data Curation for AI Evaluation on
                  Wikipedia
                </b>{" "}
                <br />
                Tzu-Sheng Kuo, Aaron Halfaker,{" "}
                <u>
                  <b>Zirui Cheng</b>
                </u>
                , Jiwoo Kim, Meng-Hsin Wu, Tongshuang Wu, Kenneth Holstein,
                Haiyi Zhu.
                <br />
                <b>CHI 2024</b> –{" "}
                <i>
                  2024 ACM CHI Conference on Human Systems in Computing Systems
                </i>
                . <br />[
                <a
                  href={"https://dl.acm.org/doi/10.1145/3613904.3642278"}
                  target="_blank"
                >
                  ACM Digital Library
                </a>
                ] [
                <a href={"https://arxiv.org/abs/2402.14147"} target="_blank">
                  arXiv Page
                </a>
                ] [
                <a
                  href={require("../../Assets/Projects/wikibench_chi'24_paper.pdf")}
                  target="_blank"
                >
                  Paper
                </a>
                ] [
                <a
                  href="https://www.youtube.com/watch?v=VQVNKjjrlJ0"
                  target="_blank"
                >
                  Video
                </a>
                ]<br />
                <a href="https://heal-workshop.github.io/">HEAL@CHI'24</a> –
                Human Centered Evaluation and Auditing of Large Language Models
                <br />
                <a href="https://wikiworkshop.org/">Wiki Workshop 2024</a> [
                <a
                  href={require("../../Assets/Projects/wikibench_wiki'24_paper.pdf")}
                >
                  Paper
                </a>
                ]
              </div>
            </li>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>
                  TreeQuestion: Assessing Conceptual Learning Outcomes with
                  LLM-Generated Multiple-Choice Questions
                </b>{" "}
                <br />
                <u>
                  <b>Zirui Cheng</b>
                </u>
                , Jingfei Xu, Haojian Jin.
                <br />
                <b>CSCW 2024</b> –{" "}
                <i>
                  2024 ACM SIGCHI Conference on Computer-Supported Cooperative
                  Work & Social Computing
                </i>
                .
                <br />
                [ACM Digital Library] [arXiv Page] [
                <a
                  href={require("../../Assets/Projects/treequestion_cscw'24_paper.pdf")}
                >
                  Paper
                </a>
                ] [Video]
              </div>
            </li>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>
                  Modeling the Trade-off of Privacy Preservation and Activity
                  Recognition on Low-Resolution Images
                </b>{" "}
                <br />
                Yuntao Wang*,{" "}
                <u>
                  <b>Zirui Cheng</b>
                </u>
                *, Xin Yi, Yan Kong, Xueyang Wang, Xuhai Xu, Yukang Yan, Chun
                Yu, Shwetak Patel, Yuanchun Shi. (* indicates co-first author)
                <br /> <b>CHI 2023</b> –{" "}
                <i>
                  2023 ACM CHI Conference on Human Systems in Computing Systems
                </i>
                .
                <br />[
                <a
                  href={
                    "https://dl.acm.org/doi/fullHtml/10.1145/3544548.3581425"
                  }
                  target="_blank"
                >
                  ACM Digital Library
                </a>
                ] [
                <a href="https://arxiv.org/abs/2303.10435" target="_blank">
                  arXiv Page
                </a>
                ] [
                <a
                  href={require("../../Assets/Projects/trade-off_chi'23_paper.pdf")}
                  target="_blank"
                >
                  Paper
                </a>
                ] [
                <a href="https://www.youtube.com/watch?v=QVe-tPDPT18">Video</a>]
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
                <b>CS598: Deep Learning with Graphs</b>, Teaching Assistant [
                <a href="https://ulab-uiuc.github.io/CS598/">Website</a>
                ]
                <br /> University of Illinois Urbana Champaign, 2024 Fall,
                Instructor: Jiaxuan You
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
            Services
          </p>
          <ul>
            <li>Reviewer: UIST 2024</li>
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
              src={require("../../Assets/avatar_2024.jpg")}
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
              Vitae
            </a>
            ] [<a href={"https://twitter.com/Zirui_Cheng_"}>Twitter</a>] [
            <a href="https://scholar.google.com/citations?user=tndPyfwAAAAJ&hl=en">
              Scholar
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
