import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Publications() {
  return (
    <Container
      fluid
      style={{
        boxSizing: "border-box",
        paddingTop: "2em",
        paddingBottom: "2em",
        width: "80%",
      }}
      id="publications"
    >
      <Row>
        <Col md={12} style={{ textAlign: "left" }}>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Publications
          </p>
          {/* <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            <i>Preprints</i>
          </p>
          <ul>
            <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
              
            </div>
          </ul> */}
          <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            <i>Peer-Reviewed Papers</i>
          </p>
          <ul>
            <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
              <li>
                <b>Towards Strategic Persuasion with Language Models</b>
                <br />
                <u>
                  <b>Zirui Cheng</b>
                </u>
                , Jiaxuan You.
                <br />
                <b>ICLR 2026</b> – Fourteenth International Conference on Learning Representations.
              </li>
            </div>
            <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
              <li>
                <b>ResearchTown: Simulator of Human Research Community</b>
                <br /> Haofei Yu*, Zhaochen Hong*,{" "}
                <u>
                  <b>Zirui Cheng</b>
                </u>
                *, Kunlun Zhu*, Keyang Xuan, Jinwei Yao, Tao Feng, Jiaxuan You.
                <br /> <b>ICML 2025</b> – Forty-second International Conference
                on Machine Learning.
              </li>
            </div>
            <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
              <li>
                <b>How Far Are We From AGI</b>
                <br /> Tao Feng, Chuanyang Jin, Jingyu Liu, Kunlun Zhu, Haoqin
                Tu,{" "}
                <u>
                  <b>Zirui Cheng</b>
                </u>
                , Guanyu Lin, Jiaxuan You.
                <br /> <b>TMLR</b> – Transactions on Machine Learning Research
                (10/2024).
              </li>
            </div>
            <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
              <li>
                <b>
                  Wikibench: Community-Driven Data Curation for AI Evaluation on
                  Wikipedia
                </b>
                <br /> Tzu-Sheng Kuo, Aaron Lee Halfaker,{" "}
                <u>
                  <b>Zirui Cheng</b>
                </u>
                , Jiwoo Kim, Meng-Hsin Wu, Tongshuang Wu, Kenneth Holstein,
                Haiyi Zhu.
                <br /> <b>CHI 2024</b> – 2024 CHI Conference on Human Factors in
                Computing Systems.
              </li>
            </div>
            <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
              <li>
                <b>
                  TreeQuestion: Assessing Conceptual Learning Outcomes with
                  LLM-Generated Multiple-Choice Questions
                </b>
                <br />
                <u>
                  <b>Zirui Cheng</b>
                </u>
                , Jingfei Xu, Haojian Jin.
                <br /> <b>CSCW 2024</b> – 27th ACM Conference on
                Computer-Supported Cooperative Work and Social Computing.
              </li>
            </div>
            <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
              <li>
                <b>
                  Modeling the Trade-off of Privacy Preservation and Activity
                  Recognition on Low-Resolution Images
                </b>
                <br />
                Yuntao Wang*,{" "}
                <u>
                  <b>Zirui Cheng</b>
                </u>
                *, Xin Yi, Yan Kong, Xueyang Wang, Xuhai Xu, Yukang Yan, Chun
                Yu, Shwetak Patel, Yuanchun Shi.
                <br />
                <b>CHI 2023</b> – 2023 CHI Conference on Human Factors in
                Computing Systems.
              </li>
            </div>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Publications;
