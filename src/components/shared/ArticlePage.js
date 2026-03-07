import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

function ArticlePage({ src }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then(setMarkdown);
  }, [src]);

  return (
    <Container
      fluid
      style={{
        boxSizing: "border-box",
        paddingTop: "2em",
        paddingBottom: "2em",
        width: "80%",
      }}
    >
      <Row>
        <Col md={12} style={{ textAlign: "left" }}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  );
}

export default ArticlePage;
