import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import privacy_picture from "../../Assets/Projects/trade-off-CHI'23.png";
import privacy_paper from "../../Assets/Projects/trade-off-CHI'23.pdf";
import teacherlm_picture from "../../Assets/Projects/TeacherLM.png";
import teacherlm_paper from "../../Assets/Projects/TeacherLM.pdf";
import wikibench_picture from "../../Assets/Projects/Wikibench.png";
import Card from "react-bootstrap/Card";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> Publications </strong>
        </h1>
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <h4>
            <b>Peer-Reviewed Papers</b>
          </h4>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Card className="project-card-view" style={{minHeight:"40px", width:"70%"}}>
            <Container>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={12}>
                  <Card.Body>
                    <Card.Title style={{ textAlign: "left" }}>
                      <b>
                        Wikibench: Community-Driven Data Curation for AI Evaluation on Wikipedia
                      </b>
                    </Card.Title>
                    <Card.Text style={{ textAlign: "left" }}>
                      Tzu-Sheng Kuo, Aaron Halfaker,{" "}
                      <u>
                        <b>Zirui Cheng</b>
                      </u>, Jiwoo Kim, Meng-Hsin Wu, Tongshuang Wu, Kenneth Holstein, Haiyi Zhu.
                      <br/>
                       <b>CHI 2024</b> – <i>2024 ACM CHI Conference on Human Systems in Computing Systems</i> (Conditionally Accepted).
                       <br/> Key Words: Data Curation, Machine Learning, Social Computing.
                    </Card.Text>
                    {"\n"}
                    {"\n"}
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Card>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Card className="project-card-view" style={{minHeight:"40px", width:"70%"}}>
            <Container>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={12}>
                  <Card.Body>
                    <Card.Title style={{ textAlign: "left" }}>
                      <b>
                        Modeling the Trade-off of Privacy Preservation and
                        Activity Recognition on Low-Resolution Images
                      </b>
                    </Card.Title>
                    <Card.Text style={{ textAlign: "left" }}>
                      Yuntao Wang*,{" "}
                      <u>
                        <b>Zirui Cheng</b>
                      </u>
                      *, Xin Yi, Yan Kong, Xueyang Wang, Xuhai Xu, Yukang Yan,
                      Chun Yu, Shwetak Patel, Yuanchun Shi. (* indicates
                      co-first author.)
                      <br/> <b>CHI 2023</b> – <i>2023 ACM CHI Conference on Human Systems in Computing Systems</i>.
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
                      <a href={privacy_paper} target="_blank">
                        Paper
                      </a>
                      ] [
                      <a href="https://www.youtube.com/watch?v=QVe-tPDPT18">
                        Video
                      </a>
                      ]
                      <br/>
                      Key Words: Usable Privacy & Security, Computer Vision, Machine Learning.
                    </Card.Text>
                    {"\n"}
                    {"\n"}
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Card>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <h4>
            <b>Under-Review Papers</b>
          </h4>
        </Row>
                <Row
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Card className="project-card-view" style={{minHeight:"40px", width:"70%"}}>
            <Container>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={12}>
                  <Card.Body>
                    <Card.Title style={{ textAlign: "left" }}>
                      <b>
                        TreeQuestion: Assessing Conceptual Learning Outcomes with LLM-Generated Multiple-Choice Questions
                      </b>
                    </Card.Title>
                    <Card.Text style={{ textAlign: "left" }}>
                      <u><b>Zirui Cheng</b></u>, Jingfei Xu, Haojian Jin.
                      <br/><b>CSCW 2024</b> – <i>2024 ACM SIGCHI Conference on Computer-Supported Cooperative Work & Social Computing</i> (July 2023 Cycle).
                      <br/>
                      Key Words: Human-AI Collaboration, Large Language Models, Educational Technology.
                    </Card.Text>
                    {"\n"}
                    {"\n"}
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Card>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          
          <h4>
            <b>Preprints</b>
          </h4>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Card className="project-card-view" style={{minHeight:"40px", width:"70%"}}>
            <Container>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={12}>
                  <Card.Body>
                    <Card.Title style={{ textAlign: "left" }}>
                      <b>
                        TeacherLM: Teaching to Fish Rather Than Giving the Fish,
                        Language Modeling Likewise
                      </b>
                    </Card.Title>
                    <Card.Text style={{ textAlign: "left" }}>
                      Nan He*, Hanyu Lai*, Chenyang Zhao*,{" "}
                      <u>
                        <b>Zirui Cheng</b>
                      </u>
                      , Junting Pan, Ruoyu Qin, Ruofan Lu, Rui Lu, Yunchen
                      Zhang, Gangming Zhao, Zhaohui Hou, Zhiyuan Huang, Shaoqing
                      Lu, Ding Liang, Mingjie Zhan. (* indicates co-first
                      author.)
                      <br />[
                      <a
                        href={"https://arxiv.org/abs/2310.19019"}
                        target="_blank"
                      >
                        arXiv Page
                      </a>
                      ] [<a href={teacherlm_paper}>Paper</a>]
                      <br/>
                      Key Words: Large Language Models, Complex Reasoning, Instruction Finetuning.
                    </Card.Text>
                    {"\n"}
                    {"\n"}
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Card>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
