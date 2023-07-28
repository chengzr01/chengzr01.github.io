import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        {/* <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row> */}

        <Container>
          <Row style={{ padding: "10px" }}>
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
                      <ul>
                        <li>
                          B.E. in <i>Computer Science and Technology</i> &{" "}
                          <i>Economics and Finance</i>
                        </li>
                        <li>GPA: 3.87/4.00</li>
                      </ul>
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
                  <i>2024 (expected)</i>
                </td>
              </tr>
            </table>
            <br />
            <br />
            <h4 style={{ textAlign: "left" }}>
              <b>Research Interest</b>
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
                      Human-AI Interaction, Software Engineering, Privacy and Security.
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
                  <ul>
                    <li>
                      <b>
                        Modeling the Trade-off of Privacy Preservation and
                        Activity Recognition on Low-Resolution Images
                      </b>
                      <br />
                      Yuntao Wang*, <u>Zirui Cheng</u>*, Xin Yi, Yan Kong,
                      Xueyang Wang, Xuhai Xu, Yukang Yan, Chun Yu, Shwetak
                      Patel, Yuanchun Shi. (<i>CHI'23</i>)
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
            <br />
            <br />
            <h4 style={{ textAlign: "left" }}>
              <b>Research Experience</b>
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
                      <br />
                      Human-Computer Interaction Institute, Advisor: Kenneth
                      Holstein
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
                      <b>University of Califorlia, San Diego</b>
                      <br /> Halıcıoğlu Data Science Institute, Advisor: Haojian
                      Jin
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
                      Natural Language Processing Group
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
                      Department of Computer Science and Technology, Advisor:
                      Yuntao Wang
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
                      (<i>October, 2022</i>) Social Service Excellence
                      Scholarship, Tsinghua Univeristy
                    </li>
                    <li>
                      (<i>October, 2021</i>) Academic Excellence Scholarship,
                      Tsinghua Univeristy
                    </li>
                    <li>
                      (<i>October, 2020</i>) Comprehensive Excellence
                      Scholarship (top 10%), Tsinghua Univeristy
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
            <br />
            <br />
          </Row>
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
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
