import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar_2024.jpg";
import Tilt from "react-parallax-tilt";
import pdf from "../../Assets/Resume/Curriculum_Vitae.pdf";
import { pdfjs } from "react-pdf";
import privacy_paper from "../../Assets/Projects/trade-off-CHI'23-paper.pdf";
import wikibench_paper from "../../Assets/Projects/wikibench-CHI'24-paper.pdf";
import teacherlm_paper from "../../Assets/Projects/teacherlm-paper.pdf";
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
      <Row style={{ width: "100%", marginBottom: "1em", marginTop: "1em" }}>
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
            Hi! I am Zirui Cheng (程子睿, [tsɿʐui tʂʰəŋ]). I am a fourth-year
            undergraduate student in computer science and technology at{" "}
            <a href={"https://www.tsinghua.edu.cn/en/"}>Tsinghua University</a>.
            I will join{" "}
            <a href="https://www.illinois.edu/">
              University of Illinois Urbana-Champaign
            </a>{" "}
            as a M.S. student in computer science starting from 2024 Fall.
            Previously, I also worked as a research intern at Carnegie Mellon
            University and University of California San Diego.
          </p>
          <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            My interest lies at the intersection of <b>machine learning</b> and{" "}
            <b>human-computer interaction</b>. I have been interested in
            building systems to scaffold human interactions with AI systems as
            well as developing algorithms to align AI systems to human
            interactions.
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
          <ul>
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
                . <br />
                <a href="https://heal-workshop.github.io/">
                  HEAL@CHI'24
                </a> –{" "}
                <i>
                  Human Centered Evaluation and Auditing of Large Language
                  Models
                </i>
                .
                <br />[
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
                <a href={wikibench_paper} target="_blank">
                  Paper
                </a>
                ] [
                <a
                  href="https://www.youtube.com/watch?v=VQVNKjjrlJ0"
                  target="_blank"
                >
                  Video
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
                <br />[{/* <a href={""} target="_blank"> */}
                ACM Digital Library
                {/* </a> */}] [{/* <a href="" target="_blank"> */}
                arXiv Page
                {/* </a> */}] [{/* <a href="" target="_blank"> */}
                Paper
                {/* </a> */}] [{/* <a href=""> */}
                Video
                {/* </a> */}]
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
                <a href={privacy_paper} target="_blank">
                  Paper
                </a>
                ] [
                <a href="https://www.youtube.com/watch?v=QVe-tPDPT18">Video</a>]
              </div>
            </li>

            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>
                  TeacherLM: Teaching to Fish Rather Than Giving the Fish,
                  Language Modeling Likewise
                </b>
                <br />
                Nan He*, Hanyu Lai*, Chenyang Zhao*,{" "}
                <u>
                  <b>Zirui Cheng</b>
                </u>
                , Junting Pan, Ruoyu Qin, Ruofan Lu, Rui Lu, Yunchen Zhang,
                Gangming Zhao, Zhaohui Hou, Zhiyuan Huang, Shaoqing Lu, Ding
                Liang, Mingjie Zhan. (* indicates co-first author)
                <br />[
                <a href={"https://arxiv.org/abs/2310.19019"} target="_blank">
                  arXiv Page
                </a>
                ] [<a href={teacherlm_paper}>Paper</a>]
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
            <li>Reviewer: UIST 2024.</li>
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
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            {" "}
            Before joining the Department of Computer Science and Technology, I
            studied in the{" "}
            <a href="https://www.sem.tsinghua.edu.cn/en/">
              School of Economics and Management
            </a>{" "}
            at Tsinghua University. Back then, I also worked as a financial
            analyst at banking companies.
          </div>
        </Col>
        <Col md={3} style={{ textAlign: "center" }}>
          <Tilt
            style={{
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            <img src={myImg} width="75%" className="img-fluid" />
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
            ziruic4@illinois.edu
          </p>
          <p
            style={{
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            [
            <a href={pdf} target="_blank">
              Curriculum Vitae
            </a>
            ] <br /> [
            <a href="https://scholar.google.com/citations?user=tndPyfwAAAAJ&hl=en">
              Google Scholar
            </a>
            ] [<a href={"https://twitter.com/Zirui_Cheng_"}>Twitter</a>]
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Page;
