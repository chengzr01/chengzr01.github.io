import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Resume/Curriculum_Vitae.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container
        fluid
        style={{
          textAlign: "left",
          position: "relative",
          paddingBottom: "30px",
          paddingTop: "150px",
          width: "60%",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          <b>Curriculum Vitae</b>
        </h2>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="text"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download
          </Button>
        </Row>
        <Container>
          <Row style={{ padding: "10px" }}>
            <table>
              <tr>
                <td
                  style={{
                    width: "50%",
                    textAlign: "left",
                    verticalAlign: "top",
                  }}
                >
                  Department of Computer Science and Technology
                  <br />
                  Tsinghua Univeristy
                  <br />
                  Beijing, China
                </td>
                <td
                  style={{
                    width: "50%",
                    textAlign: "right",
                    verticalAlign: "top",
                  }}
                >
                  Mobile: +86 15751375486
                  <br />
                  Email: chengzr19@mails.tsinghua.edu.cn <br />
                  Website: chengzr01.github.io
                </td>
              </tr>
              <br />
            </table>
            <br />
            <br />
            <h4 style={{ textAlign: "left" }}>
              <b>Education</b>
            </h4>
            <hr></hr>
            <table>
              <tr>
                <td
                  style={{
                    width: "80%",
                    textAlign: "left",
                    verticalAlign: "top",
                  }}
                >
                  <ul>
                    <li>
                      <b>Tsinghua University</b>
                      <br />
                      B.E. in Computer Science and Technology, B.A. in Economics
                      and Finance
                    </li>
                  </ul>
                </td>
                <td
                  style={{
                    width: "20%",
                    textAlign: "right",
                    verticalAlign: "top",
                  }}
                >
                  <i>Beijing, China</i>
                  <br />
                  <i>2024</i>
                </td>
              </tr>
            </table>
            <br />
            <br />
            <h4 style={{ textAlign: "left" }}>
              <b>Interests</b>
            </h4>
            <hr></hr>
            <table>
              <tr>
                <td
                  style={{
                    width: "100%",
                    textAlign: "left",
                    verticalAlign: "top",
                  }}
                >
                  <ul>
                    <li>
                      Machine Learning, Natural Language Processing,
                      Human-Computer Interaction.
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
            <br />
            <br />
            <h4 style={{ textAlign: "left" }}>
              <b>Publications</b>
            </h4>
            <hr></hr>
            <table>
              <tr>
                <td
                  style={{
                    width: "100%",
                    textAlign: "left",
                    verticalAlign: "top",
                  }}
                >
                  <b>Peer-reviewed Papers</b>
                  <ul>
                    <li>
                      <b>
                        Wikibench: Community Driven Data Curation for AI
                        Evaluation on Wikipedia
                      </b>
                      <br />
                      Tzu-Sheng Kuo, Aaron Halfaker,{" "}
                      <u>
                        <b>Zirui Cheng</b>
                      </u>
                      , Jiwoo Kim, Meng-Hsin Wu, Tongshuang Wu, Kenneth
                      Holstein, Haiyi Zhu.
                      <br /> <b>CHI 2024</b> –{" "}
                      <i>
                        2024 ACM CHI Conference on Human Systems in Computing
                        Systems
                      </i>
                      .
                    </li>
                    <li>
                      <b>
                        Modeling the Trade-off of Privacy Preservation and
                        Activity Recognition on Low-Resolution Images
                      </b>
                      <br />
                      Yuntao Wang*,{" "}
                      <u>
                        <b>Zirui Cheng</b>
                      </u>
                      *, Xin Yi, Yan Kong, Xueyang Wang, Xuhai Xu, Yukang Yan,
                      Chun Yu, Shwetak Patel, Yuanchun Shi. (* indicates
                      co-first author)
                      <br /> <b>CHI 2023</b> –{" "}
                      <i>
                        2023 ACM CHI Conference on Human Systems in Computing
                        Systems
                      </i>
                      .
                    </li>
                  </ul>
                  <b>Preprints</b>
                  <ul>
                    <li>
                      <b>
                        TeacherLM: Teaching to Fish Rather Than Giving the Fish,
                        Language Modeling Likewise
                      </b>
                      <br />
                      Nan He*, Hanyu Lai*, Chenyang Zhao*,{" "}
                      <u>
                        <b>Zirui Cheng</b>
                      </u>
                      , Junting Pan, Ruoyu Qin, Ruofan Lu, Rui Lu, Yunchen
                      Zhang, Gangming Zhao, Zhaohui Hou, Zhiyuan Huang, Shaoqing
                      Lu, Ding Liang, Mingjie Zhan. (* indicates co-first
                      author) <br />
                      arXiv:2310.19019, 2023.
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
            <br />
            <br />
            <h4 style={{ textAlign: "left" }}>
              <b>Experience</b>
            </h4>
            <hr></hr>
            <table>
              <tr>
                <td
                  style={{
                    width: "80%",
                    textAlign: "left",
                    verticalAlign: "top",
                  }}
                >
                  <ul>
                    <li>
                      <b>Carnegie Mellon University</b>
                      <br /> Research Intern at Human-Computer Interaction
                      Institute, Advisor: Ken Holstein
                    </li>
                  </ul>
                </td>
                <td
                  style={{
                    width: "20%",
                    textAlign: "right",
                    verticalAlign: "top",
                  }}
                >
                  <i>Pittsburgh, PA, USA</i>
                  <br /> <i>2023</i>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "80%",
                    textAlign: "left",
                    verticalAlign: "top",
                  }}
                >
                  <ul>
                    <li>
                      <b>University of California San Diego</b>
                      <br /> Research Intern at Halıcıoğlu Data Science
                      Institute, Advisor: Haojian Jin
                    </li>
                  </ul>
                </td>
                <td
                  style={{
                    width: "20%",
                    textAlign: "right",
                    verticalAlign: "top",
                  }}
                >
                  <i>La Jolla, CA, USA</i>
                  <br /> <i>2023</i>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "80%",
                    textAlign: "left",
                    verticalAlign: "top",
                  }}
                >
                  <ul>
                    <li>
                      <b>SenseTime Technology</b>
                      <br />
                      Research Intern at Natural Language Processing Group
                    </li>
                  </ul>
                </td>
                <td
                  style={{
                    width: "20%",
                    textAlign: "right",
                    verticalAlign: "top",
                  }}
                >
                  <i>Beijing, China</i>
                  <br /> <i>2022</i>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "80%",
                    textAlign: "left",
                    verticalAlign: "top",
                  }}
                >
                  <ul>
                    <li>
                      <b>Tsinghua University</b>
                      <br />
                      Research Intern at Department of Computer Science and
                      Technology, Advisor: Yuntao Wang
                    </li>
                  </ul>
                </td>
                <td
                  style={{
                    width: "20%",
                    textAlign: "right",
                    verticalAlign: "top",
                  }}
                >
                  <i>Beijing, China</i>
                  <br /> <i>2022</i>
                </td>
              </tr>
            </table>
            <br />
            <br />
            <h4 style={{ textAlign: "left" }}>
              <b>Honors</b>
            </h4>
            <hr></hr>
            <table>
              <tr>
                <td
                  style={{
                    width: "100%",
                    textAlign: "left",
                    verticalAlign: "top",
                  }}
                >
                  <ul>
                    <li>
                      Research Excellence Scholarship, Tsinghua Univeristy, 2023
                    </li>
                    <li>
                      Social Service Excellence Scholarship, Tsinghua
                      Univeristy, 2022 - 2023
                    </li>
                    <li>
                      Academic Performance Excellence Scholarship, Tsinghua
                      Univeristy, 2021
                    </li>
                    <li>
                      Comprehensive Excellence Scholarship (Top 10%), Tsinghua
                      Univeristy, 2020
                    </li>
                    <li>
                      Freshmen Scholarship (Top 10%), Tsinghua Univeristy, 2019
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
            <h4 style={{ textAlign: "left" }}>
              <b>Skills</b>
            </h4>
            <hr></hr>
            <table>
              <tr>
                <td
                  style={{
                    width: "100%",
                    textAlign: "left",
                    verticalAlign: "top",
                  }}
                >
                  <b>Technical Skills</b>
                  <ul>
                    <li>
                      <i>Programming Languages</i>: Python, C/C++,
                      Javascript/CSS/HTML, Java, R, Matlab, Verilog, VHDL.
                    </li>
                    <li>
                      <i>Machine Learning</i>: PyTorch, TensorFlow.
                    </li>
                    <li>
                      <i>Web Framework</i>: React, Vue, Django.
                    </li>
                  </ul>
                  <b>Language Skills</b>
                  <ul>
                    <li>
                      <i>Chinese</i>: native in Mandarin, fluent in Wu, Yue.
                    </li>
                    <li>
                      <i>English</i>: fluent, TOEFL 105.
                    </li>
                    <li>
                      <i>German</i>: basic.
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
            <br />
            <br />
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Resume;