import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import "./ArticlePage.css";

function ArticlePage({ src }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then(setMarkdown);
  }, [src]);

  return (
    <Container fluid className="page-container">
      <Row>
        <Col md={12} style={{ textAlign: "left" }}>
          <div className="markdown-body">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ArticlePage;
