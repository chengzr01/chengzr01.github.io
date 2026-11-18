import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const highlightedAuthor = "Zirui Cheng";
const listSpacing = { marginBottom: "0.5em", marginTop: "0.5em" };

const publicationGroups = [
  {
    title: "Published as a Graduate Student",
    publications: [
      {
        title:
          "Using Cognitive Models to Improve Language Model Simulation of Human Persuasion Games",
        authors: [
          "Zirui Cheng*",
          "Zeyu Shen*",
          "Thomas L. Griffiths",
          "and Peter Henderson",
        ],
        venue: "Preprint 2026",
      },
      {
        title:
          "Characterizing Rhetorical Misalignment in Decision-Making with Language Models",
        authors: [
          "Zirui Cheng",
          "Joey Chan",
          "Simo Du",
          "Chenhao Tan",
          "Yue Guo",
          "Hao Peng",
        ],
        venue: "Preprint 2026",
      },
      {
        title: "Towards Strategic Persuasion with Language Models",
        authors: ["Zirui Cheng", "Jiaxuan You"],
        venue: "ICLR 2026",
        venueDetails:
          "Fourteenth International Conference on Learning Representations",
      },
      {
        title: "ResearchTown: Simulator of Human Research Community",
        authors: [
          "Haofei Yu*",
          "Zhaochen Hong*",
          "Zirui Cheng*",
          "Kunlun Zhu*",
          "Keyang Xuan",
          "Jinwei Yao",
          "Tao Feng",
          "Jiaxuan You",
        ],
        venue: "ICML 2025",
        venueDetails: "Forty-second International Conference on Machine Learning",
      },
      {
        title: "How Far Are We From AGI: Are LLMs All We Need?",
        authors: [
          "Tao Feng",
          "Chuanyang Jin",
          "Jingyu Liu",
          "Kunlun Zhu",
          "Haoqin Tu",
          "Zirui Cheng",
          "Guanyu Lin",
          "Jiaxuan You",
        ],
        venue: "TMLR",
        venueDetails: "Transactions on Machine Learning Research (10/2024)",
      },
    ],
  },
  {
    title: "Published as an Undergraduate Student",
    publications: [
      {
        title:
          "Wikibench: Community-Driven Data Curation for AI Evaluation on Wikipedia",
        authors: [
          "Tzu-Sheng Kuo",
          "Aaron Lee Halfaker",
          "Zirui Cheng",
          "Jiwoo Kim",
          "Meng-Hsin Wu",
          "Tongshuang Wu",
          "Kenneth Holstein",
          "Haiyi Zhu",
        ],
        venue: "CHI 2024",
        venueDetails: "2024 CHI Conference on Human Factors in Computing Systems",
      },
      {
        title:
          "TreeQuestion: Assessing Conceptual Learning Outcomes with LLM-Generated Multiple-Choice Questions",
        authors: ["Zirui Cheng", "Jingfei Xu", "Haojian Jin"],
        venue: "CSCW 2024",
        venueDetails:
          "27th ACM Conference on Computer-Supported Cooperative Work and Social Computing",
      },
      {
        title:
          "Modeling the Trade-off of Privacy Preservation and Activity Recognition on Low-Resolution Images",
        authors: [
          "Yuntao Wang*",
          "Zirui Cheng*",
          "Xin Yi",
          "Yan Kong",
          "Xueyang Wang",
          "Xuhai Xu",
          "Yukang Yan",
          "Chun Yu",
          "Shwetak Patel",
          "Yuanchun Shi",
        ],
        venue: "CHI 2023",
        venueDetails: "2023 CHI Conference on Human Factors in Computing Systems",
      },
    ],
  },
];

function PublicationItem({ title, authors, venue, venueDetails }) {
  return (
    <li style={listSpacing}>
      <b>{title}</b>
      <br />
      {authors.map((author, index) => (
        <React.Fragment key={author}>
          {index > 0 && ", "}
          {author === highlightedAuthor || author === `${highlightedAuthor}*` ? (
            <>
              <u>
                <b>{highlightedAuthor}</b>
              </u>
              {author.slice(highlightedAuthor.length)}
            </>
          ) : (
            author
          )}
        </React.Fragment>
      ))}
      .
      <br />
      <b>{venue}</b>
      {venueDetails && ` – ${venueDetails}`}.
    </li>
  );
}

function Publications() {
  return (
    <Container fluid className="page-container" id="publications">
      <Row>
        <Col md={12} style={{ textAlign: "left" }}>
          <h2 className="section-title">Publications</h2>
          {publicationGroups.map(({ title, publications }) => (
            <React.Fragment key={title}>
              <p style={listSpacing}>
                <i>{title}</i>
              </p>
              <ul>
                {publications.map((publication) => (
                  <PublicationItem key={publication.title} {...publication} />
                ))}
              </ul>
            </React.Fragment>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Publications;
